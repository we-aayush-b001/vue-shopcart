<template>
  <div class="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
    
    <img
      :src="item.product.image"
      :alt="item.product.title"
      class="w-20 h-20 object-contain"
    />

    <div class="flex-1">
      <h3 class="font-semibold line-clamp-1">
        {{ item.product.title }}
      </h3>

      <p class="text-indigo-600 font-bold">
        ${{ item.product.price }}
      </p>

      <div class="flex items-center gap-2 mt-2">
        <button
          @click="cartStore.decreaseQuantity(item.product.id)"
          class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>

        <span class="font-medium">
          {{ item.quantity }}
        </span>

        <button
          @click="cartStore.increaseQuantity(item.product.id)"
          class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>
    </div>

    <button
      @click="cartStore.removeFromCart(item.product.id)"
      class="text-red-500 hover:text-red-700 font-medium"
    >
      Remove
    </button>
  </div>
</template>


<script setup>
import { useCartStore } from '../stores/cartStore'

const props = defineProps({
  item: Object
})

const cartStore = useCartStore();
</script>