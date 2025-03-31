<script setup>
import TheHeader from '~/components/layouts/TheHeader.vue';
import TheFooter from '~/components/layouts/TheFooter.vue';
</script>

<template>
  <div class="text-neu bg-neu-white min-h-screen">
    <TheHeader />

    <main>
      <slot />
    </main>

    <TheFooter />
  </div>
</template>
