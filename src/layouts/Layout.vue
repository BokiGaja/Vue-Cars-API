<template>
    <div class="container">
        <img alt="Vue logo" src="../assets/logo.png">
        <button class="btn btn-primary" style="margin-right: 20px; margin-top: 20px">
            <router-link :to="{name: 'cars'}" style="color: white">Cars</router-link>
        </button>
        <button class="btn btn-primary" style="margin-top: 20px">
            <router-link :to="{name: 'addCar'}" style="color: white">Add new car</router-link>
        </button>
        <router-view/>
    </div>
</template>

<script>
    export default {

    }
</script>