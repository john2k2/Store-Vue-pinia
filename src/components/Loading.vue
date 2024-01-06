<script setup></script>
<template>
  <div class="text-center flex flex-col justify-center items-center w-full h-screen">
    <div class="loading-animation">
      <span class="text-center"></span>
    </div>
    <h2 class="font-bold text-2xl mt-2">Cargando...</h2>
  </div>
</template>

<style scoped>
.loading-animation {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid #ccc;
  border-top-color: #000;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
