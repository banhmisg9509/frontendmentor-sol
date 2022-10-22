<template>
  <section
    class="list container mx-auto flex flex-col items-center md:gap-6 gap-12"
  >
    <template v-for="job in filteredJobs" :key="job.id">
      <div
        class="item flex flex-col gap-6 lg:gap-0 w-[87%] md:w-full lg:flex-row lg:items-center md:p-8 px-6 py-8 bg-white rounded-[5px] shadow-lg relative"
      >
        <div class="flex items-center gap-4">
          <img
            :src="job.logo"
            :alt="job.company"
            class="absolute top-0 left-0 translate-x-1/2 -translate-y-1/2 md:relative md:translate-x-0 md:translate-y-0 w-12 h-12 md:w-auto md:h-auto"
          />
          <div>
            <p class="flex items-center">
              <span class="mr-4 text-Cyan1 font-semibold">{{
                job.company
              }}</span>
              <span
                v-if="job.new"
                class="mr-2 bg-Cyan1 text-white text-sm rounded-full px-2 py-[2px]"
                >NEW!</span
              >
              <span
                v-if="job.featured"
                class="bg-Cyan5 text-white text-sm rounded-full px-2 py-[2px]"
                >FEATURED</span
              >
            </p>
            <p
              class="font-semibold text-xl hover:text-Cyan1 cursor-pointer transition"
            >
              {{ job.position }}
            </p>
            <p class="text-Cyan4 flex items-center justify-between gap-[14px]">
              <span class="flex-shrink-0">{{ job.postedAt }}</span>
              <span
                class="w-[3px] h-[3px] bg-Cyan4 rounded-full opacity-60"
              ></span>
              <span class="flex-shrink-0">{{ job.contract }}</span>
              <span
                class="w-[3px] h-[3px] bg-Cyan4 rounded-full opacity-60"
              ></span>
              <span class="flex-shrink-0">{{ job.location }}</span>
            </p>
          </div>
        </div>
        <hr />
        <div
          class="lg:ml-auto flex items-center gap-4 flex-wrap w-[80%] sm:w-auto"
        >
          <span
            @click="() => store.addFilter(job.role)"
            class="text-Cyan1 bg-Cyan2 font-semibold py-1 px-2 rounded-md cursor-pointer hover:bg-Cyan1 hover:text-white transition"
            >{{ job.role }}</span
          >
          <span
            @click="() => store.addFilter(job.level)"
            class="text-Cyan1 bg-Cyan2 font-semibold py-1 px-2 rounded-md cursor-pointer hover:bg-Cyan1 hover:text-white transition"
            >{{ job.level }}</span
          >
          <template v-for="lang in job.languages">
            <span
              @click="() => store.addFilter(lang)"
              class="text-Cyan1 bg-Cyan2 font-semibold py-1 px-2 rounded-md cursor-pointer hover:bg-Cyan1 hover:text-white transition"
              >{{ lang }}</span
            >
          </template>
          <template v-for="tool in job.tools">
            <span
              @click="() => store.addFilter(tool)"
              class="text-Cyan1 bg-Cyan2 font-semibold py-1 px-2 rounded-md cursor-pointer hover:bg-Cyan1 hover:text-white transition"
              >{{ tool }}</span
            >
          </template>
        </div>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import useJobStore from "../store/job.store";
const store = useJobStore();
const { filteredJobs } = storeToRefs(store);
</script>

<style scoped>
.list .item:nth-child(-n + 2) {
  border-left: 5px solid #5ba4a4;
}
</style>
