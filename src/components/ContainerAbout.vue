<template>
<!-- Iniciando a página about -->

    <!-- Primeira section: utiliza um elemento de slot, disponível em _Utils/FirstSection -->
    <FirstSection>
        <template v-slot:parag-section>About</template>
        <template v-slot:h3-section>Change the way of banking since 2016</template>
    </FirstSection>
    <!-- Fim primeira section -->

    <!-- Segunda section: sheet e botão simulando um vídeo -->
    <section>
        <v-sheet class=" bg-stone-300 w-screen h-[80vh] mt-16 flex 
        items-center justify-center">
            <v-btn icon="mdi-play" color="grey" width="80px" height="80px" class=" text-2xl"></v-btn>
        </v-sheet>
    </section>
    <!-- Fim segunda section -->

    <!-- Terceira section: sessão em azul com algumas informações -->
    <section class=" bg-blue-900 flex flex-col items-center justify-center w-screen h-72">
        <h3 class=" text-white font-bold text-3xl">One app rules theam all</h3>
        <p class=" text-center text-slate-300 w-[50%] mt-5 font-extralight">
            Money transfers, savings, investments, travel insurance and much more
            securely stored in one app in your pocket.
        </p>
        <!-- utilização de um componente de layout em slot, disponível em _Utils/BtnRedirect -->
        <BtnRedirect class=" mt-10 text-white w-36">Create account</BtnRedirect>
    </section>
    <!-- Fim terceira section -->

    <!-- Quarta section: repetição de 4 sheets com algumas informações -->
    <section class=" bg-white py-5 px-5 shadow-md w-[90%]
     relative lg:top-[-1%] top-[0%] left-[5%] rounded-md">
        <v-row>
            <!-- criação das colunas/sheets em loop -->
            <v-col cols="12" md="3" sm="6" v-for="sheet in sheets" :key="sheet.id">
                <v-sheet class="bg-stone-200 w-[100%] h-28 rounded-md
            flex flex-col items-center justify-center">
                    <h4 class=" font-bold text-2xl">{{ sheet.h4 }}</h4>
                    <p>{{ sheet.text }}</p>
                </v-sheet>
            </v-col>
        </v-row>
    </section>
    <!-- Fim da quarta section -->

    <!-- Quinta section: sessão contendo um texto informativo e uma 'imagem' -->
    <section class=" w-[90%] mx-auto">
        <v-row class=" flex items-center justify-center mt-10">
            <v-col cols="12" md="6" class=" md:text-left mx-2">
                <h3 class="md:text-3xl text-xl font-bold mb-5">Transparent, honest, reliable</h3>
                <!-- loop para repetir o parágrafo 3 vezes -->
                <p v-for="parag in parags" :key="parag" class=" md:w-[80%] md:text-justify my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quasi dolorum tempora
                    architecto ducimus iure nulla praesentium veritatis possimus, fuga, molestias doloribus rem
                    recusandae voluptatum?
                </p>
            </v-col>
            <!-- imagem -->
            <v-col cols="12" md="5">
                <v-sheet :height="300" width="90%" class=" bg-stone-300 rounded-md shadow-md mb-5 mt-0"></v-sheet>
            </v-col>
        </v-row>
    </section>
    <!-- Fim quinta section -->

    <!-- Sexta section: apenas repete três cards com um subtitulo -->
    <section class=" bg-stone-200 mt-10 w-full h-auto pb-10">
        <h3 class="md:text-3xl text-xl font-bold mt-16 mb-10 text-center">Careers</h3>
        <v-row class="flex items-center justify-center w-[90%] mx-auto">
            <!-- loop criando cada card -->
            <v-col v-for="career in careers" :key="career.id" cols="12" md="3" sm="5"
                class=" bg-white rounded-md mx-5 mb-5">
                <v-sheet class="bg-stone-300 rounded-md" width="100%" :height="150"></v-sheet>
                <p class="text-center py-4">{{ career.text }}</p>
            </v-col>
        </v-row>
    </section>
    <!-- Fim sexta section -->

    <!-- Última section: contêm uma prêvia da página blog -->
    <section class=" w-full h-auto pb-5">
        <h3 class="md:text-3xl text-xl font-bold mt-16 mb-10 text-center">Blog</h3>
        <v-row class="flex items-center justify-center w-[90%] mx-auto">
            <!-- loop repetindo cada card do blog -->
            <v-col v-for="blog in blogs" :key="blog.id" cols="12" md="3" sm="5"
                class=" bg-white rounded-md mx-5 mb-5 shadow-md">
                <!-- utiliza um componente de layout em slot, disponível em _Utils/CardBlog -->
                <CardBlog>
                    <template v-slot:blogText>{{ blog.text }}</template>
                    <template v-slot:blogName>{{ blog.name }}</template>
                    <template v-slot:blogTag>{{ blog.tag }}</template>
                </CardBlog>
            </v-col>
            <v-col cols="12" md="3" sm="5" class=" mb-20 md:mb-0">
                <v-sheet class="bg-stone-200 rounded-md flex items-center justify-center" width="100%" :height="290">
                    <!-- utilização de um componente de layout em slot, disponível em _Utils/BtnRedirect -->
                    <BtnRedirect>Read More</BtnRedirect>
                </v-sheet>
            </v-col>
        </v-row>
    </section>
    <!-- Fim última section -->

<!-- Finalizando a página about -->
</template>

<script setup>
// importando os componentes padrão de layout
import FirstSection from '@/components/_Utils/FirstSection.vue';
import BtnRedirect from '@/components/_Utils/BtnRedirect.vue';
import CardBlog from '@/components/_Utils/CardBlog.vue';

// iniciando o js
import { ref } from 'vue';

// loop para criação de cada coluna/sheet na quarta section  
const sheets = ref([
    {id: 1, h4: '12M', text: 'Happy Users'},
    {id: 2, h4: '#1', text: 'Banking app'},
    {id: 3, h4: '100+', text: 'Countries'},
    {id: 4, h4: '20', text: 'Awards'},
]);

// loop para repetição dos 3 parágrafos na quinta section
const parags = ref([1,2,3]);

// loop para repetição de 3 cards na sexta section
const careers = ref([
    {id: 1, text: 'Our company culture'},
    {id: 2, text: 'Our offices'},
    {id: 3, text: 'Open positions'},
])

// loop para mostrar a prévia do blog, última section
const blogs = ref([
    {id: 1, text: 'How to fill your taxes in 5 easy steps',
        name: 'Florian Von Dollabil', tag: 'Taxes'
    },
    {id: 2, text: 'Learn how to manage your budget', 
        name: 'Mathias Domoney Pederson', tag: 'Budgeting'
    }
])
</script>