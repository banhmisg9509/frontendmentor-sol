<template>
  <header class="max-w-screen h-[156px] bg-Cyan1 relative">
    <img
      :src="headerImageDesktop"
      alt="header img"
      class="hidden sm:inline w-full h-full object-cover"
    />
    <img
      :src="headerImageMobile"
      alt="header img"
      class="sm:hidden w-full h-full object-cover"
    />
    <div class="absolute w-full bottom-0 translate-y-1/2">
      <JobFilter />
    </div>
  </header>
</template>

<script setup lang="ts">
import headerImageDesktop from "../assets/images/bg-header-desktop.svg";
import headerImageMobile from "../assets/images/bg-header-mobile.svg";
import JobFilter from "./JobFilter.vue";
</script>
