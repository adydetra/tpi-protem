<script setup>
import TheHeader from './components/TheHeader.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Future from './components/Future.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <section id="bg" class="min-h-screen md:min-h-full md:pb-16 lg:min-h-screen lg:pb-0">
    <TheHeader />
    <Hero />
  </section>
  <About />
  <Future />
  <TheFooter />
</template>

<style scoped>
#bg {
  background: #024d94;
}

@media (min-width: 1024px) {
  #bg {
    background: linear-gradient(to right, #024d94 0%, #024d94 53%, #f8d171 47%, #f8d171 100%);
  }
}

@media (min-width: 1536px) {
  #bg {
    background: linear-gradient(to right, #024d94 0%, #024d94 57%, #f8d171 43%, #f8d171 100%);
  }
}
</style>
