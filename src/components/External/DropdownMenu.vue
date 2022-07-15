<template>
  <div class="relative w-[400px] overflow-hidden">
    <!-- Input tuggler (hidden)-->
    <input type="checkbox" :id="props.id" class="peer hidden" />

    <label
      :for="props.id"
      class="bg-gray-400 h-12 w-full pl-5 flex items-center gap-4 rounded peer-checked:rounded-b-none duration-100 delay-500 cursor-pointer"
    >
      <!-- Dropdown title icon-->
      <BriefcaseIcon />
      <!-- Dropdown title-->
      <h1 class="text-lg font-semibold text-gray-700">{{ props.title }}</h1>
    </label>

    <!-- Right Icon indicator-->
    <label
      :for="props.id"
      class="peer-checked:-rotate-180 absolute top-3 right-3 transition-transform duration-500 cursor-pointer"
    >
      <ChevronDownIcon />
    </label>

    <!--Dropdown content-->
    <div
      class="bg-gray-400/70 overflow-hidden transition-all -translate-y-1 duration-500 max-h-0 peer-checked:max-h-40 peer-checked:rounded-b"
    >
      <div class="pl-14 py-4 pr-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronDownIcon, BriefcaseIcon } from "@heroicons/vue/outline";
let props = defineProps({
  id: String,
  title: String,
});
</script>
