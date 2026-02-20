<template>
    <div class="border rounded-xl shadow-md p-4 flex flex-col
         transition-all duration-300 ease-in-out
         hover:-translate-y-2 hover:shadow-2xl hover:border-green-400" >

    <img
      :src="product.image"
      :alt="product.title"
      class="h-48 w-full object-contain mb-4"
    />

    <p class="text-sm text-gray-500 uppercase tracking-wide">
      {{ product.category }}
    </p>

    <h3 class="font-semibold text-lg mt-1 line-clamp-2">
      {{ product.title }}
    </h3>

    <div class="flex items-center mt-2">
      ⭐ <span class="ml-1 text-sm">{{ product.rating?.rate }}</span>
      <span class="ml-2 text-xs text-gray-500">
        ({{ product.rating?.count }} reviews)
      </span>
    </div>

    <p class="text-xl font-bold text-green-600 mt-2">
      ${{ product.price }}
    </p>

    <p class="text-sm text-gray-600 mt-2 line-clamp-3">
      {{ truncatedDescription }}
    </p>

    <button
      @click="addToCart"
      class="mt-auto bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition"
    >
      Add to Cart
    </button>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore();

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const truncatedDescription = computed(() => {
  return props.product.description.length > 80
    ? props.product.description.substring(0, 80) + '...'
    : props.product.description
})

const addToCart = () => {
  cartStore.addToCart(props.product);
}

</script>