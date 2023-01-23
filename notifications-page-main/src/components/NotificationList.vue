<script lang="ts" setup>
import { computed } from "vue";
import type { Notification } from "./NotificationItem.vue";
import NotificationItem from "./NotificationItem.vue";

const props = defineProps<{ items: Notification[] }>();

const emit = defineEmits<{
  (e: "markAllAsRead"): void;
}>();

const unreadNotifications = computed(() =>
  props.items.reduce((total, item) => {
    total += Number(item.read === false);
    return total;
  }, 0)
);

const markAllAsRead = () => {
  emit("markAllAsRead");
};
</script>
<template>
  <div
    class="max-w-[730px] mx-auto bg-white px-[30px] pb-[30px] rounded-2xl shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
  >
    <div class="flex justify-between py-9">
      <div class="flex items-center gap-3">
        <h1 class="font-extrabold text-2xl">Notifications</h1>
        <span
          v-if="unreadNotifications > 0"
          class="w-[29px] h-[25px] bg-blue1 text-white flex items-center justify-center rounded-md"
          >{{ unreadNotifications }}</span
        >
      </div>
      <button class="text-blue6 hover:text-blue1" @click="markAllAsRead">
        Mark all as read
      </button>
    </div>
    <div class="flex flex-col gap-[10px]">
      <template v-for="item of items" :key="item.name">
        <NotificationItem :item="item" />
      </template>
    </div>
  </div>
</template>
