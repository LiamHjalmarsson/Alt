<script setup>
import { RouterLink } from 'vue-router';

const links = [
  {
    path: '/projects',
    label: 'Project',
    children: [
      {
        label: 'Web',
        path: '/projects',
      },
      {
        label: 'App',
        path: '/projects',
      },
    ],
  },
  {
    path: '/services',
    label: 'Service',
    children: [
      {
        label: 'Utevckling',
        path: '/projects',
      },
      {
        label: 'Seo',
        path: '/projects',
      },
    ],
  },
  {
    path: '/about',
    label: 'Om oss',
    children: [
      {
        label: 'Kontakta',
        path: '/projects',
      },
      {
        label: 'Artiklar',
        path: '/projects',
      },
    ],
  },
  {
    path: '/terms',
    label: 'Terms',
    children: [
      {
        label: 'Terms and condition',
        path: '/projects',
      },
    ],
  },
];
</script>

<template>
  <footer class="bg-neu text-neu-white p-xl space-y-lg">
    <div class="mx-auto max-w-[1250px]">
      <h3 class="text-heading-2xl font-semibold">
        Redo att börja
      </h3>
      <div class="w-fit mt-md">
        <BaseCta to="about"> Kontakta oss </BaseCta>
      </div>
    </div>
    <nav
      aria-label="Footer Navigation"
      class="mx-auto max-w-[1250px]"
    >
      <ul
        class="flex w-full gap-10 items-start justify-between"
      >
        <li
          v-for="link in links"
          :key="link.label"
          class="flex flex-col gap-xs"
        >
          <RouterLink
            :to="link.path"
            :aria-label="`Gå till ${link.label}`"
            class="font-semibold text-heading-xs"
          >
            {{ link.label }}
          </RouterLink>

          <ul class="space-y-xs">
            <li
              v-for="child in link.children"
              :key="child.path"
            >
              <RouterLink
                class="text-body-lg"
                :to="child.path"
                :aria-label="`Gå till ${child.label}`"
              >
                {{ child.label }}
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </footer>
</template>
