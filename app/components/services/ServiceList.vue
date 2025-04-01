<script setup></script>

<template>
  <BaseSection title="Så kan vi hjälpa er">
    <ul class="grid grid-cols-3 gap-lg">
      <ServiceCard
        v-for="i in 6"
        :key="i"
      />
    </ul>
  </BaseSection>
</template>
