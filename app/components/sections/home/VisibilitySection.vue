<script setup>
import { useIndexStore } from '~/store';

const useStore = useIndexStore();
</script>

<template>
  <BaseSection
    class="bg-accent text-highlight"
    :title="useStore.visability.title"
  >
    <div class="grid grid-cols-2 gap-y-lg gap-x-xl">
      <InfoBlock
        v-for="(item, index) in useStore.visability.list"
        :key="item.id"
        :index="index"
        :item="item"
      />
    </div>

    <div class="flex justify-center items-center mt-xl">
      <BaseCta class="text-neu-white">
        Gratis Analys</BaseCta
      >
    </div>
  </BaseSection>
</template>
