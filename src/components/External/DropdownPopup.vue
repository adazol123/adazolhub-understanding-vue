<template>
  <div>
    <button
      v-if="isOpen"
      @click="isOpen = false"
      tabindex="-1"
      class="w-full h-full fixed inset-0 z-30 bg-transparent border-none cursor-default"
    />
    <button
      @mouseenter="isOpen = true"
      @click="isOpen = !isOpen"
      class="px-4 py-2 rounded peer"
    >
      Drop menu
    </button>
    <div
      @mouseenter="isOpen = true"
      @mouseleave="isOpen = false"
      v-if="isOpen"
      class="relative bg-white rounded-lg py-2 flex-col w-48 ml-2 mt-2 shadow-xl flex z-40"
    >
      <a
        href="#"
        @click="isOpen = false"
        class="px-4 py-2 text-gray-500 hover:text-gray-800 hover:bg-emerald-400/60"
        >Account settings</a
      >
      <a
        href="#"
        @click="isOpen = false"
        class="px-4 py-2 text-gray-500 hover:text-gray-800 hover:bg-emerald-400/60"
        >Support</a
      >
      <a
        href="#"
        @click="isOpen = false"
        class="px-4 py-2 text-gray-500 hover:text-gray-800 hover:bg-emerald-400/60"
        >Signout</a
      >
    </div>
  </div>
</template>

<script>
import { onBeforeUnmount } from "vue";

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  created() {
    const handleEscape = (e) => {
      if (e.key === "Esc" || e.key === "Escape") {
        this.isOpen = false;
      }
    };
    document.addEventListener("keydown", handleEscape);

    onBeforeUnmount(() => {
      document.removeEventListener("keydown", handleEscape);
      console.log("unmounted");
    });
  },
};
</script>
