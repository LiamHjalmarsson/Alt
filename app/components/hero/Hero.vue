<script setup>
defineProps({
  hero: {
    type: Object,
  },
});
</script>

<template>
  <section class="p-xl relative">
    <div class="bg-neu/80 absolute inset-0"></div>
    <div
      class="flex flex-col items-center justify-center font-heading text-center gap-md relative z-10 text-white"
    >
      <slot />
    </div>
  </section>
</template>
