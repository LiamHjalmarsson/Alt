<script setup>
defineProps({
  service: {
    type: Object,
  },
});
</script>

<template>
  <BaseCard>
    <div class="flex flex-col justify-between h-full">
      <Icon
        :name="service.icon"
        class="text-[96px] text-accent-light"
      />

      <div class="my-md">
        <h3
          class="text-heading-sm 2xl:text-heading-md font-semibold mb-sm font-heading"
        >
          {{ service.title }}
        </h3>
        <p class="">
          {{ service.content }}
        </p>
      </div>

      <div class="flex justify-end">
        <button
          class="border-2 border-cta rounded-full p-sm w-12 h-12 text-cta flex justify-center items-center hover:bg-cta-disabled transition duration-150"
        >
          <Icon
            name="heroicons:arrow-right"
            class="text-cta font-semibold text-body-lg"
          />
        </button>
      </div>
    </div>
  </BaseCard>
</template>
