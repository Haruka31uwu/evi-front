import { ref } from 'vue';

export default function usePreloader() {
  const isLoading = ref(false);

  function showPreloader() {
    isLoading.value = true;
  }

  function hidePreloader() {
    isLoading.value = false;
  }

  return {
    isLoading,
    showPreloader,
    hidePreloader,
  };
}