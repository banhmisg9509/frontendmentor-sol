<template>
  <div
    v-if="filters.size > 0"
    class="container mx-auto bg-white w-[87%] lg:w-full flex items-center py-5 px-10 rounded-[4px] shadow-lg"
  >
    <ul class="flex flex-wrap gap-4">
      <template v-for="filter in filters" :key="filter">
        <li>
          <div class="flex h-[30px]">
            <span
              class="bg-Cyan2 rounded-tl-[4px] rounded-bl-[4px] text-Cyan1 h-full flex items-center p-2 font-semibold"
              >{{ filter }}</span
            >
            <span
              @click="() => store.removeFilter(filter)"
              class="h-full bg-Cyan1 hover:bg-black transition cursor-pointer rounded-tr-[4px] rounded-br-[4px] flex items-center justify-center w-[30px]"
            >
              <img :src="removeIcon" alt="remove-icon" />
            </span>
          </div>
        </li>
      </template>
    </ul>
    <p
      @click="store.resetFilter"
      class="ml-auto text-Cyan4 text-lg font-semibold hover:underline transition-all hover:text-Cyan1 cursor-pointer"
    >
      Clear
    </p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import removeIcon from "../assets/images/icon-remove.svg";
import useJobStore from "../store/job.store";
const store = useJobStore();

const { filters } = storeToRefs(store);
</script>
