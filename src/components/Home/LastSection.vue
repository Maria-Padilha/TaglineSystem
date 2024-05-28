<template>
    <section class=" w-[80%] mx-auto">
        <v-row class=" flex items-center">
            <v-col cols="12" md="7" class=" md:text-left mx-2">
                <h3 class="md:text-3xl text-xl font-bold">Personalize your credit card</h3>
                <p class=" md:w-[80%] md:text-justify my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odio fugit corrupti laudantium
                    quasi voluptatibus ea enim sed atque quaerat quis accusantium. Necessitatibus ducimus excepturi
                    laboriosam impedit. Mollitia fuga nihil blanditiis voluptates tempora magni iure reprehenderit
                    consequatur.
                </p>
                <BtnRedirect>Learn More</BtnRedirect>
            </v-col>
           <SheetCard />
        </v-row>
        <v-row class=" flex items-center mt-14">
           <SheetCard />
            <v-col cols="12" md="7" class=" md:text-left xl:ml-20 md:ml-10">
                <h3 class="md:text-3xl text-xl font-bold">Investments made simple</h3>
                <p class=" md:w-[80%] md:text-justify my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odio fugit corrupti laudantium
                    quasi voluptatibus ea enim sed atque quaerat quis accusantium. Necessitatibus ducimus excepturi
                    laboriosam impedit. Mollitia fuga nihil blanditiis voluptates tempora magni iure reprehenderit
                    consequatur.
                </p>
                <BtnRedirect>Learn More</BtnRedirect>
            </v-col>
        </v-row>
    </section>
</template>

<script setup>
import BtnRedirect from '../_components/BtnRedirect.vue';
import SheetCard from '../_components/SheetCard.vue';
</script>