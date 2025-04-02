import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useContactStore = defineStore(
  'contact',
  () => {
    const formData = ref({
      email: '',
      tele: '',
      message: '',
    });

    const errors = ref(null);
    const formSubmitted = ref(false);

    return {
      formData,
      errors,
      formSubmitted,
    };
  }
);
