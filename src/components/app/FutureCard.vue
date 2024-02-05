<script setup>
defineProps ({
  title: String,
  icon: String,
  desc: String,
});
</script>

<template>
  <div class="grid grid-rows-3 grid-flow-col gap-4">
    <div class="row-span-3 bg-buku-yellow hidden md:flex justify-center items-center md:w-36 lg:w-40 2xl:-w-34 mr-2">
      <img :src="`/future-icon-${icon}.svg`" :alt="title">
    </div>
    <div class="col-span-2 text-left flex lg:block items-center gap-3">
      <div class="md:hidden bg-buku-yellow rounded-full flex items-center p-3">
        <img :src="`/future-icon-${icon}.svg`" class="size-4" :alt="title">
      </div>
      <h3 class="text-buku-blue font-bold text-xl lg:text-3xl">
        {{ title }}
      </h3>
    </div>
    <div class="row-span-2 col-span-2 text-left text-gray-600 leading-6 lg:leading-normal">
      {{ desc }}
    </div>
  </div>
</template>
