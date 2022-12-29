<script setup lang="ts">
export interface SwitchButtonProps {
  modelValue: boolean;
}
defineProps<SwitchButtonProps>();
const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();
</script>
<template>
  <label
    for="check"
    class="hover:opacity-60 transition-all cursor-pointer w-[54px] h-[30px] p-1 flex justify-start items-center bg-gradient-to-r from-gradient1start to-gradient1stop rounded-full"
  >
    <div
      class="bg-white rounded-full w-1/2 h-full transition-all duration-300"
      :class="{ 'translate-x-[100%]': modelValue }"
    ></div>
    <input
      id="check"
      hidden
      type="checkbox"
      :value="modelValue"
      @input="(e) => emit('update:modelValue', (e.target as HTMLInputElement).checked)"
    />
  </label>
</template>
