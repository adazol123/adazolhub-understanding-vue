<script setup>
import { RouterLink } from "vue-router";
import { HomeIcon, InformationCircleIcon } from "@heroicons/vue/outline";
import { store } from "../../store";

function closeModal() {
  store.menuToggle();
}
</script>

<template>
  <div class="links">
    <RouterLink to="/" @click="closeModal">
      <span><HomeIcon /></span>Home</RouterLink
    >
    <RouterLink to="/about" @click="closeModal">
      <span><InformationCircleIcon /></span> Portfolio
    </RouterLink>
    <RouterLink to="/faq" @click="closeModal">
      <span><InformationCircleIcon /></span> FAQ
    </RouterLink>
    <RouterLink to="/about" @click="closeModal">
      <span><InformationCircleIcon /></span> About
    </RouterLink>
  </div>
</template>

<style scoped>
.links {
  @apply flex flex-col gap-2 text-gray-400;
}

a {
  @apply border border-gray-600 p-4 rounded-md w-full text-gray-300;
  @apply flex gap-4 items-center;
}
svg {
  @apply text-gray-500 group-active:text-green-600;
}

a.router-link-exact-active {
  @apply text-accent-primary border-emerald-400/60 bg-emerald-900/10;
}

a.router-link-exact-active svg {
  @apply text-emerald-400/40;
}

a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
