<script setup>
import { ref } from 'vue';

const showMenu = ref(false);
const navs = ref([
  {
    title: 'Home',
    href: '#home',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Features',
  },
  {
    title: 'Collection',
  },
  {
    title: 'Contact',
  },
]);
</script>

<template>
  <header class="container mx-auto flex justify-between items-center lg:py-12 py-3 relative z-10 px-3 lg:px-0">
    <nav class="container mx-auto lg:flex lg:justify-between lg:items-center">
      <div class="flex items-center justify-between">
        <router-link to="/">
          <img src="../assets/icon/logo.svg" class="-ml-4" alt="Logo">
        </router-link>
        <div class="flex lg:hidden" @click="showMenu = !showMenu">
          <button type="button" class="text-white hover:text-gray-400 focus:outline-none focus:text-gray-4">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:mt-0 gap-3 lg:gap-6 2xl:gap-8 lg:text-buku-blue text-buku-yellow pb-8 lg:pb-0 -mb-8 lg:mb-0 border-b-2 lg:border-0 border-gray-400"
      >
        <li v-for="(nav, index) in navs" :key="index">
          <a :href="nav.href" class="hover:text-gray-300 lg:hover:text-blue-700 hover:border-b border-gray-300 lg:border-blue-500 pb-1">{{ nav.title }}</a>
        </li>
        <button
          class="py-3 font-semibold bg-buku-yellow lg:bg-buku-blue text-buku-blue w-40 lg:text-white px-12 hover:bg-yellow-400 lg:hover:bg-blue-900 ease-in-out duration-300"
        >
          Sign Up
        </button>
      </ul>
    </nav>
  </header>
</template>
