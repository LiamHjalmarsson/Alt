<script setup>
import { RouterLink } from "vue-router";

defineProps({});
</script>

<template>
  <RouterLink
    to="/"
    class="relative w-fit h-16 flex items-center justify-center rounded-full px-6"
  >
    <span
      class="absolute left-0 w-16 h-16 bg-cta rounded-full"
    ></span>

    <span
      class="relative z-10 font-semibold text-heading-xss tracking-wider"
    >
      <slot />
    </span>
  </RouterLink>
</template>
