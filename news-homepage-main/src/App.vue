<script setup lang="ts">
import MainArticles from "./components/MainArticles.vue";
import NavBar from "./components/NavBar.vue";
import PopularArticles from "./components/PopularArticles.vue";
</script>

<template>
  <main class="max-w-[1110px] mx-auto bg-off-white px-4 pb-10 md:px-2 2xl:px-0">
    <NavBar />
    <MainArticles />
    <PopularArticles />
  </main>
</template>

<style scoped></style>
