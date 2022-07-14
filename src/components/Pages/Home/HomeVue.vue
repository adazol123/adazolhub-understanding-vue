<template>
  <img
    src="https://images.unsplash.com/photo-1657672733679-5eca7d798490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
    alt="working-man"
  />

  <h1>Hello World {{ store.name }}</h1>

  <button @click="store.toggle()">
    change {{ store.state?.toggleName.toString() }}
  </button>
</template>

<script setup>
import { store } from "../../../store";

console.log(import.meta.env);
</script>
