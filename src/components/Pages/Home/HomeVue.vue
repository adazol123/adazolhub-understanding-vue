<template>
  <img
    src="https://images.unsplash.com/photo-1657672733679-5eca7d798490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
    alt="working-man"
  />

  <h1>Hello World {{ store.name }}</h1>

  <button @click="store.toggle()">
    change {{ store.state?.toggleName.toString() }}
  </button>

  <ButtonRiple class="ripple-btn" @click="ripleClick">
    <PhoneIcon /> Contact us</ButtonRiple
  >
</template>

<script setup>
import { store } from "../../../store";
import ButtonRiple from "../../UI/ButtonRiple.vue";
import { PhoneIcon } from "@heroicons/vue/outline";

console.log(import.meta.env);

function ripleClick() {
  console.log("click");
}
</script>

<style scoped>
.ripple-btn {
  @apply px-8 py-2;
}
.ripple-btn svg {
  @apply w-4 h-4;
}
</style>
