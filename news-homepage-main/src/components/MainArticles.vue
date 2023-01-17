<script lang="ts" setup>
import web3image from "/src/images/image-web-3-desktop.jpg";
</script>
<template>
  <div class="mt-8 lg:mt-14 flex flex-col lg:grid lg:grid-cols-3 gap-[30px]">
    <div class="lg:col-span-2">
      <img :src="web3image" alt="web3image" class="h-full object-cover" />
    </div>
    <h1 class="lg:row-start-2 text-5xl lg:text-6xl font-bold">
      The Bright Future of Web 3.0?
    </h1>
    <div class="lg:row-start-2 flex flex-col justify-between gap-6 lg:gap-0">
      <p class="text-dark-grayish-blue">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button
        class="w-[185px] h-[48px] hover:bg-dark-blue bg-soft-red text-off-white uppercase font-semibold tracking-[4px]"
      >
        read more
      </button>
    </div>
    <div class="bg-dark-blue text-off-white px-6 mt-6 lg:mt-0 lg:row-span-2">
      <h2 class="text-soft-orange text-4xl mt-9 font-semibold">New</h2>
      <ul class="flex flex-col">
        <li class="py-8 pr-3 border-b border-dark-grayish-blue">
          <a
            href="#"
            class="inline-block text-xl font-semibold mb-3 hover:text-soft-orange"
            >Hydrogen VS Electric Cars</a
          >
          <p class="text-grayish-blue">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </li>
        <li class="py-8 pr-3 border-b border-dark-grayish-blue">
          <a
            href="#"
            class="inline-block text-xl font-semibold mb-3 hover:text-soft-orange"
            >The Downsides of AI Artistry</a
          >
          <p class="text-grayish-blue">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </li>
        <li class="py-8 pr-3 border-dark-grayish-blue">
          <a
            href="#"
            class="inline-block text-xl font-semibold mb-3 hover:text-soft-orange"
            >Is VC Funding Drying Up?</a
          >
          <p class="text-grayish-blue">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
