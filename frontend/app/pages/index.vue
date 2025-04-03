<script setup>
import { useIndexStore } from "~/store";

const useStore = useIndexStore();
</script>

<template>
  <Hero>
    <h1
      class="text-heading-md sm:text-heading-lg md:text-heading-xl lg:text-heading-2xl 2xl:text-heading-4xl font-extrabold text-center"
    >
      {{ useStore.hero.title }}
    </h1>
    <h2
      class="text-heading-xs md:text-heading-sm lg:text-heading-md 2xl:text-heading-lg font-bold"
    >
      {{ useStore.hero.subtitle }}
    </h2>
    <BaseCta> {{ useStore.hero.cta }} </BaseCta>
  </Hero>

  <ServiceSection />
  <VisibilitySection />
  <OfferSection />
  <InfoSection
    :content="{
      title: 'Varför oss',
      text: 'Vi är en webbyrå som specialiserar oss på webbdesign och utveckling för företag som vill växa och nå nya höjder online. Med användarfokus och moderna lösningar bygger vi webbplatser som inte bara ser bra ut – de driver trafik, engagerar besökare och ökar konverteringar.',
    }"
  />

  <FeaturedSection />

  <InfoSection
    :content="{
      title: 'Vi på alt media',
      text: 'Vi är en webbyrå som specialiserar oss på webbdesign och utveckling för företag som vill växa och nå nya höjder online. Med användarfokus och moderna lösningar bygger vi webbplatser som inte bara ser bra ut – de driver trafik, engagerar besökare och ökar konverteringar.',
    }"
  />

  <FaqSection />

  <ArticleSection />
</template>
