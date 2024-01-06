<script setup>
import { useCartStore } from "@/stores/Cart";
import SelectCount from "@/components/SelectCount.vue";
import { RouterLink } from "vue-router";
import Remove from "@/components/Remove.vue";

const store = useCartStore();

const remove = (index) => {
  store.remove(index);
};
</script>

<template>
  <div
    v-if="store.carrito.length > 0"
    v-for="(carrito, index) in store.carrito"
    :key="carrito.id"
    class="bg-white h-[30%] rounded-xl mb-4 hover:shadow-2xl cursor-pointer">
    <div class="grid grid-cols-6 grid-rows-1 h-full justify-center p-5">
      <div class="col-span-4 flex gap-x-4 justify-center">
        <img class="object-contain w-32" :src="carrito.image" :alt="carrito.title" />
        <div class="grid grid-cols-5 grid-rows-2 justify-center items-center h-[100px] gap-y-10">
          <h3 class="text-xl font-bold grid-rows-1 col-span-4">{{ carrito.title }}</h3>
          <p class="text-sm text-gray-600 col-span-5">{{ carrito.description }}</p>
        </div>
      </div>
      <div class="flex justify-center items-center gap-3">
        <SelectCount :index="index" :count="carrito.count" />
        <Remove :index="index" @click="remove(index)" />
      </div>
      <p class="text-3xl font-bold flex justify-center items-center">${{ carrito.price }}</p>
    </div>
  </div>
  <div v-else class="flex justify-center items-center h-[500px]">
    <h1 class="text-4xl font-bold">No hay productos en el carrito</h1>
    <RouterLink to="/productos">
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer">
        Productos
      </button>
    </RouterLink>
  </div>
</template>
