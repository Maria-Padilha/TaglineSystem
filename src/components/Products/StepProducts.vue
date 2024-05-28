<template>
    <h3 class=" text-3xl font-bold mt-20 text-center">Just 3 steps to your new bank account</h3>
    <section class=" w-[70%] mx-auto flex my-20 items-center flex-col md:flex-row">

        <div class=" flex flex-col items-center">
            <v-btn icon="mdi-cursor-pointer" class=" mx-5 text-4xl" width="150px" height="150px"></v-btn>
            <p class=" mt-4 text-lg">1. Choose plan</p>
        </div>

        <v-divider :thickness="3" class="border-opacity-50" color="success"></v-divider>

        <div class=" flex flex-col items-center">
            <v-btn icon="mdi-account" class=" mx-5 text-4xl" width="150px" height="150px"></v-btn>
            <p class=" mt-4 text-lg">2. Create account</p>
        </div>

        <v-divider :thickness="3" class="border-opacity-50" color="success"></v-divider>

        <div class=" flex flex-col items-center">
            <v-btn icon="mdi-thumb-up" class=" mx-5 text-4xl" width="150px" height="150px"></v-btn>
            <p class=" mt-4 text-lg">3. Enjoy easy banking!</p>
        </div>

    </section>
</template>