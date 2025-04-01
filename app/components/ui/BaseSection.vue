<script setup>
defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <section class="px-lg py-xl">
    <h2
      class="mb-lg text-heading-2xl font-heading font-bold"
    >
      {{ title }}
    </h2>
    <slot />
  </section>
</template>
