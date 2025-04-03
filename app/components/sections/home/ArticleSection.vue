<script setup></script>

<template>
  <BaseSection
    title="Blog"
    class="text-neu-white bg-accent"
  >
    <div class="grid grid-cols-3 gap-lg">
      <article v-for="i in 3" :key="i">
        <NuxtImg
          src="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fit="cover"
          width="100vw"
        />
        <div class="py-sm px-md">
          <h3 class="font-semibold text-heading-sm">
            Article
          </h3>
          <p class="line-clamp-3 my-sm">Description</p>
          <button class="text-cta font-semibold">
            Läs mer
          </button>
        </div>
      </article>
    </div>
  </BaseSection>
</template>
