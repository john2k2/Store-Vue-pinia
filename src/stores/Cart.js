import { defineStore } from "pinia";
import { ref } from "vue";
import { computed } from "vue";

export const useCartStore = defineStore("Cart", () => {
  const carrito = ref([]);
  const count = ref(1);
  const loading = ref(true);

  const increment = (index) => {
    carrito.value[index].count++;
  };

  const decrement = (index) => {
    if (carrito.value[index].count === 1) {
    } else {
      carrito.value[index].count--;
    }
  };

  const add = (Productos, count = 1) => {
    const productoConCount = { ...Productos, count }; // Crea un nuevo objeto que incluye todas las propiedades de Productos y count
    carrito.value.push(productoConCount);
  };

  const remove = (Productos) => {
    carrito.value.splice(carrito.value.indexOf(Productos), 1);
  };

  const total = computed(() => {
    return carrito.value.reduce((acc, Productos) => {
      // Utiliza producto.count para calcular el total de lo que esta en el carrito
      return acc + Productos.price * Productos.count;
    }, 0);
  });

  const cantidadProductos = computed(() => {
    // Calcula la cantidad de productos en el carrito
    if (carrito.value.length === 0) {
      return 0;
    } else {
      return carrito.value.length;
    }
  });

  return {
    carrito,
    add,
    remove,
    total,
    cantidadProductos,
    count,
    increment,
    decrement,
    loading,
  };
});
