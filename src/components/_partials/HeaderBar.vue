<template>
    <div class=" bg-blue-950 text-gray-200 py-3 px-6 flex flex-col md:flex-row justify-between
    items-center shadow-xl">
        <div class=" sm:flex sm:items-center ">
            <v-btn class=" capitalize text-2xl md:text-xl" append-icon="mdi-airplane" variant="plain" to="/">Tangline
                <span class=" font-bold">System</span>
            </v-btn>
            <ul>
                <li :class="topToogle" class=" flex flex-col md:flex-row absolute z-10 bg-stone-400 md:relative md:bg-transparent 
                md:top-0 w-full left-0 h-48 md:h-full justify-center">
                    <v-btn class=" text-left capitalize text-lg md:text-base" variant="text" v-for="link in links"
                        :key="link.id" :text="link.name" :to="link.route"></v-btn>
                </li>
            </ul>
        </div>
        <div>
            <v-btn class=" rounded-full capitalize md:w-40" variant="outlined"
                append-icon="mdi-lock-check-outline" to="/signIn">SignIn
            </v-btn>
            <ResponsiveBtn @open-close="event"/>
        </div>
    </div>
</template>
<v-btn class=" capitalize" ></v-btn>
<script setup>
import ResponsiveBtn from '../_components/ResponsiveBtn.vue';
  import { ref } from 'vue';

  const topToogle = ref('top-[-100%]'); 
  
  const event = (top) => {
     topToogle.value = top;
  }

  const links = ref([
    {
        id: 1, 
        name: 'Products',
        route: '/products'
    },
    {
        id: 2, 
        name: 'About',
        route: '/about'
    },
    {
        id: 3, 
        name: 'Blog',
        route: '/blog'
    },
    {
        id: 3, 
        name: 'Business Solutions',
        route: '/business'
    },
  ])
</script>