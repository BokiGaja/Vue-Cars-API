<template>
    <form @submit.prevent="addCar">
        <div class="form-group">
            <input type="text" class="form-control" id="brand" placeholder="Brand" v-model="newCar.brand" required>
            <input type="text" class="form-control" id="model" placeholder="Model" v-model="newCar.model" required>
            <label for="years">Year</label>
            <select id="years" v-model="newCar.year" required>
                <option v-for="(year, index) in years" :key="index">{{ year }}</option>
            </select>
            <input type="number" class="form-control" id="maxSpeed" placeholder="Max speed" v-model="newCar.maxSpeed" required>
            <input type="number" class="form-control" id="numberOfDoors" placeholder="Number of doors" v-model="newCar.numberOfDoors" required>
            <hr>
            <label for="isAutomatic">Is Automatic</label>
            <div class="form-check" id="isAutomatic">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="true" v-model="newCar.isAutomatic">
                <label class="form-check-label" for="exampleRadios1" style="margin-right: 35px">
                    Yes
                </label>
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="false" v-model="newCar.isAutomatic">
                <label class="form-check-label" for="exampleRadios2">
                    No
                </label>
            </div>
            <hr>
            <label for="engine">Engine</label>
            <br>
            <div class="form-check form-check-inline" id="engine">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="diesel" v-model="newCar.engine">
                    <label class="form-check-label" for="inlineCheckbox1">diesel</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="petrol" v-model="newCar.engine">
                    <label class="form-check-label" for="inlineCheckbox2">petrol</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="electric" v-model="newCar.engine">
                    <label class="form-check-label" for="inlineCheckbox3">electric</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="hybrid" v-model="newCar.engine">
                    <label class="form-check-label" for="inlineCheckbox4">hybrid</label>
                </div>
            </div>

        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
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
                    engine: []
                },
                years: []
            }
        },

        methods: {
            addCar() {
                carService.createCar(this.newCar);
                this.$router.push('/carAdded');

            }
        },

        created() {
            for (let i = 1990; i<=2018; i++) {
                this.years.push(i);
            }
        }
    }
</script>