<template>
<!-- Iniciando um componente de layout padrão - card do blog -->

    <!-- imagem do blog -->
    <v-sheet class="bg-stone-300 rounded-md" width="'100%" :height="150"></v-sheet>
    <!-- titulo do blog -->
    <p class="text-left pt-4"><slot name="blogText"></slot></p>
    <!-- autor -->
    <div class="flex items-center mt-2">
        <v-avatar color="grey" size="25"></v-avatar>
        <p class=" text-sm ml-2"><slot name="blogName"></slot></p>
    </div>
    <!-- tag e btn de leia mais -->
    <div class="flex justify-between items-center mt-3">
        <v-chip variant="outlined" color="grey">#<slot name="blogTag"></slot></v-chip>
        <BtnRedirect>Read More</BtnRedirect>
    </div>

<!-- Finalizando o componente do blog -->
</template>

<script setup>
import BtnRedirect from '@/components/_Utils/BtnRedirect.vue';
</script>