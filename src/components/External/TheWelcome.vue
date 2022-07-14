<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import Store from "../store.js";
import { BeakerIcon, BookOpenIcon } from "@heroicons/vue/outline";
import WrapperCore from "./WrapperCore.vue";

let store = Store;
</script>

<template>
  <WrapperCore>
    <WelcomeItem>
      <template #icon>
        <BookOpenIcon class="w-6 h-6" />
      </template>
      <template #heading>Documentation</template>
      Vue’s
      <a target="_blank" href="https://vuejs.org/">official documentation</a>
      provides you with all information you need to get started.
      <button @click="store.toggle">
        <span v-if="!store.state">Danyel</span>
        <span v-else>Josaphat</span>
      </button>
      <p>{{ store.name }}</p>
      <BeakerIcon class="w-5 h-5" />
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <BeakerIcon class="w-6 h-6" />
      </template>
      <template #heading>Tooling</template>
      This project is served and bundled with
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite</a>.
      The recommended IDE setup is
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a
      >. If you need to test your components and web pages, check out
      <a href="https://www.cypress.io/" target="_blank">Cypress</a> and
      <a href="https://on.cypress.io/component" target="_blank"
        >Cypress Component Testing</a
      >.
      <br />
      More instructions are available in <code>README.md</code>.
    </WelcomeItem>
  </WrapperCore>
</template>
