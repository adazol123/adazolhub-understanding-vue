<script setup>
import { store } from "../store";
import DropdownMenu from "../components/External/DropdownMenu.vue";
import DropdownPopup from "../components/External/DropdownPopup.vue";
document.title = "adazolhub | about";
</script>

<template>
  <div class="wrapper">
    <h1>This is an about page</h1>
    <p>{{ store.name }}</p>
    <div class="flex flex-col gap-2">
      <DropdownMenu title="What is adazolhub" id="1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas
          aspernatur eum. Non nihil vel ullam totam ducimus corporis illum?
        </p>
      </DropdownMenu>
      <DropdownMenu title="What is tailwindcss" id="2">
        <p>
          Lorem ipsum dolor sit amet cur adipisicing elit. Pariatur quas
          aspernatur eum. Non nihil vel ullam totam ducimus corporis
          illonsectetum?
        </p>
      </DropdownMenu>
    </div>
    <div>-</div>
    <DropdownPopup />
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
