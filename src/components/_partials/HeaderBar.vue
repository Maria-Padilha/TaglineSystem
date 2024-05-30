<template>
<!-- Iniciando o Header -->

    <!-- criação da navbar -->
    <navbar class=" bg-blue-950 text-gray-200 py-3 px-6 flex flex-col md:flex-row justify-between
        items-center shadow-xl">
        <div class=" sm:flex sm:items-center ">
            <!-- logo -->
            <v-btn class=" capitalize text-2xl md:text-xl" append-icon="mdi-airplane" variant="plain" to="/">
                Tangline <span class=" font-bold">System</span>
            </v-btn>

            <!-- btn responsividade -->
            <v-btn v-show="size" v-resize="onResize" v-on:click="openClose" :icon="icon" class=" mx-2 text-xl"
                variant="text">
            </v-btn>

            <!-- link para as páginas -->
            <ul>
                <li :class="hidden" class=" flex flex-col md:flex-row absolute z-10 shadow-md md:shadow-none bg-blue-header md:relative md:bg-transparent 
                 w-full left-0 h-72 md:h-full justify-center">
                    <!-- loop de repetição para criação de cada link -->
                    <v-btn class=" text-left capitalize text-lg md:text-base" variant="text" v-for="link in links"
                        :key="link.id" :text="link.name" :to="link.route">
                    </v-btn>
                </li>
            </ul>
        </div>
        <!-- btn de signIn -->
        <div>
            <v-btn class=" rounded-full capitalize md:w-40" variant="outlined" append-icon="mdi-lock-check-outline" to="/sign">
                SignIn
            </v-btn>
        </div>
    </navbar>
    <!-- Fim navbar -->

<!-- Finalizando o Header -->
</template>

<script setup>
// iniciando o js
import { ref, onMounted } from 'vue';

// criando constantes para o processo de responsividade
const icon = ref('mdi-filter-variant');
const hidden = ref('none');
const size = ref(false);

// função btn responsivo: altera a visibilidade e o icon
const openClose = () => {
    icon.value = icon.value === 'mdi-filter-variant' ? 'mdi-window-close' : 'mdi-filter-variant';
    hidden.value = hidden.value === 'none' ? 'hidden' : 'none';
}

// função para fazer o btn sumir e os links aparecer assim que o tamanho limite ser atingido
const onResize = () => {
    window.innerWidth <= 767 ? size.value = true : size.value = false;
    window.innerWidth > 767 ? hidden.value = 'hidden' : hidden.value = 'none'
}

// verifica em tempo real a mudança
onMounted(() => {
    onResize();
});

// loop para a criação dos links para as páginas
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

<!-- iniciando o css -->
<!-- definindo a visibilidade dos links através das classes -->
<style scoped>
.none {
    display: none !important;
}

.hidden {
    display: flex !important;
}
</style>