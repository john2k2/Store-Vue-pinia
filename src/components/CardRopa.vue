<template>
  <div>
    <div class="flex gap-8 w-full justify-center items-center">
      <div class="flex flex-col items-center">
        <img :src="producto.image" :alt="producto.title" class="mb-4" height="400" width="300" />
        <div class="grid grid-cols-3 gap-2"></div>
        <p class="text-xs text-gray-500 mt-2">Roll over image to zoom in</p>
      </div>
      <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div class="border-b pb-4 mb-4">
          <h1 class="text-2xl font-bold">{{ producto.title }}</h1>
          <p class="text-gray-500 mt-2">
            {{ producto.description }}
          </p>
          <div class="flex items-center mt-2">
            <span class="text-sm text-gray-600 ml-2">4.59</span>
          </div>
        </div>
        <div class="border-b pb-4 mb-4">
          <div class="flex justify-between items-center">
            <div>
              <h2 class="text-lg font-bold">${{ producto.price }}</h2>
              <span class="text-xs text-gray-500">{{ producto.id }}</span>
              <span class="text-xs text-gray-500">{{ producto.id }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["producto"],
};
</script>

<style scoped></style>
