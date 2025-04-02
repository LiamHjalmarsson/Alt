<script setup>
defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <section class="px-lg py-xl">
    <div class="mx-auto max-w-[1250px]">
      <h2
        class="mb-md text-heading-2xl font-heading font-bold"
      >
        {{ title }}
      </h2>
      <slot />
    </div>
  </section>
</template>
