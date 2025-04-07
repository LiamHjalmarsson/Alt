<script setup>
import { useIndexStore } from "~/store";

const useStore = useIndexStore();

</script>

<template>
  <BaseSection
    title="Blog"
    class="text-neu-white bg-accent"
  >
    <div class="grid grid-cols-3 gap-lg">
      <article v-for="article in useStore.articles" :key="article.id">
        <NuxtImg
          provider="strapi"
          :src="article.image.url"
          fit="cover"
          width="100vw"
        />
        <div class="py-sm px-md">
          <h3 class="font-semibold text-heading-sm">
            {{ article.title }}
          </h3>
          <p class="line-clamp-2 my-sm">{{ article.title }}</p>
          <button class="text-cta font-semibold">
            Läs mer
          </button>
        </div>
      </article>
    </div>
  </BaseSection>
</template>
