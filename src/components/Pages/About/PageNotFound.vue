<template>
  <div class="not-found">
    <div>
      <EmojiSadIcon />
      <h2>404 not found</h2>
      <p>The page you are tring to access is not found</p>
    </div>
  </div>
</template>

<script setup>
import { EmojiSadIcon } from "@heroicons/vue/solid";
</script>

<style scoped>
.not-found {
  @apply grid place-content-center w-full h-[calc(100vh-var(--nav-height))];
  @apply text-2xl font-thin;
}

.not-found svg {
  @apply text-center w-full h-16;
}

.not-found > div {
  @apply text-center text-accent-primary;
}
p {
  @apply text-xs text-gray-600;
}
</style>
