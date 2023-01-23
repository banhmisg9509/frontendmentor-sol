<script setup lang="ts">
import { ref } from "vue";
import avatar1 from "/src/images/avatar-mark-webber.webp";
import avatar2 from "/src/images/avatar-angela-gray.webp";
import avatar3 from "/src/images/avatar-jacob-thompson.webp";
import avatar4 from "/src/images/avatar-rizky-hasanuddin.webp";
import avatar5 from "/src/images/avatar-kimberly-smith.webp";
import avatar6 from "/src/images/avatar-nathan-peterson.webp";
import avatar7 from "/src/images/avatar-anna-kim.webp";
import image1 from "/src/images/image-chess.webp";

import NotificationList from "./components/NotificationList.vue";
const items = ref([
  {
    name: "Mark Webber",
    avatar: avatar1,
    action: "reacted to your recent post",
    target: {
      text: "My first tournament today!",
      type: "link",
      url: "#",
    },
    read: false,
    time: "1m ago",
  },
  {
    name: "Angela Gray",
    avatar: avatar2,
    action: "followd you",
    target: null,
    read: false,
    time: "5m ago",
  },
  {
    name: "Jacob Thompson",
    avatar: avatar3,
    action: "has joined your group",
    target: {
      text: "Chess Club",
      type: "link",
      url: "#",
    },
    read: false,
    time: "1 day ago",
  },
  {
    name: "Rizky Hasanuddin",
    avatar: avatar4,
    action: "sent you a private message",
    target: {
      text: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      type: "message",
      url: "#",
    },
    read: true,
    time: "5 days ago",
  },
  {
    name: "Kimberly Smith",
    avatar: avatar5,
    action: "commented on your picture",
    target: {
      text: "",
      type: "image",
      url: image1,
    },
    read: true,
    time: "1 week ago",
  },
  {
    name: "Nathan Peterson",
    avatar: avatar6,
    action: "reacted to your recent post",
    target: {
      text: "5 end-game strategies to increase your win rate",
      type: "link",
      url: "#",
    },
    read: true,
    time: "2 weeks ago",
  },
  {
    name: "Anna Kim",
    avatar: avatar7,
    action: "left the group",
    target: {
      text: "Chess Club",
      type: "link",
      url: "#",
    },
    read: true,
    time: "2 weeks ago",
  },
]);

const markAllAsRead = () => {
  items.value.forEach((item) => (item.read = true));
};
</script>

<template>
  <main class="min-h-screen bg-blue2 pt-16">
    <NotificationList :items="items" @mark-all-as-read="markAllAsRead" />
  </main>
</template>

<style scoped></style>
