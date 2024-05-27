<template>
    <div class="w-screen h-96 bg-blue-900 flex flex-col">
        <h1 class=" text-center md:text-5xl mt-20 text-4xl font-medium text-gray-200">Simple and Safe Banking</h1>
        <p class=" mt-2 md:text-lg font-extralight text-gray-300 text-center">Approved by millions of users worldwide
        </p>
        <div class=" flex justify-center w-[100%] mt-12">
            <v-btn class=" flex py-6 mx-2 w-44" v-for="button in buttons" :key="button.id">
                <v-btn :icon="button.icon" class=" text-xl" variant="text"></v-btn>
                <div>
                    <p class=" text-xs capitalize font-extralight text-left">Dowload on the</p>
                    <p class=" text-lg capitalize font-bold text-left">{{ button.social }}</p>
                </div>
            </v-btn>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const buttons = ref([
        {
            id: 1, 
            icon: 'mdi-apple', 
            social: 'App Store'
        },
        {
            id: 2, 
            icon: 'mdi-google-play', 
            social: 'Google Play'
        },
    ])
</script>