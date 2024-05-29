<template>
<!-- Iniciando a página blog -->

    <!-- Primeira section: utiliza um elemento de slot, disponível em _Utils/FirstSection -->
    <FirstSection>
        <template v-slot:parag-section>Blog</template>
        <template v-slot:h3-section>Learn Everting about finance</template>
    </FirstSection>
    <!-- Fim primeira section -->

    <!-- Segunda section: criação do grupo de tags -->
    <section class=" flex justify-between flex-wrap items-center w-[90%] mx-auto mt-20">
        <v-chip-group>
            <!-- loop para criar cada tag -->
            <v-chip v-for="tag in tags" :key="tag.id" variant="outlined">
                #{{ tag.tag }}
            </v-chip>
        </v-chip-group>
        <v-chip append-icon="mdi-chevron-down" variant="outlined">Sort by: Newest First</v-chip>
    </section>
    <!-- Fim segunda section -->

    <!-- Terceira section: criação de todos os cards do blog -->
    <section class=" w-[80%] md:w-[90%] lg:w-[100%] mx-auto mt-10">
        <!-- linha dos dois primeiros cards, tamanho grande -->
        <v-row class="flex items-center justify-evenly">
            <!-- loop de repetição criando os dois cards -->
            <v-col cols="12" md="5" v-for="row1 in rows1" :key="row1.id" class=" bg-white rounded-lg p-3 shadow-lg mb-5 mx-3">
                <!-- utilização de um componente de layout, disponível em _Utils/CardBlog -->
                <CardBlog>
                    <template v-slot:blogText>{{ row1.text }}</template>
                    <template v-slot:blogName>{{ row1.name }}</template>
                    <template v-slot:blogTag>{{ row1.tag }}</template>
                </CardBlog>
            </v-col>
        </v-row>

        <!-- linha dos outros seis cards, tamanho pequeno -->
        <v-row class="flex items-center justify-evenly mt-10">
            <!-- loop de repetição criando os seis cards -->
            <v-col cols="12" md="3" sm="5" v-for="row2 in rows2" :key="row2.id"
                class=" bg-white rounded-lg p-3 mb-5 shadow-lg mx-3 md:mx-5">
                <!-- utilização de um componente de layout, disponível em _Utils/CardBlog -->
                <CardBlog>
                    <template v-slot:blogText>{{ row2.text }}</template>
                    <template v-slot:blogName>{{ row2.name }}</template>
                    <template v-slot:blogTag>{{ row2.tag }}</template>
                </CardBlog>
            </v-col>
        </v-row>
    </section>
    <!-- Fim terceira section -->

    <!-- Última section: simulando uma paginação -->
    <section class=" flex items-center justify-center mt-16 md:mt-20 mb-5 md:mb-0">
        <!-- loop de repetição criando cada botão -->
        <v-btn v-for="btn in buttons" :key="btn.id" class=" rounded-full mx-2" 
        :variant="btn.variant" :icon="btn.icon"></v-btn>
    </section>
    <!-- Fim última section -->

<!-- Finalizando página blog -->
</template>

<script setup>
// importando os componentes de layout
import FirstSection from '@/components/_Utils/FirstSection.vue';
import CardBlog from '@/components/_Utils/CardBlog.vue';

// iniciando o js
import { ref } from 'vue';

// loop de criação das tags, segunda section 
const tags = ref([
    {id: 1, tag: 'All'},
    {id: 2, tag: 'Taxes'},
    {id: 3, tag: 'Security'},
    {id: 4, tag: 'Budgeting'},
    {id: 5, tag: 'Crypto'},
    {id: 6, tag: 'Investing'},
])

// loop de repetição criando dois cards grandes, terceira section 
const rows1 = ref([
    {id: 1, text: 'Safety while online shopping',
        name: 'Jane Sparkle', tag: 'Security'
    },
    {id: 2, text: 'Learn how to manage your budget',
        name: 'Mathias Domoney Pederson', tag: 'Budgeting'
    }
])

// loop de repetição criando os seis cards pequenos, terceira section
const rows2 = ref([
    {id: 1, text: 'How to fill your taxes in 5 easy steps',
        name: 'Florian Von Dollabil', tag: 'Taxes'
    },
    {id: 2, text: 'Choose the best crypto in 2023',
        name: 'Mathias Domoney Pederson', tag: 'Crypto'
    },
    {id: 3, text: 'What to do when you lose your credit card',
        name: 'Jane Sparkle', tag: 'Security'
    },
    {id: 4, text: 'What is bitcoin',
        name: 'Florian Von Dollabil', tag: 'Crypto'
    },
    {id: 5, text: 'Budgeting in relationship',
        name: 'Mathias Domoney Pederson', tag: 'Budgeting'
    },
    {id: 6, text: '6 steps how to set up investment account',
        name: 'Jane Sparkle', tag: 'Investing'
    }
])

// loop de repetição para a criação dos btns paginação, última section
const buttons = ref([
    {id: 1, variant: 'outlined', icon: 'mdi-numeric-1'},
    {id: 2, variant: 'text', icon: 'mdi-numeric-2'},
    {id: 3, variant: 'text', icon: 'mdi-numeric-3'},
])
</script>