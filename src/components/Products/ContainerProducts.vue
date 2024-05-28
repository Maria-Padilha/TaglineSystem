<template>
    <FirstSection>
        <template v-slot:parag-section>Products</template>
        <template v-slot:h3-section>Choose a plan tailored to your needs</template>
    </FirstSection>

    <ProductsSection>
        <template v-slot:lastLink>
            <ul class="ul my-5 mx-5 md:px-20">
                <li v-for="link in links2" :key="link.id" :class="link.class" class=" py-1">{{ link.text }}
                </li>
            </ul>
        </template>

        <template v-slot:lastCol>
            <SheetCard/>
        </template>
    </ProductsSection>

    <ProductsSection class=" bg-transparent">
        <template v-slot:firstCol>
            <SheetCard/>
        </template>

        <template v-slot:lastLink>
            <ul class="ul my-5 mx-5 md:px-20">
                <li v-for="link in links2" :key="link.id" :class="link.class2" class=" py-1">{{ link.text }}
                </li>
            </ul>
        </template>
    </ProductsSection>

    <ProductsSection>
        <template v-slot:lastLink>
            <ul class="ul my-5 mx-5 md:px-20">
                <li v-for="link in links2" :key="link.id" :class="link.class3" class=" py-1">{{ link.text }}
                </li>
            </ul>
        </template>

        <template v-slot:lastCol>
            <SheetCard/>
        </template>
    </ProductsSection>

</template>

<script setup>
import { ref } from 'vue';
import FirstSection from '../_components/FirstSection.vue';
import ProductsSection from '../_components/ProductsSection.vue';
import SheetCard from '../_components/SheetCard.vue';

const links2 = ref([
    {
        id: 1, 
        text: 'Deposit Protection', 
        class: 'check',
        class2: 'check',
        class3: 'check',
    },
    {
        id: 2, 
        text: 'Smart Saving system', 
        class: 'noCheck',
        class2: 'check',
        class3: 'check',
    },
    {
        id: 3, 
        text: 'Deals and perks from our partners', 
        class: 'noCheck',
        class2: 'check',
        class3: 'check',
    },
    {
        id: 4, 
        text: 'Travel insurance and protection', 
        class: 'noCheck',
        class2: 'noCheck',
        class3: 'check',
    },
    {
        id: 5, 
        text: 'Exclusive card designs', 
        class: 'noCheck',
        class2: 'noCheck',
        class3: 'check',
    }
])

</script>

<style scoped>
.ul .check{
    list-style-type: none;
    list-style-image: url('@/assets/check.png');
}
.ul .noCheck{
    list-style-type: none;
    list-style-image: url('@/assets/close.png');
}
</style>