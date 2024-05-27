<template>
    <v-footer class=" flex flex-col mt-[100vh] md:mt-60 w-full py-5">
        <div class="bg-blue-950 w-full h-auto text-right absolute bottom-0">
            <v-spacer></v-spacer>
            <input type="text" placeholder="Insert your e-mail here"
                class=" bg-slate-50 mr-5 my-5 w-80 rounded-full py-2 px-4 outline-none">
            <v-btn class=" rounded-full capitalize mr-10 mb-4 mt-4 text-black">Subscribe</v-btn>
            <v-divider></v-divider>
            <v-spacer></v-spacer>
            <div class=" text-left py-5 px-4 flex flex-col md:flex-row">
                <div class=" flex flex-col items-start justify-center">
                    <v-btn class=" capitalize text-xl text-blue-100" append-icon="mdi-airplane" variant="plain"
                        to="/">Tangline
                        <span class=" font-bold">System</span>
                    </v-btn>
                    <div class=" px-3 md:px-10">
                        <v-icon v-for="icon in icons" :key="icon.id" :icon="icon.icon" color="grey-lighten-5"
                            class=" px-5"></v-icon>
                    </div>
                </div>
                <div v-for="column in columns" :key="column.id" class=" flex flex-col items-start justify-center px-5 mt-5 md:mt-0">
                    <p class=" text-white">{{ column.title }}</p>
                    <ul class=" text-slate-400 py-2">
                        <li>{{ column.link1 }}</li>
                        <li>{{ column.link2 }}</li>
                        <li>{{ column.link3 }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </v-footer>
</template>

<script setup>
import { ref } from 'vue';

const columns = ref([
    {id: 1, title: 'Help', link1: 'FAQ', link2: 'Customer Service', link3: 'How to guides'},
    {id: 2, title: 'Other', link1: 'Privacy Policy', link2: 'Sitemap', link3: 'Subscriptions'},
    {id: 3, title: 'Contact us', link1: 'bankio@bankio.com', link2: '+123 111 222 333'},
])

const icons = ref([
    {id: 1, icon: 'mdi-linkedin'},
    {id: 2, icon: 'mdi-twitter'},
    {id: 3, icon: 'mdi-instagram'},
])
</script>