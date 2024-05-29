<template>
<!-- Iniciando a página de signIn -->

    <!-- Primeira section: criação de conta  -->
    <section class=" bg-white shadow-lg w-[90%] h-auto p-10 mx-auto my-28 rounded-md">
        <v-row>
            <!-- primeira parte com todo o form -->
            <v-col cols="12" md="6" class="p-10">
                <h3 class=" font-bold text-3xl mb-10">Create account</h3>
                <form>
                    <!-- loop para criação dos inputs  -->
                    <div v-for="input in inputs" :key="input.id" class=" w-[90%] my-5 flex flex-col">
                        <label for="name">{{ input.label }}</label>
                        <input type="text" :placeholder="input.placeholder" class="mt-3 outline-none border p-3 rounded-full">
                    </div>
                    <v-checkbox label="I have read and agree to Terms & Conditions and Privacy Policy conditions"></v-checkbox>
                    <v-btn class=" rounded-full bg-black text-white capitalize w-[90%]" size="large">
                        Create business account
                    </v-btn>
                </form>
            </v-col>

            <!-- segunda parte com QR Code -->
            <v-col cols="12" md="6" class="p-10">
                <v-sheet class=" bg-stone-200 w-[100%] h-[100%] rounded-md flex flex-col items-center justify-center">
                    <h4 class="font-bold text-2xl mb-5 mt-20 md:mt-40 text-center">Tired of contact forms?</h4>
                    <p class=" text-center w-[80%] mb-5">Dowload our mobile app and simply scan QR code below and
                        finish setting up your account from your mobile phone.
                    </p>
                    <v-img class="mb-20" height="auto" src="../assets/QRCode.png"  width="200"></v-img>
                </v-sheet>
            </v-col>
        </v-row>
    </section>
    <!-- Fim primeira section -->

<!-- Finalizando a página signIn -->
</template>

<script setup>
// iniciando o js
import { ref } from 'vue';

// loop de repetição para a criação dos inputs, primeira section - parte 1
const inputs = ref([
    { id: 1, label: 'First name', placeholder: 'Enter your first name' },
    { id: 2, label: 'Last name', placeholder: 'Enter your last name' },
    { id: 3, label: 'E-mail', placeholder: 'Enter your email' },
    { id: 4, label: 'Phone number', placeholder: 'Enter your phone number' },
])
</script>