<template>
    <!-- criação de um component de layout padrão -->
        <!-- sessão inicial de todas as páginas, com titulo e subtitulo -->
    <section class=" mt-20 flex flex-col items-center justify-center">
        <p><slot name="parag-section"></slot></p>
        <h3 class=" text-4xl font-bold mt-3 text-center"><slot name="h3-section"></slot></h3>
    </section>
</template>