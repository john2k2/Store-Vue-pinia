<script setup>
import CardPreview from "@/components/CardPreview.vue";
import CartTotal from "@/components/CardTotal.vue";
</script>

<template>
  <div className="bg-[#cbd5e1] p-8 w-8/12  justify-center place-content-center flex flex-col mx-auto">
    <h1 className="text-4xl font-bold mb-6">Your cart</h1>
    <div className="grid grid-cols-3 gap-8 w-full ">
      <div className="col-span-2 h-[900px] rounded-md p-5 bg-red-600 overflow-y-auto">
        <CardPreview />
      </div>
      <CartTotal />
    </div>
  </div>
</template>
