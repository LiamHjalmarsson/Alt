<script setup>
defineProps({
  content: {
    type: Object,
  },
});
</script>

<template>
  <section
    class="min-h-screen flex justify-center items-center relative"
  >
    <div
      v-if="content.image"
      class="absolute w-full h-full overflow-hidden z-10"
    >
      <NuxtImg
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        fit="cover"
        sizes="100vw"
      />
    </div>

    <div class="absolute inset-0 bg-accent/80 z-10"></div>

    <div
      class="max-w-[1000px] text-center relative z-20 p-xl"
    >
      <h3
        class="text-heading-3xl font-heading text-highlight font-bold mb-md"
      >
        {{ content.title }}
      </h3>
      <p class="text-neu-white text-body-lg">
        {{ content.text }}
      </p>
    </div>

    <div
      class="absolute bottom-0 p-xl right-0 text-neu-white z-30"
      v-if="content.cta"
    >
      <BaseCta> Om oss </BaseCta>
    </div>
  </section>
</template>
