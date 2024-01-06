import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductDetailStore = defineStore("ProductDetail", () => {
  const Productos = ref({});

  const getProductos = async (id) => {
    if (id) {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      Productos.value = data;
    }
  };
  return {
    Productos,
    getProductos,
  };
});
