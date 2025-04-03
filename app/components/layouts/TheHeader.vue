<script setup>
import { RouterLink } from "vue-router";

const links = [
  {
    path: "/projects",
    label: "Project",
  },
  {
    path: "/services",
    label: "Service",
  },
  {
    path: "/articles",
    label: "Artiklar",
  },
  {
    path: "/about",
    label: "Om oss",
  },
];

const isScrolled = ref(false);

const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeMount(() => {
  window.removeEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    :class="[
      'px-10 py-5 fixed z-50 w-full transition duration-300',
      isScrolled
        ? 'bg-neu-white text-neu shadow'
        : 'bg-transparent text-neu-white',
    ]"
  >
    <nav
      class="flex justify-between items-center"
      aria-label="Huvud Navigation"
    >
      <RouterLink
        to="/"
        aria-label="Gå till start sida"
        class="font-extrabold text-highlight font-heading text-heading-xs"
      >
        ALT media
      </RouterLink>
      <ul class="flex gap-10 items-center">
        <li v-for="link in links" :key="link.label">
          <RouterLink
            :to="link.path"
            :aria-label="`Gå till ${link.label}`"
          >
            {{ link.label }}
          </RouterLink>
        </li>

        <RouterLink
          aria-label="Boka ett möte"
          to="/contact"
          class="px-8 py-2 bg-cta text-white rounded-full font-semibold transition duration-150 hover:bg-cta-hover"
        >
          Boka möte
        </RouterLink>
      </ul>
    </nav>
  </header>
</template>
