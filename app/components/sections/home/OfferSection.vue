<script setup>
import { useIndexStore } from '~/store';

const useStore = useIndexStore();
</script>

<template>
  <BaseSection :title="useStore.offer.title">
    <div class="grid grid-cols-2 gap-xl">
      <BaseCard
        v-for="item in useStore.offer.list"
        :key="item.id"
        class="flex justify-between items-center flex-col gap-lg text-center"
      >
        <Icon
          :name="item.icon"
          class="text-[96px] text-accent-light"
        />
        <div class="flex-1">
          <h3
            class="text-heading-sm 2xl:text-heading-md font-semibold mb-md font-heading"
          >
            {{ item.title }}
          </h3>
          <p>
            {{ item.description }}
          </p>
        </div>
        <button class="text-cta font-bold font-heading">
          Vad inngår
        </button>
      </BaseCard>
    </div>
  </BaseSection>
</template>
