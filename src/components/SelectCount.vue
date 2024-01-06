<script setup>
import { useCartStore } from "../stores/Cart";

const store = useCartStore();
const props = defineProps({
  index: Number,
  count: Number,
});
</script>

<template>
  <div class="flex justify-center items-center gap-2">
    <div class="flex justify-center items-center text-center text-2xl font-bold text-gray-500 gap-2">
      <span
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full cursor-pointer"
        @click="store.increment(props.index)"
        >+</span
      >
      <span class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full cursor-pointer">
        {{ props.count }}
      </span>
      <span
        @click="store.decrement(props.index)"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full cursor-pointer"
        >-</span
      >
    </div>
  </div>
</template>
