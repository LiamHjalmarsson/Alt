<script setup>
import { useIndexStore } from '~/store';

const useStore = useIndexStore();
</script>

<template>
  <BaseSection title="Några av våra uppdrag">
    <div class="flex gap-md mb-lg">
      <div
        class="flex justify-center items-center h-96 bg-neu-gray relative group overflow-hidden transition-all duration-500 flex-[0.5] hover:flex-[2]"
        v-for="item in useStore.project"
        :key="item.id"
      >
        <NuxtImg
          provider="strapi"
          :src="item.image.url"
          fit="cover"
          class="w-full h-full object-cover absolute inset-0 group-hover:brightness-75 transition duration-300"
        />
        <span
          class="font-bold text-heading-lg relative z-10 text-transparent group-hover:text-neu-white duration-300 transition"
        >
          Project
        </span>
      </div>
    </div>

    <BaseCta> Se fler av våra project </BaseCta>
  </BaseSection>
</template>
