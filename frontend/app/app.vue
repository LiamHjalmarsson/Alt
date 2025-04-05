<script setup>
import { onBeforeMount } from "vue";
import { useIndexStore } from "~/store";

const useStore = useIndexStore();

onBeforeMount(() => {
  useStore.getArticles();
});

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
