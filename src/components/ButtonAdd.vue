<template>
  <button @click="props.onClick" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Agregar
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  onClick: Function,
});
</script>
