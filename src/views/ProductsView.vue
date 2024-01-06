<script setup>
import Loading from "@/components/Loading.vue";
import { useCounterStore } from "../stores/Productos";
import { RouterLink } from "vue-router";

const prductoStore = useCounterStore();
</script>

<template>
  <div v-if="prductoStore.loading" class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product of prductoStore.Productos" :key="product.id" class="group relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              :src="product.image"
              :alt="product.title"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <RouterLink :to="`/Detalle/${product.id}`" class="font-medium text-gray-900 hover:text-gray-700">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.title }}
                </RouterLink>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.category }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Loading v-else />
</template>
