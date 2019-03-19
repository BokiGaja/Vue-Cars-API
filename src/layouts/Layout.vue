<template>
    <div class="container">
        <img alt="Vue logo" src="../assets/logo.png">
        <router-view/>
        <button class="btn btn-primary">
            <router-link :to="{name: 'cars'}" style="color: white">Cars</router-link>
            <router-link :to="{name: 'addCar'}" style="color: white">Add new car</router-link>
        </button>
    </div>
</template>

<script>
    export default {

    }
</script>