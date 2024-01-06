<script setup>
import { useCartStore } from "@/stores/Cart";
import { computed } from "vue";

const store = useCartStore();

//numero entero de total
const total = computed(() => {
  return store.total.toFixed(2);
});
</script>

<template>
  <div>
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Shipping & details</h2>
        
    </div>
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Payment</h2>
      <hr />
    </div>
    <div className="bg-[#7f5af0] text-white">
      <div>
        <h3 className="text-lg font-semibold mb-4">Cart totals</h3>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>$710.70</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Shipping</span>
          <span>$10.00</span>
        </div>
        <div className="flex justify-between font-semibold mb-6">
          <span>Total</span>
          <span>${{ total }}</span>
        </div>
        <button className="w-full bg-[#5046e4] hover:bg-[#4038d5]">Checkout</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
