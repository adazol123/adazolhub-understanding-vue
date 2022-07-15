<template>
  <div class="img-wrapper">
    <img
      src="https://images.unsplash.com/photo-1657672733679-5eca7d798490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
      alt="working-man"
    />
  </div>
  <div class="content-header">
    <h1><span>Experience</span> Matter</h1>
    <p>
      Your success is our objective. We’ll care for your brand, product and
      services as much as you do.
    </p>
  </div>
  <ButtonRiple class="ripple-btn" @click="ripleClick">
    <span v-if="!store.state.toggleName"><CalendarIcon /></span>
    <span v-else><CalendarSolidIcon /></span>
    Set an appointment
  </ButtonRiple>
</template>

<script setup>
import { store } from "../../../store";
import ButtonRiple from "../../UI/ButtonRiple.vue";
import { CalendarIcon } from "@heroicons/vue/outline";
import { CalendarIcon as CalendarSolidIcon } from "@heroicons/vue/solid";

function ripleClick() {
  store.toggle();
}
</script>

<style scoped>
.img-wrapper {
  @apply relative min-h-[60vh] w-[calc(100%+3rem)] -mx-6 bg-gradient-to-r from-black/80 via-emerald-900/30 to-black/80;
}
.img-wrapper img {
  @apply absolute object-cover h-full w-full mix-blend-color-dodge;
}

.ripple-btn {
  @apply px-4 py-2;
}
.ripple-btn svg {
  @apply w-4 h-4;
}

.content-header {
  @apply flex flex-col gap-2 my-6;
}
.content-header p {
  @apply text-sm text-gray-500;
}
</style>
