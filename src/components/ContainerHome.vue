<template>
<!-- Inicando a página home -->

    <!-- Iniciando primeira section: define a sessão azul com as primeiras informações do site -->
    <section>
        <div class="w-screen h-[80vh] bg-blue-900 flex flex-col">
            <h1 class=" text-center md:text-5xl mt-28 text-4xl font-medium text-gray-200">Simple and Safe Banking</h1>
            <p class=" mt-5 md:text-lg font-extralight text-gray-300 text-center">Approved by millions of users worldwide</p>
            <!-- loop para criar os dois botões -->
            <div class=" flex justify-center w-[100%] mt-14">
                <v-btn class=" flex py-6 mx-2 w-44" v-for="button in buttons" :key="button.id">
                    <v-btn :icon="button.icon" class=" text-xl" variant="text"></v-btn>
                    <div>
                        <p class=" text-xs capitalize font-extralight text-left">Dowload on the</p>
                        <p class=" text-lg capitalize font-bold text-left">{{ button.app }}</p>
                    </div>
                </v-btn>
            </div>
        </div>
    </section>
    <!-- Finalizando primeira section -->

    <!-- Segunda section: utiliza um modelo padrão criado em slot para definir 3 cards -->
    <section class=" bg-white pt-5 pb-20 px-5 shadow-md w-[80%] relative lg:top-[-4%] top-[1%] left-[10%] rounded-md">
        <!-- componente de layout dos três cards, disponível em _Utils/ThreeCards -->
        <ThreeCards>
            <template v-slot:h3>Easy payments with one tap</template>
            <template v-slot:parag>Send and request money with anyone. No extra fees.</template>
            <template v-slot:btn>Explore Products</template>
            <template v-slot:img><v-img class=" md:w-40" src="../assets/cursor.png"></v-img></template>
            <template v-slot:h3-col6-1>Get cash back and reward fro every payment you do!</template>
            <template v-slot:parag-col6-1>Hundreds of deals and reward are waiting for you.</template>
            <template v-slot:h3-col6-2>Send and receive payaments from abroad</template>
            <template v-slot:parag-col6-2>Supporting 100+ countries. No hidden fees, unlimited.</template>
            <template v-slot:icon-1><v-btn icon="mdi-cash-multiple" variant="text" class=" text-2xl"></v-btn></template>
            <template v-slot:icon-2><v-btn icon="mdi-earth" variant="text" class=" text-2xl"></v-btn></template>
            <template v-slot:text-1>+100 points cashback</template>
            <template v-slot:text-2>Worldwide support</template>
        </ThreeCards>
    </section>
    <!-- Finalizando a segunda section -->

    <!-- Inicando a última section: cria duas linhas, cada uma contendo um texto e uma 'imagem' -->
    <section class=" w-[80%] mx-auto">
        <!-- primeira linha -->
        <v-row class=" flex items-center">
            <!-- texto da primeira linha -->
            <v-col cols="12" md="7" class=" md:text-left mx-2">
                <h3 class="md:text-3xl text-xl font-bold">Personalize your credit card</h3>
                <p class=" md:w-[80%] md:text-justify my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci, odio fugit corrupti laudantium
                    quasi voluptatibus ea enim sed atque quaerat quis accusantium. Necessitatibus ducimus excepturi
                    laboriosam impedit. Mollitia fuga nihil blanditiis voluptates tempora magni iure reprehenderit
                    consequatur.
                </p>
                <BtnRedirect>Learn More</BtnRedirect>
            </v-col>
            <!-- imagem da primeira linha: utiliza um modelo pronto, disponível em _Utils/SheetCard -->
            <SheetCard />
        </v-row>

        <!-- segunda linha -->
        <v-row class=" flex items-center mt-14">
            <!-- imagem da segunda linha: utiliza o mesmo modelo da anterior -->
            <SheetCard />
            <!-- texto da segunda linha -->
            <v-col cols="12" md="7" class=" md:text-left xl:ml-20 md:ml-10">
                <h3 class="md:text-3xl text-xl font-bold">Investments made simple</h3>
                <p class=" md:w-[80%] md:text-justify my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci, odio fugit corrupti laudantium
                    quasi voluptatibus ea enim sed atque quaerat quis accusantium. Necessitatibus ducimus excepturi
                    laboriosam impedit. Mollitia fuga nihil blanditiis voluptates tempora magni iure reprehenderit
                    consequatur.
                </p>
                <BtnRedirect>Learn More</BtnRedirect>
            </v-col>
        </v-row>
    </section>
    <!-- Finalizando a última section -->

<!-- Finalizando a página home -->
</template>

<script setup>
// importando os componentes de layout padrão
import BtnRedirect from '@/components/_Utils/BtnRedirect.vue';
import SheetCard from '@/components/_Utils/SheetCard.vue';
import ThreeCards from '@/components/_Utils/ThreeCards.vue';

// iniciando com o js
import { ref } from 'vue';

// loop criando cada botão
const buttons = ref([
    {
        id: 1,
        icon: 'mdi-apple',
        app: 'App Store'
    },
    {
        id: 2,
        icon: 'mdi-google-play',
        app: 'Google Play'
    },
])
</script>