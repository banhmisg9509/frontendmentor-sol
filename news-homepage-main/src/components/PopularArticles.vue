<script lang="ts" setup>
import { ref } from "vue";
import image3 from "/src/images/image-gaming-growth.jpg";
import image1 from "/src/images/image-retro-pcs.jpg";
import image2 from "/src/images/image-top-laptops.jpg";

const articles = ref([
  {
    id: 1,
    title: "Reviving Retro PCs",
    desc: "What happens when old PCs are given modern upgrades?",
    image: image1,
  },
  {
    id: 2,
    title: "Top 10 Laptops of 2022",
    desc: "Our best picks for various needs and budgets.",
    image: image2,
  },
  {
    id: 3,
    title: "Reviving Retro PCs",
    desc: "How the pandemic has sparked fresh opportunities.",
    image: image3,
  },
]);
</script>
<template>
  <div class="mt-[70px]">
    <ul class="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
      <template v-for="item in articles">
        <li class="flex gap-5">
          <div class="flex-shrink-0 max-w-[100px]">
            <img :src="item.image" :alt="item.title" />
          </div>
          <div>
            <h3
              class="text-3xl mb-4 leading-none font-semibold text-grayish-blue"
            >
              {{ "0" + item.id }}
            </h3>
            <a
              href="#"
              class="text-lg font-bold mb-2 inline-block hover:text-soft-red"
              >{{ item.title }}</a
            >
            <p class="leading-6 pr-1">{{ item.desc }}</p>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>
