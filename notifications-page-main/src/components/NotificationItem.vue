<script setup lang="ts">
export interface Notification {
  name: string;
  avatar: string;
  action: string;
  target: null | NotificationTarget;
  read: boolean;
  time: string;
}

export interface NotificationTarget {
  text: string;
  type: string;
  url: string;
}

defineProps<{ item: Notification }>();
</script>

<template>
  <div
    class="flex items-center p-4 gap-5 rounded-lg"
    :class="{ 'bg-blue2': !item.read }"
  >
    <div
      class="max-w-[42px] max-h-[42px] flex-shrink-0"
      :class="{ 'self-stretch mt-1': item.target?.type === 'message' }"
    >
      <img :src="item.avatar" :alt="item.name" />
    </div>
    <div class="flex flex-col">
      <p>
        <span class="font-extrabold hover:text-blue1 cursor-pointer"
          >{{ item.name }} &nbsp;</span
        >
        <span class="text-blue6">{{ item.action }} &nbsp;</span>
        <a
          class="text-blue6 font-extrabold hover:text-blue1"
          v-if="item.target?.type === 'link'"
          :href="item.target.url"
          >{{ item.target.text }} &nbsp;</a
        >
        <span
          v-if="!item.read"
          class="w-2 h-2 rounded-full bg-red1 inline-block align-middle"
        ></span>
      </p>
      <p class="text-blue5">{{ item.time }}</p>
      <p
        v-if="item.target?.type === 'message'"
        class="p-5 mt-3 border rounded-md text-blue6 cursor-pointer hover:bg-blue2"
      >
        {{ item.target.text }}
      </p>
    </div>
    <div
      v-if="item.target?.type === 'image'"
      class="ml-auto max-w-[42px] max-h-[42px] flex-shrink-0 cursor-pointer"
    >
      <img :src="item.target?.url" alt="image" />
    </div>
  </div>
</template>
