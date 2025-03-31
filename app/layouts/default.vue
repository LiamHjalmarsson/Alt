<script setup>
import TheHeader from '~/components/layouts/TheHeader.vue';
</script>

<template>
  <div class="">
    <TheHeader />

    <main>
      <slot />
    </main>
  </div>
</template>
