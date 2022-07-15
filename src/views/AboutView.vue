<script setup>
import { store } from "../store";
document.title = "adazolhub | about";
</script>

<template>
  <div class="wrapper">
    <h1>This is an about page</h1>
    <p>{{ store.name }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
