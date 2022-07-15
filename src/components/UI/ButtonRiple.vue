<template>
  <button
    ref="btn"
    class="btn-riple"
    id="btn-riple"
    v-on:mousemove="hoverButton"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
import { ref } from "vue";

const btn = ref(null);

function hoverButton(e) {
  let x = e.pageX - btn.value?.offsetLeft;
  let y = e.pageY - btn.value?.offsetTop - 55;
  btn.value.style.setProperty("--btn-x", x + "px");
  btn.value.style.setProperty("--btn-y", y + "px");
}
</script>

<style>
.btn-riple {
  @apply relative inline-flex bg-emerald-700/5 overflow-hidden border border-emerald-500/30;
}

.btn-riple > span {
  @apply text-emerald-500 hover:text-emerald-300 relative z-[1];
  @apply inline-flex gap-4 items-center;
}
.btn-riple::before {
  content: "";
  @apply absolute left-[var(--btn-x)] top-[var(--btn-y)]  w-0 h-0 rounded-full bg-emerald-900/20 -translate-x-1/2 -translate-y-1/2;
  @apply transition-all opacity-0;
}

.btn-riple:hover::before {
  @apply w-16 h-16 opacity-100 scale-150 blur;
}
</style>
