<template>
  <header>
    <nav class="wrapper">
      <AdazolhubLogo />
      <button @click="store.menuToggle">
        <span v-if="!store.state.menu"><MenuIcon /></span>
        <span v-else><XIcon /></span>
      </button>
    </nav>
  </header>
</template>

<script setup>
import AdazolhubLogo from "../icons/AdazolhubLogo.vue";
import NavList from "./NavList.vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { store } from "../../store";
</script>

<style scoped>
header > .wrapper {
  @apply h-nav flex justify-between items-center shadow;
}

button {
  @apply bg-transparent border-none p-2 dark:hover:bg-white/5 hover:text-gray-300 text-accent-primary rounded-full transition-transform;
}
</style>
