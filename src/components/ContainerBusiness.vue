<template>
<!-- Iniciando a página business -->

     <!-- Primeira section: utiliza um elemento de slot, disponível em _Utils/FirstSection -->
     <FirstSection>
        <template v-slot:parag-section>Business Solutions</template>
        <template v-slot:h3-section>We have got your business covered</template>
    </FirstSection>
    <!-- Fim primeira section -->

    <!-- Iniciando a segunda section: utiliza um modelo padrão criado em slot para definir 3 cards -->
    <section class=" bg-stone-200 flex items-center justify-center w-full h-auto py-16 mt-20 mx-auto">
        <div class=" w-[80%]">
            <!-- componente de layout dos três cards, disponível em _Utils/ThreeCards -->
            <ThreeCards class="bg-white pt-5 pb-20 px-5 shadow-md w-[100%] relative rounded-md">
               <template v-slot:h3>Control your business</template>
               <template v-slot:parag>View all your money transfers in our beautifully designed bank dashboards. 
                <br>Send money with one click.</template>
               <template v-slot:btn>Request web app demo</template>
               <template v-slot:img><v-img class=" md:w-52" src="../assets/dados.png"></v-img></template>
               <template v-slot:h3-col6-1>Automated payments</template>
               <template v-slot:parag-col6-1>Don't waste time doing same transfers every month. 
                <br>Use our automated payments and enjoy your free time!
               </template>
               <template v-slot:h3-col6-2>Team collaboration</template>
               <template v-slot:parag-col6-2>Grant acess and permissions to your team mates.
                <br>No more secret transactions!
               </template>
               <template v-slot:icon-1><v-btn icon="mdi-cash-multiple" variant="text" class=" text-2xl"></v-btn></template>
               <template v-slot:icon-2><v-btn icon="mdi-earth" variant="text" class=" text-2xl"></v-btn></template>
               <template v-slot:text-1>+100 points cashback</template>
               <template v-slot:text-2>Worldwide support</template>
           </ThreeCards>
        </div>
    </section>
    <!-- Fim segunda section -->

    <!-- Última section: repetição de 5 btns -->
    <section class=" flex flex-col items-center">
        <h3 class=" text-3xl font-bold mt-20 text-center">Other benefits</h3>
        <div class=" mx-auto flex mt-20 items-center justify-center flex-wrap md:flex-row">
            <!-- loop de repetição para criar cada btn -->
            <div class=" flex flex-col items-center mx-10 mb-5" v-for="btn in buttons" :key="btn.id">
                <v-btn :icon="btn.icon" class=" mx-5 text-3xl" width="100px" height="100px"></v-btn>
                <p class=" mt-4 text-lg">{{ btn.text }}</p>
            </div>
        </div>
        <v-btn class=" rounded-full bg-black text-white my-14 capitalize" size="large">Create business account</v-btn>
    </section>
    <!-- Fim última section -->

<!-- Finalizando página business -->
</template>

<script setup>
// importando os componentes de layout
import FirstSection from '@/components/_Utils/FirstSection.vue';
import ThreeCards from '@/components/_Utils/ThreeCards.vue';

// iniciando js
import { ref } from 'vue';

// loop de repetição para a criação dos btns, última section
const buttons = ref([
    {id: 1, icon: 'mdi-puzzle-outline', text: 'Apps integrations'},
    {id: 2, icon: 'mdi-text-box-outline', text: 'Easy invoicing'},
    {id: 3, icon: 'mdi-shield-lock-outline', text: 'High security system'},
    {id: 4, icon: 'mdi-smart-card-outline', text: 'Card management'},
    {id: 5, icon: 'mdi-emoticon-outline', text: 'No transfer fess'},
])
</script>