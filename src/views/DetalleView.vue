<script setup>
import { useCartStore } from "../stores/Cart";
import ButtonAdd from "../components/ButtonAdd.vue";
import { useProductDetailStore } from "../stores/ProducDetail";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import CardRopa from "../components/CardRopa.vue";
import Loading from "../components/Loading.vue";

const store = useCartStore();
const Productos = useProductDetailStore();
const route = useRoute();
const loading = ref(store.loading);
const id = ref(route.params.id);

console.log(store.loading);

function storecarrito() {
  if (store.carrito.find((item) => item.id === Productos.Productos.id)) {
    store.increment(store.carrito.findIndex((item) => item.id === Productos.Productos.id));
  } else {
    store.add(Productos.Productos, store.count);
  }
}

onMounted(async () => {
  await Productos.getProductos(id.value);
  loading.value = false;
});
</script>

<template>
  <div>
    <Loading v-if="loading" />
    <CardRopa v-else :producto="Productos.Productos" />
    <div class="flex justify-center items-center gap-2">
      <ButtonAdd v-if="!loading" @click="storecarrito" />
    </div>
  </div>
</template>
