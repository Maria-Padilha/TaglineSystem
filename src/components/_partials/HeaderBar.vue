<template>
    <div class=" bg-blue-950 text-gray-100 py-3 px-6 flex flex-col md:flex-row justify-between
    items-center shadow-xl">
        <div class=" sm:flex sm:items-center ">
            <v-btn class=" capitalize text-2xl md:text-xl" append-icon="mdi-airplane" variant="plain" to="/">Tangline
                <span class=" font-bold">System</span>
            </v-btn>
            <ul>
                <li ref="navLinks" :class="top" class=" flex flex-col md:flex-row absolute z-10 bg-blue-900 md:relative md:bg-transparent 
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
            <v-btn v-show="size" v-resize="onResize" v-on:click="openClose" :icon="icon" class=" mx-2 text-gray-100 text-xl" variant="text"></v-btn>
        </div>
    </div>
</template>
<v-btn class=" capitalize" ></v-btn>
<script setup>
  import { ref, onMounted } from 'vue';

  const icon = ref('mdi-filter-variant'); 
  const top = ref('top-[-100%]'); 
  const size = ref(false);
  
  const openClose = () => {
    icon.value = icon.value === 'mdi-filter-variant' ? 'mdi-window-close' : 'mdi-filter-variant';
    top.value = top.value === 'top-[-100%]' ? 'top-[4%]' : 'top-[-100%]';    
  }

    onMounted(() => {
        onResize();
    });

    const onResize = () => {
        window.innerWidth <= 767 ? size.value = true : size.value = false;
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