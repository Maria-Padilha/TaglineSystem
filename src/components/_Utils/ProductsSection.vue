<template>
<!-- Iniciando o componente de layout - produtos -->

     <section class=" mt-16 bg-stone-200 py-14 px-20">
        <v-row class=" flex items-center justify-center">
            <!-- adiciona a imagem antes do texto, quando necessário -->
            <slot name="firstCol"></slot>
            <v-col cols="12" md="6">
                <h3 class=" font-bold text-3xl">Easy</h3>
                <p>Free</p>
                <!-- criação dos links li com check e não check -->
                <div class=" flex flex-col md:flex-row">
                    <!-- links que se repetem em todas as sections -->
                    <div>
                        <ul class="ul my-5 px-5">
                            <!-- loop de repetição criando cada li -->
                            <li v-for="link in links" :key="link.id" :class="link.class" class=" py-1">{{ link.text }}</li>
                        </ul>
                    </div>
                    <!-- segunda coluna em slot para a criação dos li -->
                    <div>
                        <slot name="lastLink"></slot>
                    </div>
                </div>
                <BtnRedirect class=" w-36">Create account</BtnRedirect>
            </v-col>
            <!-- adiciona a imagem depois do texto, quando necessário -->
            <slot name="lastCol"></slot>
        </v-row>
    </section>
</template>

<script setup>
// importando componente layout
import BtnRedirect from '../_Utils/BtnRedirect.vue';

// iniciando o js
import { ref } from 'vue';

// loop de repetição para a criação dos links iguais
const links = ref([
    {
        id: 1, 
        text: 'Send and receive money', 
        class: 'check'
    },
    {
        id: 2, 
        text: 'Free debit card', 
        class: 'check'
    },
    {
        id: 3, 
        text: 'Free virtual debit card', 
        class: 'check'
    },
    {
        id: 4, 
        text: '5 free cash withdrawals from any ATM', 
        class: 'check'
    },
    {
        id: 5, 
        text: '4D Secure system', 
        class: 'check'
    }
])
</script>

<!-- iniciando o css -->
    <!-- adiciona a img de check nas classes -->
<style scoped>
.ul .check{
    list-style-type: none;
    list-style-image: url('@/assets/check.png');
}
</style>
