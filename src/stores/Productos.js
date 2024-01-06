import { ref, onMounted } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const Productos = ref({});
  const loading = ref(false);

  onMounted(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      Productos.value = data;
      loading.value = true;
    }
    fetchData();
  });

  return {
    Productos,
    loading,
  };
});
