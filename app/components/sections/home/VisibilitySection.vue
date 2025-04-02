<template>
  <BaseSection
    class="bg-accent text-highlight"
    title="Varför synas på webben"
  >
    <div class="grid grid-cols-2 gap-y-lg gap-x-xl">
      <InfoBlock v-for="i in 6" :key="i" :index="i" />
    </div>

    <div class="flex justify-center items-center mt-xl">
      <BaseCta class="text-neu-white">
        Gratis Analys</BaseCta
      >
    </div>
  </BaseSection>
</template>
