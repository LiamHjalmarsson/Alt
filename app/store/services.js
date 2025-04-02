import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useServicesStore = defineStore(
  'services',
  () => {
    const services = ref([]);

    return {
      services,
    };
  }
);
