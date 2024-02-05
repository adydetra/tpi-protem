<script setup>
import FutureCard from './app/FutureCard.vue';

const future = [
  { title: 'Data Stored', icon: '1', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.' },
  { title: 'Fingerprint lock', icon: '2', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.' },
  { title: 'Innovative Idea', icon: '3', desc: 'Lorem ipsum dolor sLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.' },
  { title: 'Password Protect', icon: '4', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.' },
];
</script>

<template>
  <section class="bg-gray-100">
    <div class="container mx-auto min-h-screen py-28 text-center space-y-8">
      <h2 class="text-4xl lg:text-6xl 2xl:text-7xl font-black text-buku-blue">
        Future of The Protem
      </h2>
      <img src="../assets/icon/line.svg" class="mx-auto" alt="icon">
      <p class="leading-8 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit<br>
        amet leo. Mauris feugiat erat tellus.
      </p>
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-36 pt-8 px-3 lg:px-0">
        <FutureCard v-for="(futures, index) in future" :key="index" :title="futures.title" :icon="futures.icon" :desc="futures.desc" />
      </div>
    </div>
  </section>
</template>
