<template>
  <div class="modal">
    <div>
      <div class="nav">
        <AdazolhubLogo />
        <button @click="store.menuToggle"><XIcon /></button>
      </div>
      <NavListVue />
    </div>
    <div>
      <div class="feature">Hello world</div>
      <div class="footer">
        <span>© Copyright 2022 | Adazolhub</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavListVue from "../Header/NavList.vue";
import { XIcon } from "@heroicons/vue/outline";
import { store } from "../../store";
import AdazolhubLogo from "../icons/AdazolhubLogo.vue";
</script>

<style scoped>
.nav {
  @apply h-nav flex justify-between items-center -mt-6;
}
.modal {
  @apply fixed top-0 bg-white dark:bg-gray-900/90 backdrop-blur  text-gray-800 w-full h-full p-6;
  @apply flex flex-col justify-between z-40 md:hidden;
}

.modal > ul {
  @apply flex-col;
}

button {
  @apply bg-transparent border-none p-2 dark:hover:bg-white/5 hover:bg-black/5 hover:text-accent-primary text-gray-400 rounded-full transition-transform;
}

.footer {
  @apply w-fit mx-auto text-xs text-gray-600;
}

.feature {
  @apply bg-gray-800/30 p-4 rounded-md my-4 text-white shadow-lg w-full;
  @apply min-h-[10em] grid place-content-center;
}
</style>
