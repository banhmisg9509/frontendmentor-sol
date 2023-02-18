<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  cardNumber: string;
  cardName: string;
  cardmm: string;
  cardyy: string;
}>();

const formatCardNumber = computed(() => {
  return props.cardNumber.match(/.{1,4}/g)?.join(" ");
});
</script>
<template>
  <div
    class="flex flex-col p-[30px] w-[357px] h-[196px] xl:w-[447px] xl:h-[245px] bg-[url(/src/images/bg-card-front.png)] bg-cover bg-no-repeat"
  >
    <div class="flex gap-4 items-center">
      <div class="w-12 h-12 rounded-full bg-white"></div>
      <div class="w-6 h-6 rounded-full border"></div>
    </div>
    <div class="mt-auto flex flex-col gap-5 text-white">
      <p class="text-[22px] xl:text-[29px] tracking-widest">
        {{ formatCardNumber || "0000 0000 0000 0000" }}
      </p>
      <div class="flex justify-between text-xs xl:text-base">
        <p class="uppercase">{{ props.cardName || "jane appleseed" }}</p>
        <p>{{ props.cardmm || "00" }}/{{ props.cardyy || "00" }}</p>
      </div>
    </div>
  </div>
</template>
