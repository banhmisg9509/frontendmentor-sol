<script setup lang="ts">
export interface PriceInfo {
  type: string;
  price: number;
  priceMonthly: number;
  storage: string;
  users: number;
  bandwidth: string;
  isPopular: boolean;
}

export interface PriceCardProps {
  priceInfo: PriceInfo;
  showPriceMonthly: boolean;
}

defineProps<PriceCardProps>();
</script>
<template>
  <div
    class="w-[350px] min-h-[420px] p-[30px] pt-[35px] bg-white rounded-lg flex flex-col items-center shadow-lg text-blue4 font-bold"
    :class="{
      'min-h-[490px] pt-[55px] bg-gradient-to-b from-gradient1start to-gradient1stop text-white':
        priceInfo.isPopular,
    }"
  >
    <h3 class="text-lg">{{ priceInfo.type }}</h3>
    <p class="text-[70px] leading-none flex items-center gap-2 mt-5 mb-7">
      <span class="text-[40px] leading-none">$</span
      >{{ showPriceMonthly ? priceInfo.priceMonthly : priceInfo.price }}
    </p>
    <div
      class="flex flex-col border-y border-[#dbdbdb] items-center w-full text-center text-blue3"
      :class="{ 'text-white border-[#9ea4f9]': priceInfo.isPopular }"
    >
      <p class="py-4 w-full">{{ priceInfo.storage }} Storage</p>
      <p
        class="py-4 border-y border-[#dbdbdb] w-full"
        :class="{ 'border-[#9ea4f9]': priceInfo.isPopular }"
      >
        {{ priceInfo.users }} Users Allowed
      </p>
      <p class="py-4 w-full">Send up to {{ priceInfo.bandwidth }}</p>
    </div>
    <button
      class="mt-6 py-3 w-full h-[45px] transition-all hover:border-gradient1stop hover:border hover:bg-none hover:bg-white hover:text-gradient1stop bg-gradient-to-r from-gradient1start to-gradient1stop tracking-[2px] uppercase text-blue1 text-sm rounded-lg"
      :class="{
        'text-gradient1stop bg-none bg-white hover:bg-transparent hover:text-white hover:border-white':
          priceInfo.isPopular,
      }"
    >
      <span :class="{ 'opacity-90': priceInfo.isPopular }"> Learn More </span>
    </button>
  </div>
</template>
