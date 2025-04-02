<script setup>
defineProps({
  hero: {
    type: Object,
  },
});
</script>

<template>
  <section
    class="p-md lg:p-xl min-h-fit h-[80vh] flex justify-center items-center relative"
  >
    <div class="bg-neu/80 absolute inset-0"></div>
    <div
      class="flex flex-col mx-auto max-w-[1150px] items-center justify-center font-heading text-center gap-lg relative z-10 text-neu-white"
    >
      <slot />
    </div>
  </section>
</template>
