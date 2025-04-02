<script setup></script>

<template>
  <div
    class="text-neu bg-neu-white min-h-screen font-body text-body-md 2xl:text-body-lg"
  >
    <TheHeader />

    <main>
      <slot />
    </main>

    <TheFooter />
  </div>
</template>
