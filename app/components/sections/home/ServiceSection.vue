<script setup>
import { useIndexStore } from '~/store';

const useStore = useIndexStore();
</script>

<template>
  <BaseSection :title="useStore.service.title">
    <ul class="grid grid-cols-2 lg:grid-cols-3 gap-lg">
      <ServiceCard
        v-for="service in useStore.service.services"
        :key="service.id"
        :service="service"
      />
    </ul>
  </BaseSection>
</template>
