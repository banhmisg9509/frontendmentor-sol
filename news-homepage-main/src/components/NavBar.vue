<script lang="ts" setup>
import { ref } from "vue";
import logo from "/src/images/logo.svg";

const isShowMobileMenu = ref(false);

const toggleMenu = () => {
  isShowMobileMenu.value = !isShowMobileMenu.value;
};
</script>
<template>
  <div class="flex items-center justify-between mt-8 md:mt-[90px]">
    <div>
      <img :src="logo" alt="Logo" class="w-10 md:w-full" />
    </div>
    <div
      class="flex flex-col gap-1 cursor-pointer md:hidden"
      @click="toggleMenu"
    >
      <div class="w-10 h-[3px] bg-black"></div>
      <div class="w-10 h-[3px] bg-black"></div>
      <div class="w-10 h-[3px] bg-black"></div>
    </div>
    <ul
      class="hidden md:flex items-center gap-10"
      :class="{
        'mobile-menu': isShowMobileMenu,
      }"
    >
      <div
        class="close-icon"
        :class="{ hidden: !isShowMobileMenu }"
        @click="toggleMenu"
      ></div>
      <li class="hover:text-soft-red"><a href="#">Home</a></li>
      <li class="hover:text-soft-red"><a href="#">New</a></li>
      <li class="hover:text-soft-red"><a href="#">Popular</a></li>
      <li class="hover:text-soft-red"><a href="#">Trending</a></li>
      <li class="hover:text-soft-red"><a href="#">Categories</a></li>
    </ul>
  </div>
</template>

<style scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  left: 20%;
  right: 0;
  bottom: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 10px 0px 30px;
  gap: 20px;
  font-size: 20px;
}

.close-icon {
  position: relative;
  align-self: flex-end;
  margin-bottom: 40%;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.close-icon::before {
  content: "";
  position: absolute;
  width: 40px;
  height: 3px;
  right: 0;
  top: 50%;
  background-color: black;
  transform: rotate(45deg);
}

.close-icon::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 3px;
  right: 0;
  top: 50%;
  background-color: black;
  transform: rotate(-45deg);
}
</style>
