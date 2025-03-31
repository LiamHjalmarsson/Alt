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
  <footer class="bg-neu text-neu-white p-xl space-y-md">
    <div>
      <h3 class="text-heading-2xl font-semibold">
        Redo att börja
      </h3>
      <button
        class="relative h-16 flex items-center justify-center rounded-full px-8"
      >
        <span
          class="absolute left-0 w-16 h-16 bg-cta rounded-full"
        ></span>

        <span
          class="relative text-white z-10 font-semibold text-heading-xss tracking-wider"
        >
          Kontakta oss
        </span>
      </button>
    </div>
    <nav>
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
