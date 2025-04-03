<script setup>
import { useIndexStore } from "~/store";

const useStore = useIndexStore();
</script>

<template>
  <BaseSection
    :title="useStore.faq.title"
    class="text-center"
  >
    <div class="mx-auto w-fit space-y-md">
      <div
        v-for="(item, index) in useStore.faq.questions"
        :key="item.id"
        class="flex gap-lg items-center"
      >
        <span
          class="text-highlight font-bold text-heading-3xl"
        >
          {{ index }}
        </span>
        <h3 class="font-semibold text-heading-sm">
          {{ item.title }}
        </h3>
      </div>
    </div>
  </BaseSection>
</template>
