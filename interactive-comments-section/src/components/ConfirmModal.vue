<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

type ConfirmModalEmit = {
  (e: "confirm"): void;
  (e: "cancel"): void;
};
const emit = defineEmits<ConfirmModalEmit>();
const target = ref(null);
onClickOutside(target, () => emit("cancel"));
</script>
<template>
  <div class="fixed inset-0 bg-black/50 flex justify-center items-center">
    <div class="w-[400px] h-[250px] bg-white rounded-lg p-[30px]" ref="target">
      <p class="text-2xl font-medium mb-4">Delete comment</p>
      <p class="text-grayish-blue mb-5">
        Are you sure you want to delete this comment? This will remove the
        comment and can't be undone.
      </p>
      <div class="flex gap-3">
        <button
          @click="emit('cancel')"
          class="bg-grayish-blue hover:bg-light-gray transition text-white px-4 h-12 rounded-lg grow font-medium"
        >
          NO, CANCEL
        </button>
        <button
          @click="emit('confirm')"
          class="bg-soft-red hover:bg-pale-red transition text-white px-4 h-12 rounded-lg grow font-medium"
        >
          YES, DELETE
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
