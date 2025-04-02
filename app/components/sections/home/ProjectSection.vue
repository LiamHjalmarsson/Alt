<template>
  <BaseSection title="Några av våra uppdrag">
    <div class="flex gap-md mb-lg">
      <div
        class="flex-1 flex justify-center items-center h-64 bg-neu-gray"
        v-for="i in 4"
        :key="i"
      >
        <span class="font-semibold text-heading-md">
          Project
        </span>
      </div>
    </div>

    <BaseCta> Se fler av våra project </BaseCta>
  </BaseSection>
</template>
