<script setup>
defineProps({
  detail: {
    type: Object,
    // required: true,
  },
  index: {
    type: Number,
  },
});
</script>

<template>
  <div class="space-y-sm">
    <div class="flex items-center gap-md text-heading-md">
      <span
        v-if="index"
        class="text-highlight font-bold text-heading-4xl"
      >
        {{ index }}
      </span>
      <h3 class="font-semibold">Bättre synlighet</h3>
    </div>
    <p class="text-neu-white">
      Vårt mål är att förstå varje kunds verksamhet och den
      marknad de verkar på. Vi strävar efter att helt sätta
      oss in i målgruppen och deras behov – för att skapa
      digitala lösningar som engagerar och levererar
      verkligt värde.
    </p>
  </div>
</template>
