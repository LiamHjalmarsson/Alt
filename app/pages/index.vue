<script setup></script>

<template>
  <Hero>
    <h1
      class="text-heading-md sm:text-heading-lg md:text-heading-xl lg:text-heading-2xl 2xl:text-heading-4xl font-extrabold text-center"
    >
      Vi hjälper er med allt inom webb
    </h1>
    <h2
      class="text-heading-xs md:text-heading-sm lg:text-heading-md 2xl:text-heading-lg font-bold"
    >
      <span class="text-highlight">Enkelt</span> och
      <span class="text-highlight">prisvärd</span>
    </h2>
    <BaseCta> Konkta oss </BaseCta>
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

  <ProjectSection />

  <InfoSection
    :content="{
      title: 'Vi på alt media',
      text: 'Vi är en webbyrå som specialiserar oss på webbdesign och utveckling för företag som vill växa och nå nya höjder online. Med användarfokus och moderna lösningar bygger vi webbplatser som inte bara ser bra ut – de driver trafik, engagerar besökare och ökar konverteringar.',
    }"
  />
</template>
