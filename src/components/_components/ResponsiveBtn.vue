<template>
    <v-btn v-show="size" v-resize="onResize" v-on:click="openClose" :icon="icon" class=" mx-2 text-xl" variant="text"></v-btn>
</template>

<script setup>
import { ref, onMounted, defineEmits  } from 'vue';

const icon = ref('mdi-filter-variant');
const size = ref(false);

const emit = defineEmits(['openClose']);

const top = ref('top-[-100%]'); 

const openClose = () => {
    icon.value = icon.value === 'mdi-filter-variant' ? 'mdi-window-close' : 'mdi-filter-variant';
    top.value = top.value === 'top-[-100%]' ? 'top-[3.2%]' : 'top-[-100%]';
    emit('openClose', top.value);
}

onMounted(() => {
    onResize();
});

const onResize = () => {
    window.innerWidth <= 767 ? size.value = true : size.value = false;
}
</script>