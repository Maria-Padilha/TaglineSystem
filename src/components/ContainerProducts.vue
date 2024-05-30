<template>
<!-- Iniciando a página home -->

    <!-- Primeira section: utiliza um layout padrão em slot, disponível em _Utils/FirstSection  -->
    <FirstSection>
        <template v-slot:parag-section>Products</template>
        <template v-slot:h3-section>Choose a plan tailored to your needs</template>
    </FirstSection>
    <!-- Fim da primeira section -->

    <!-- Segunda section: utiliza um componente de layout, disponível em _Utils/ProductSection -->
        <!-- o mesmo componente se repete 3 vezes, criando as três sessões dos produtos -->
    <ProductsSection>
        <template v-slot:lastLink>
            <ul class="ul my-5 mx-5 md:px-20">
                <!-- loop de repetição para cada li -->
                <li v-for="link in links2" :key="link.id" :class="link.class" class=" py-1">{{ link.text }}</li>
            </ul>
        </template>
        <template v-slot:lastCol>
            <SheetCard/>
        </template>
    </ProductsSection>

        <!-- segunda repetição utilizando o mesmo componente -->
    <ProductsSection class=" bg-transparent">
        <template v-slot:firstCol>
            <SheetCard/>
        </template>
        <template v-slot:lastLink>
            <ul class="ul my-5 mx-5 md:px-20">
                <!-- utiliza o mesmo loop de repetição, mudando apenas a classe -->
                <li v-for="link in links2" :key="link.id" :class="link.class2" class=" py-1">{{ link.text }}
                </li>
            </ul>
        </template>
    </ProductsSection>

    <!-- terceira e última repetição utilizando o mesmo componente -->
    <ProductsSection>
        <template v-slot:lastLink>
            <ul class="ul my-5 mx-5 md:px-20">
                <!-- utiliza o mesmo loop, mudando a classe -->
                <li v-for="link in links2" :key="link.id" :class="link.class3" class=" py-1">{{ link.text }}
                </li>
            </ul>
        </template>
        <template v-slot:lastCol>
            <SheetCard/>
        </template>
    </ProductsSection>
    <!-- Fim da segunda section -->

    <!-- Terceira section: etapas para criação de conta -->
    <section>
        <h3 class=" text-3xl font-bold mt-20 text-center">Just 3 steps to your new bank account</h3>
        <div class=" w-[60%] mx-auto flex my-20 items-center flex-col md:flex-row">
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
        </div>
    </section>
    <!-- Fim terceira section -->

<!-- Finalizando a página home -->
</template>

<script setup>
// importando os componentes padrão
import FirstSection from '@/components/_Utils/FirstSection.vue';
import ProductsSection from '@/components/_Utils/ProductsSection.vue';
import SheetCard from '@/components/_Utils/SheetCard.vue';

// iniciando o js
import { ref } from 'vue';

// loop de repetição da li, apenas da segunda coluna.
// cada classe corresponde a img check ou não check
const links2 = ref([
    {
        id: 1, 
        text: 'Deposit Protection', 
        class: 'check',
        class2: 'check',
        class3: 'check',
    },
    {
        id: 2, 
        text: 'Smart Saving system', 
        class: 'noCheck',
        class2: 'check',
        class3: 'check',
    },
    {
        id: 3, 
        text: 'Deals and perks from our partners', 
        class: 'noCheck',
        class2: 'check',
        class3: 'check',
    },
    {
        id: 4, 
        text: 'Travel insurance and protection', 
        class: 'noCheck',
        class2: 'noCheck',
        class3: 'check',
    },
    {
        id: 5, 
        text: 'Exclusive card designs', 
        class: 'noCheck',
        class2: 'noCheck',
        class3: 'check',
    }
])
</script>

<!-- iniciando o css -->
<!-- determina a imagem do li para cada classe -->
<style scoped>
.ul .check{
    list-style-type: none;
    list-style-image: url('@/assets/check.png');
}
.ul .noCheck{
    list-style-type: none;
    list-style-image: url('@/assets/close.png');
}
</style>