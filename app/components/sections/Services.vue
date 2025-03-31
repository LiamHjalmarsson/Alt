<script setup></script>

<template>
  <section class="px-lg py-xl">
    <h2 class="mb-lg text-heading-lg font-bold">
      Så kan vi hjälpa er
    </h2>

    <ul class="grid grid-cols-3 gap-lg">
      <BaseCard
        v-for="i in 6"
        :key="i"
      >
        <div class="mb-lg"></div>

        <div class="mb-lg">
          <h3
            class="text-heading-md font-semibold mb-sm font-heading"
          >
            Hosting
          </h3>
          <p>
            Vi erbjuder säker och snabb hosting som
            garanterar stabil drift och optimal prestanda
            för din webbplats.
          </p>
        </div>

        <div class="flex justify-end">
          <button
            class="border-2 border-cta rounded-full p-sm w-12 h-12 text-cta flex justify-center items-center"
          >
            <Icon
              name="heroicons:arrow-right"
              class="text-cta"
            />
          </button>
        </div>
      </BaseCard>
    </ul>
  </section>
</template>
