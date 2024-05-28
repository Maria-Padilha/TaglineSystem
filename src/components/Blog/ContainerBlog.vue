<template>
    <FirstSection>
        <template v-slot:parag-section>Blog</template>
        <template v-slot:h3-section>Learn Everting about finance</template>
    </FirstSection>

    <section class=" flex justify-between flex-wrap items-center w-[90%] mx-auto mt-20">
        <v-chip-group>
            <v-chip v-for="tag in tags" :key="tag.id" variant="outlined">
                #{{ tag.tag }}
            </v-chip>
        </v-chip-group>
        <v-chip append-icon="mdi-chevron-down" variant="outlined">Sort by: Newest First</v-chip>
    </section>

    <section class=" w-[90%] mx-auto mt-10">
        <v-row class="flex items-center justify-center">
            <v-col cols="12" md="6" v-for="row1 in rows1" :key="row1.id" class=" bg-white rounded-md shadow-sm mb-5">
                <CardBlog>
                    <template v-slot:blogText>{{ row1.text }}</template>
                    <template v-slot:blogName>{{ row1.name }}</template>
                    <template v-slot:blogTag>{{ row1.tag }}</template>
                </CardBlog>
            </v-col>
        </v-row>

        <v-row class="flex items-center justify-center mt-10">
            <v-col cols="12" md="4" sm="6" v-for="row2 in rows2" :key="row2.id"
                class=" bg-white rounded-md mb-5 shadow-sm">
                <CardBlog>
                    <template v-slot:blogText>{{ row2.text }}</template>
                    <template v-slot:blogName>{{ row2.name }}</template>
                    <template v-slot:blogTag>{{ row2.tag }}</template>
                </CardBlog>
            </v-col>
        </v-row>
    </section>

    <section class=" flex items-center justify-center mt-20">
        <v-btn v-on:click.once="selected" class=" rounded-full mx-2" variant="outlined" icon="mdi-numeric-1"></v-btn>
        <v-btn class=" rounded-full mx-2" variant="text" icon="mdi-numeric-2"></v-btn>
        <v-btn class=" rounded-full mx-2" variant="text" icon="mdi-numeric-3"></v-btn>
    </section>
</template>

<script setup>
import FirstSection from '../_components/FirstSection.vue';
import CardBlog from '../_components/CardBlog.vue';
import { ref } from 'vue';

const tags = ref([
    {id: 1, tag: 'All'},
    {id: 2, tag: 'Taxes'},
    {id: 3, tag: 'Security'},
    {id: 4, tag: 'Budgeting'},
    {id: 5, tag: 'Crypto'},
    {id: 6, tag: 'Investing'},
])

const rows1 = ref([
    {id: 1, text: 'Safety while online shopping',
        name: 'Jane Sparkle', tag: 'Security'
    },
    {id: 2, text: 'Learn how to manage your budget',
        name: 'Mathias Domoney Pederson', tag: 'Budgeting'
    }
])

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
</script>