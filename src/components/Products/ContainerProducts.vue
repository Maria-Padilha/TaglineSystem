<template>
    <FirstSection>
        <template v-slot:parag-section>Products</template>
        <template v-slot:h3-section>Choose a plan tailored to your needs</template>
    </FirstSection>

    <section class=" mt-20 bg-stone-200 flex flex-col items-start justify-start py-5 px-20">
        <h3 class=" font-bold text-3xl">Easy</h3>
        <p>Free</p>
        <div class=" flex">
            <div>
                <ul class="teste">
                    <li>cachorro</li>
                    <li>cachorro</li>
                    <li>cachorro</li>
                    <li>cachorro</li>
                </ul>
            </div>
            <div>

            </div>
        </div>
    </section>
</template>

<script setup>
import FirstSection from '../_components/FirstSection.vue';
</script>

<style scoped>
.teste{
    list-style-type: none;
    list-style-image: url('@/assets/check.png');
}
</style>