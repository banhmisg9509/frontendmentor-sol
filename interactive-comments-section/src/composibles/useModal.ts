import { ref } from "vue";

const isOpen = ref(false);

export const useModal = () => {
  const openModal = () => {
    isOpen.value = true;
  };

  const closeModal = () => {
    isOpen.value = false;
  };

  return {
    openModal,
    closeModal,
    isOpen,
  };
};
