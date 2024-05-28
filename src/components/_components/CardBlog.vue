<template>
    <v-sheet class="bg-stone-300 rounded-md" width="100%" :height="150"></v-sheet>
    <p class="text-left pt-4"><slot name="blogText"></slot></p>

    <div class="flex items-center mt-2">
        <v-avatar color="grey" size="25"></v-avatar>
        <p class=" text-sm ml-2"><slot name="blogName"></slot></p>
    </div>

    <div class="flex justify-between items-center mt-3">
        <v-chip variant="outlined" color="grey">#<slot name="blogTag"></slot></v-chip>
        <BtnRedirect>Read More</BtnRedirect>
    </div>
</template>

<script setup>
import BtnRedirect from '@/components/_components/BtnRedirect.vue';
</script>