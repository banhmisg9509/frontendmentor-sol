<script lang="ts" setup>
const props = defineProps<{
  cardcvc: string;
}>();
</script>
<template>
  <div
    class="w-[357px] h-[196px] xl:w-[447px] xl:h-[245px] bg-[url(/src/images/bg-card-back.png)] bg-cover bg-no-repeat"
  >
    <div class="w-full h-full relative">
      <p class="absolute text-white top-1/2 right-[60px] -translate-y-[60%]">
        {{ props.cardcvc || "000" }}
      </p>
    </div>
  </div>
</template>
