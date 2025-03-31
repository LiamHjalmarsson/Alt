<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  to: {
    type: String,
  },
});
</script>

<template>
  <RouterLink
    :to="to"
    class="relative w-fit h-16 flex items-center justify-center rounded-full px-8"
  >
    <span
      class="absolute left-0 w-16 h-16 bg-cta rounded-full"
    ></span>

    <span
      class="relative text-white z-10 font-semibold text-heading-xss tracking-wider"
    >
      <slot />
    </span>
  </RouterLink>
</template>
