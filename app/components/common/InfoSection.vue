<script setup>
defineProps({
  content: {
    type: Object,
  },
});
</script>

<template>
  <section
    class="h-screen flex justify-center items-center p-lg relative"
  >
    <div class="max-w-[1000px] text-center relative z-10">
      <h3
        class="text-heading-3xl font-heading text-highlight font-bold"
      >
        {{ content.title }}
      </h3>
      <p class="text-neu-white">
        {{ content.text }}
      </p>
    </div>
    <div class="absolute inset-0 bg-accent"></div>
  </section>
</template>
