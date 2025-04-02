import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useIndexStore = defineStore('data', () => {
  const hero = ref({
    title: 'Vi hjälper er med allt inom webb',
    subtitle: 'Enkelt och billigt',
    cta: 'Kontakt oss',
  });

  return {
    hero,
  };
});
