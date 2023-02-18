<script setup lang="ts">
import AllRules from "@vee-validate/rules";
import { defineRule, ErrorMessage, Field, Form } from "vee-validate";
import { ref } from "vue";
import CardBack from "./components/CardBack.vue";
import CardFront from "./components/CardFront.vue";
import completedLogo from "./images/icon-complete.svg";
const cardNumber = ref<string>("");
const cardName = ref<string>("");
const MM = ref<string>("");
const YY = ref<string>("");
const CVC = ref<string>("");
const completed = ref<boolean>(false);

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

const handleSubmit = (values: any) => {
  completed.value = true;
  console.log(values);
};
</script>

<template>
  <main class="h-screen flex flex-col xl:flex-row">
    <div
      class="xl:gap-8 xl:h-full relative bg-[url(/src/images/bg-main-mobile.png)] xl:bg-[url(/src/images/bg-main-desktop.png)] flex flex-col xl:flex-col-reverse items-center justify-center bg-no-repeat bg-cover px-4"
    >
      <CardBack
        :cardcvc="CVC"
        class="translate-y-[63%] translate-x-[10%] xl:translate-y-[15%] xl:translate-x-[50%]"
      />
      <CardFront
        :cardmm="MM"
        :cardyy="YY"
        :card-name="cardName"
        :card-number="cardNumber"
        class="translate-y-[20%] -translate-x-[10%] xl:translate-y-[15%] xl:translate-x-[30%]"
      />
    </div>
    <div class="flex justify-center items-center px-6 pt-[80px] xl:flex-1">
      <Form
        v-if="!completed"
        :on-submit="handleSubmit"
        class="flex flex-col max-w-[380px] gap-[25px]"
        v-slot="{ errors }"
      >
        <div class="flex flex-col gap-1">
          <label for="name" class="uppercase text-sm text-violet3"
            >cardholder name</label
          >
          <div
            class="w-full focus-within:bg-gradient-to-r from-gradient-start-1 to-gradient-stop-1 p-[1px] rounded-lg"
            :class="{ 'bg-red-500': errors.name }"
          >
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="e.g Jane Appleseed"
              class="w-full border h-11 px-4 rounded-md placeholder:text-violet1 focus:outline-none"
              v-model="cardName"
              maxlength="25"
              :validate-on-change="true"
              rules="required"
            />
          </div>
          <ErrorMessage name="name" as="p" class="text-red1">
            Can't be blank
          </ErrorMessage>
        </div>
        <div class="flex flex-col gap-1">
          <label for="number" class="uppercase text-sm text-violet3"
            >card number</label
          >
          <div
            class="w-full focus-within:bg-gradient-to-r from-gradient-start-1 to-gradient-stop-1 p-[1px] rounded-lg"
            :class="{ 'bg-red-500': errors.number }"
          >
            <Field
              name="number"
              id="number"
              type="text"
              placeholder="e.g 1234 5678 9123 0000"
              class="w-full border h-11 px-4 rounded-md placeholder:text-violet1 focus:outline-none"
              v-model="cardNumber"
              maxlength="16"
              :rules="{
                required: true,
                numeric: true,
              }"
            />
          </div>
          <ErrorMessage name="number" as="p" class="text-red1">
            Wrong format, numbers only</ErrorMessage
          >
        </div>
        <div class="flex gap-5">
          <div class="flex flex-col gap-1 w-1/2">
            <label for="expire" class="uppercase text-sm text-violet3"
              >exp. date (mm/yy)</label
            >
            <div class="flex gap-3">
              <div
                class="w-1/2 focus-within:bg-gradient-to-r from-gradient-start-1 to-gradient-stop-1 p-[1px] rounded-lg"
                :class="{ 'bg-red-500': errors.MM }"
              >
                <Field
                  id="expire"
                  name="MM"
                  type="text"
                  placeholder="MM"
                  class="border h-11 px-4 rounded-md w-full placeholder:text-violet1 focus:outline-none"
                  v-model="MM"
                  maxlength="2"
                  :rules="{
                    required: true,
                  }"
                />
              </div>
              <div
                class="w-1/2 focus-within:bg-gradient-to-r from-gradient-start-1 to-gradient-stop-1 p-[1px] rounded-lg"
                :class="{ 'bg-red-500': errors.YY }"
              >
                <Field
                  name="YY"
                  id="expire"
                  type="text"
                  placeholder="YY"
                  class="border h-11 px-4 rounded-md w-full placeholder:text-violet1 focus:outline-none"
                  v-model="YY"
                  maxlength="2"
                  :rules="{
                    required: true,
                  }"
                />
              </div>
            </div>
            <p v-if="errors.MM || errors.YY" class="text-red1">
              Can't be blank
            </p>
          </div>
          <div class="flex flex-col gap-1 w-1/2">
            <label for="cvc" class="uppercase text-sm text-violet3">cvc</label>
            <div
              class="focus-within:bg-gradient-to-r from-gradient-start-1 to-gradient-stop-1 p-[1px] rounded-lg"
              :class="{ 'bg-red-500': errors.cvc }"
            >
              <Field
                name="cvc"
                type="text"
                id="cvc"
                placeholder="e.g 123"
                class="w-full border h-11 px-4 rounded-md placeholder:text-violet1 focus:outline-none"
                v-model="CVC"
                maxlength="3"
                :rules="{
                  required: true,
                }"
              />
            </div>
            <ErrorMessage name="cvc" as="p" class="text-red1">
              Can't be blank
            </ErrorMessage>
          </div>
        </div>

        <div class="mt-5">
          <button
            type="submit"
            class="w-full h-[52px] bg-violet3 text-white rounded-lg text-lg"
          >
            Confirm
          </button>
        </div>
      </Form>
      <div v-if="completed" class="flex flex-col items-center">
        <div class="w-20 h-20">
          <img :src="completedLogo" alt="Completed Logo" />
        </div>
        <h1 class="uppercase text-3xl mt-10 text-violet3">Thank you !</h1>
        <p class="mt-4 mb-9 text-violet2">We've added your card details.</p>
        <button
          class="w-[350px] h-[52px] bg-violet3 text-white rounded-lg text-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
