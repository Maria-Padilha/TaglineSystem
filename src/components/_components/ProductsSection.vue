<template>
     <section class=" mt-16 bg-stone-200 py-14 px-20">
        <v-row class=" flex items-center justify-center">
            <slot name="firstCol"></slot>
            <v-col cols="12" md="6">
                <h3 class=" font-bold text-3xl">Easy</h3>
                <p>Free</p>
                <div class=" flex flex-col md:flex-row">
                    <div>
                        <ul class="ul my-5 px-5">
                            <li v-for="link in links" :key="link.id" :class="link.class" class=" py-1">{{ link.text }}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <slot name="lastLink"></slot>
                    </div>
                </div>
                <BtnRedirect class=" w-36">Create account</BtnRedirect>
            </v-col>
            <slot name="lastCol"></slot>
        </v-row>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import BtnRedirect from '../_components/BtnRedirect.vue';
const links = ref([
    {
        id: 1, 
        text: 'Send and receive money', 
        class: 'check'
    },
    {
        id: 2, 
        text: 'Free debit card', 
        class: 'check'
    },
    {
        id: 3, 
        text: 'Free virtual debit card', 
        class: 'check'
    },
    {
        id: 4, 
        text: '5 free cash withdrawals from any ATM', 
        class: 'check'
    },
    {
        id: 5, 
        text: '4D Secure system', 
        class: 'check'
    }
])
</script>

<style scoped>
.ul .check{
    list-style-type: none;
    list-style-image: url('@/assets/check.png');
}
</style>