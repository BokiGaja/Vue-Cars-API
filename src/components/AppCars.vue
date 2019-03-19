<template>
    <div class="container">
        <h1>Cars</h1>
        <div class="card text-center" v-for="car in cars" :key="car.id">
            <div class="card-body">
                <h5 class="card-title">Car ID: {{ car.id}}</h5>
                <p class="card-text">Brand: {{ car.brand }}</p>
                <p class="card-text">Engine: {{ car.engine }}</p>
                <p class="card-text">Is Automatic: {{ car.isAutomatic }}</p>
                <p class="card-text">Model: {{ car.model }}</p>
                <p class="card-text">Number of Doors: {{ car.numberOfDoors }}</p>
                <p class="card-text">Year: {{ car.year }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { carService } from "../services/Cars";

    export default {
        data() {
            return {
                cars: []
            }
        },

        async created() {
            try {
                const { data } = await carService.getAll();
                this.cars = data;
            } catch (error) {
                console.log(error)
            }
        }
    }
</script>