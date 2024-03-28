import { User } from "@/components/types";
import data from "@/data.json";
import { onMounted, ref } from "vue";

const USER = "USER";
const currentUser = ref<User>();

export const useUser = () => {
  onMounted(() => {
    loadUser();
  });

  const loadUser = () => {
    const items = window.localStorage.getItem(USER);
    if (items) {
      currentUser.value = JSON.parse(items);
    } else {
      currentUser.value = data.currentUser;
      syncLocalStore();
    }
  };

  const syncLocalStore = () => {
    window.localStorage.setItem(USER, JSON.stringify(currentUser.value));
  };

  return {
    currentUser,
  };
};
