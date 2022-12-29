<script setup lang="ts">
import { ref } from "vue";
import PriceCard, { PriceInfo } from "./components/PriceCard.vue";
import SwitchButton from "./components/SwitchButton.vue";

const prices: PriceInfo[] = [
  {
    type: "Basic",
    price: 199.99,
    priceMonthly: 19.99,
    storage: "500 GB",
    users: 2,
    bandwidth: "3 GB",
    isPopular: false,
  },
  {
    type: "Professional",
    price: 249.99,
    priceMonthly: 24.99,
    storage: "1 TB",
    users: 5,
    bandwidth: "10 GB",
    isPopular: true,
  },
  {
    type: "Master",
    price: 399.99,
    priceMonthly: 39.99,
    storage: "2 TB",
    users: 10,
    bandwidth: "20 GB",
    isPopular: false,
  },
];

const priceMonthly = ref(false);
</script>

<template>
  <div class="min-h-[100vh] background pb-20 md:pb-0 ">
    <div class="container mx-auto pt-[100px] sm:pt-[75px] text-center">
      <h1 class="text-[32px] leading-none font-bold text-blue3">Our Pricing</h1>
      <div class="mt-10 mb-12 flex justify-center items-center gap-6">
        <p class="font-bold text-blue2">Annually</p>
        <SwitchButton v-model="priceMonthly" />
        <p class="font-bold text-blue2">Monthly</p>
      </div>
      <div class="flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-center">
        <template v-for="price of prices" :key="price.type">
          <PriceCard :price-info="price" :show-price-monthly="priceMonthly" />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-color: #f7f7ff;
  background-image: url("./images/bg-top.svg");
  background-repeat: no-repeat;
  background-size: 80% 36%;
  background-position: 280% top;
}

@media screen and (min-width: 768px) {
  .background {
    background-image: url("./images/bg-top.svg"), url("./images/bg-bottom.svg");
    background-size: auto 72%, auto 35%;
    background-position: right top, left bottom;
  }
}
</style>
