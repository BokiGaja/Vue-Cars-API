<template>
    <div class="container">
        <form @submit.prevent="addCar">
            <div class="form-group">
                <input type="text" class="form-control" id="brand" placeholder="Brand" v-model="newCar.brand" required minlength="2">
                <input type="text" class="form-control" id="model" placeholder="Model" v-model="newCar.model" required minlength="2">
                <label for="years">Year</label>
                <select id="years" v-model="newCar.year" required>
                    <option v-for="(year, index) in years" :key="index">{{ year }}</option>
                </select>
                <input type="number" class="form-control" id="maxSpeed" placeholder="Max speed" v-model="newCar.maxSpeed" required>
                <input type="number" class="form-control" id="numberOfDoors" placeholder="Number of doors" v-model="newCar.numberOfDoors" required>
                <hr>
                <label for="isAutomatic">Is Automatic</label>
                <div class="form-check" id="isAutomatic">
                    <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="true" v-model="newCar.isAutomatic">
                </div>
                <hr>
                <label for="engine">Engine</label>
                <br>
                <div class="form-check form-check-inline" id="engine">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="diesel" value="diesel" v-model="newCar.engine">
                        <label class="form-check-label" for="diesel">diesel</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="petrol" value="petrol" v-model="newCar.engine">
                        <label class="form-check-label" for="petrol">petrol</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="electric" value="electric" v-model="newCar.engine">
                        <label class="form-check-label" for="electric">electric</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="hybrid" value="hybrid" v-model="newCar.engine">
                        <label class="form-check-label" for="hybrid">hybrid</label>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <button class="btn btn-danger" @click="resetForm">Reset form</button>
        <button class="btn btn-success" @click="previewCar">Preview</button>
    </div>
</template>

<script>
    import { carService } from "../services/Cars";
    export default {
        data() {
            return {
                newCar: {
                    brand : '',
                    model: '',
                    year: null,
                    maxSpeed: null,
                    numberOfDoors: null,
                    isAutomatic: null,
                    engine: ''
                },
                editing: false,
                years: []
            }
        },

        methods: {
            addCar() {
                if (!this.editing) {
                    carService.createCar(this.newCar);
                    this.$router.push('/carAdded');
                } else {
                    carService.edit(this.$route.params.id, this.newCar);
                    this.$router.push('/carAdded');
                }
            },

            resetForm() {
                this.newCar = {...this.newCar,
                    brand: '',
                    model: '',
                    year: null,
                    maxSpeed: null,
                    numberOfDoors: null,
                    isAutomatic: null,
                    engine: []
                };
            },

            previewCar() {
                alert(JSON.stringify(this.newCar));
            }
        },

        async created() {
            for (let i = 1990; i<=2018; i++) {
                this.years.push(i);
            }
            try {
                const { data } = await carService.get(this.$route.params.id);
                if (data) {
                    this.newCar = {...data};
                    this.editing = true;
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
</script>