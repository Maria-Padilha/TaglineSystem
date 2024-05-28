<template>
     <section class=" bg-white pt-5 pb-20 px-5 shadow-md w-[80%] relative lg:top-[-3%] top-[-1%] left-[10%] rounded-md">
        <CardTree>
            <template v-slot:h3>Easy payments with one tap</template>
            <template v-slot:parag>Send and request money with anyone. No extra fees.</template>
            <template v-slot:btn>Explore Products</template>
            <template v-slot:img><v-img class=" md:w-40" src="../../assets/cursor.png"></v-img></template>
            <template v-slot:h3-col6-1>Get cash back and reward fro every payment you do!</template>
            <template v-slot:parag-col6-1>Hundreds of deals and reward are waiting for you.</template>
            <template v-slot:h3-col6-2>Send and receive payaments from abroad</template>
            <template v-slot:parag-col6-2>Supporting 100+ countries. No hidden fees, unlimited.</template>
            <template v-slot:icon-1><v-btn icon="mdi-cash-multiple" variant="text" class=" text-2xl"></v-btn></template>
            <template v-slot:icon-2><v-btn icon="mdi-earth" variant="text" class=" text-2xl"></v-btn></template>
            <template v-slot:text-1>+100 points cashback</template>
            <template v-slot:text-2>Worldwide support</template>
        </CardTree>
    </section>
</template>

<script setup>
import CardTree from '@/components/_components/CardTree.vue';
</script>