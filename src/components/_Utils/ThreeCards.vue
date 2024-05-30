<template>
<!-- Iniciando o componente de layout - 3 cards usados na página home e business -->
    <v-row>
        <!-- primeiro card grande -->
        <v-col cols="12">
            <v-sheet class=" flex items-center text-left justify-between mx-auto rounded-md h-60 bg-stone-200">
               <!-- div contendo titulo, subtitulo e botão -->
                <div class=" px-10 flex flex-col">
                    <h3 class=" md:text-3xl text-xl font-bold">
                        <slot name="h3"></slot>
                    </h3>
                    <p class=" mt-2 md:text-lg font-extralight text-black text-base">
                        <slot name="parag"></slot>
                    </p>
                    <v-btn class=" capitalize font-semibold w-52 mt-5 rounded-full" variant="flat">
                        <slot name="btn"></slot>
                    </v-btn>
                </div>
                <!-- imagem -->
                <div class=" px-14">
                    <slot name="img"></slot>
                </div>
            </v-sheet>
        </v-col>

        <!-- segundo e terceiro card pequenos criado em loop -->
        <v-col cols="12" md="6" v-for="sheet in sheets" :key="sheet.id">
            <v-sheet class=" flex justify-center flex-col mt-1 mx-auto rounded-md h-60 bg-stone-200">
                <!-- primiera div contendo titulo e subtitulo -->
                <div class=" px-10 flex flex-col text-center">
                    <h3 class=" md:text-3xl text-xl font-bold">
                        <slot :name="sheet.h3Slot"></slot>
                    </h3>
                    <p class=" mt-2 md:text-lg font-extralight text-black text-base">
                        <slot :name="sheet.paragSlot"></slot>
                    </p>
                </div>
                <!-- segunda div contendo 2 mini cards e com posição absoluta -->
                <div v-show="size" v-resize="onResize" class="rounded-md bg-white md:w-[18%] md:absolute flex flex-col items-center justify-center 
                md:bottom-[2%] md:h-[18%] md:ml-[14%] shadow-md w-32 h-28 ml-28 mt-1 ">
                    <slot :name="sheet.icon"></slot>
                    <p class=" font-extralight text-sm">
                        <slot :name="sheet.textIcon"></slot>
                    </p>
                </div>
            </v-sheet>
        </v-col>
    </v-row>

<!-- Finalizando o componente -->
</template>

<script setup>
// iniciando o js
import { ref, onMounted } from 'vue';

// função para fazer os 2 mini cards absolutos sumir em determinada largura
const size = ref(true);

onMounted(() => {
    onResize();
});

const onResize = () => {
    window.innerWidth <= 959 ? size.value = false : size.value = true;
}
// fim da função

// loop de repetição para criar os 2 cards pequenos
const sheets = ref([
    {
        id: 1, 
        h3Slot: 'h3-col6-1', 
        paragSlot: 'parag-col6-1', 
        icon: 'icon-1',
        textIcon: 'text-1'
    },
    {
        id: 2, 
        h3Slot: 'h3-col6-2',
        paragSlot: 'parag-col6-2',
        icon: 'icon-2',
        textIcon: 'text-2'
    },
]);
</script>

