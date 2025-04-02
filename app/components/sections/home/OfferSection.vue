<template>
  <BaseSection title="Rätt lösning för ditt företag">
    <div class="grid grid-cols-2 gap-xl">
      <BaseCard
        v-for="i in 2"
        :key="i"
        class="flex justify-center items-center flex-col gap-lg text-center"
      >
        <Icon
          name="uil:github"
          class="text-[96px] text-accent-light"
        />
        <div>
          <h3
            class="text-heading-sm 2xl:text-heading-md font-semibold mb-md font-heading"
          >
            Ny hemsida
          </h3>
          <p>
            En ny hemsida är den digitala kärnan i ditt
            företag – vi skapar en skräddarsydd, visuellt
            tilltalande och högpresterande webbplats som
            engagerar besökare och stärker din
            varumärkesidentitet.
          </p>
        </div>
        <button class="text-cta font-bold font-heading">
          Vad inngår
        </button>
      </BaseCard>
    </div>
  </BaseSection>
</template>
