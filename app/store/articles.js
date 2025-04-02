import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useArticlesStore = defineStore(
  'articles',
  () => {
    const articles = ref([]);

    return {
      articles,
    };
  }
);
