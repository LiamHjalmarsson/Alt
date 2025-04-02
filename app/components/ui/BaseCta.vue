<script setup>
import { RouterLink } from "vue-router";

defineProps({});
</script>

<template>
  <RouterLink
    to="/"
    class="relative w-fit h-16 flex items-center justify-center rounded-full px-12 group mx-auto"
  >
    <span
      class="absolute left-0 w-16 h-16 bg-cta rounded-full group-hover:w-full transition-all duration-300"
    ></span>

    <span
      class="relative z-10 font-semibold text-heading-xss tracking-wider group-hover:text-neu-white duration-300"
    >
      <slot />
    </span>
  </RouterLink>
</template>
