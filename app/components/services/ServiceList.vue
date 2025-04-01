<script setup></script>

<template>
  <section class="px-lg py-xl">
    <h2
      class="mb-lg text-heading-2xl font-heading font-bold"
    >
      Så kan vi hjälpa er
    </h2>

    <ul class="grid grid-cols-3 gap-lg">
      <ServiceCard
        v-for="i in 6"
        :key="i"
      />
    </ul>
  </section>
</template>
