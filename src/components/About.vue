<script setup>
const lists = [
  {
    desc: 'Nunc quis justo sed odio scelerisque.',
  },
  {
    desc: 'Duis tristique lorem non risus dignissim.',
  },
];
</script>

<template>
  <section id="about" class="relative w-full">
    <div class="grid grid-cols-6 container mx-auto min-h-screen md:min-h-0 lg:min-h-screen text-white py-12 lg:pl-0 px-3 lg:px-0">
      <div class="flex items-start lg:items-center col-span-6 md:col-span-3 lg:col-span-4">
        <div>
          <h2 class="text-buku-blue text-4xl lg:text-6xl 2xl:text-7xl font-black">
            About The Protem
          </h2>
          <img src="../assets/icon/line.svg" class="my-6" alt="Line">
          <p class="leading-9 lg:leading-8 w-full lg:w-4/6 text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed dui mollis, finibus odio eget, cursus nibh. Ut accumsan, ipsum a hendrerit tempor, ex tortor
            consectetur tortor, at viverra leo enim at tortor. Mauris tristique purus purus, sit amet tempor lacus suscipit at. Quisque tristique orci magna, vitae tincidunt
            lacus maximus vitae. Lorem ipsum dolor sit amet, consectetur.
          </p>
          <p v-for="(list, index) in lists" :key="index" class="text-gray-700 flex items-center gap-3 py-2">
            <img src="../assets/icon/icon.svg" class="border-2 rounded-full border-buku-blue p-2" alt="icon">{{ list.desc }}
          </p>
          <button class="bg-buku-yellow py-3 px-10 mt-8 text-buku-blue font-bold hover:bg-yellow-400 ease-in-out duration-300">
            Learn More
          </button>
        </div>
      </div>

      <div class="hidden md:flex lg:hidden items-start col-span-3 pl-8 mt-28">
        <img alt="Foto" class="lg:absolute lg:bottom-0 lg:right-0 lg:w-6/12 2xl:w-auto" src="../assets/img/about.png">
      </div>
    </div>
    <img alt="Foto" class="block md:hidden lg:block lg:absolute lg:bottom-0 lg:right-0 lg:w-6/12 2xl:w-auto" src="../assets/img/about.png">
  </section>
</template>
