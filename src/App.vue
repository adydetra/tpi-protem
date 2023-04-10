<script setup>
  import TheHeader from './components/TheHeader.vue'
  import Hero from './components/Hero.vue'
  import About from './components/About.vue'
  import Future from './components/Future.vue'
  import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <section class="min-h-screen md:min-h-full md:pb-16 lg:min-h-screen lg:pb-0" id="bg">
    <TheHeader />
    <Hero />
  </section>
  <About />
  <Future />
  <TheFooter />
</template>

<style scoped>
  #bg {
    background: #024D94;
  }

  @media (min-width: 1024px) {
    #bg {
      background: linear-gradient(
        to right,
        #024D94 0%,
        #024D94 53%,
        #F8D171 47%,
        #F8D171 100%
      )
    }
  }

  @media (min-width: 1536px) {
    #bg {
      background: linear-gradient(
        to right,
        #024D94 0%,
        #024D94 57%,
        #F8D171 43%,
        #F8D171 100%
      )
    }
  }
</style>
