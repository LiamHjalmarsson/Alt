<script setup>
defineProps({
  item: {
    type: Object,
  },
  index: {
    type: Number,
  },
});
</script>

<template>
  <div class="space-y-xs">
    <div class="flex items-center gap-md text-heading-md">
      <span
        class="text-highlight font-bold text-heading-4xl"
      >
        {{ item.id }}
      </span>
      <h3 class="font-semibold">{{ item.title }}</h3>
    </div>
    <p class="text-neu-white">
      {{ item.description }}
    </p>
  </div>
</template>
