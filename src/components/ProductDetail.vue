<template>
    <div class="group bg-white border border-gray-200 rounded-2xl 
         shadow-sm p-5 flex flex-col 
         transition-all duration-300 
         hover:shadow-xl hover:-translate-y-2">

        <!-- Image -->
        <div class="overflow-hidden rounded-xl bg-gray-50 p-4">
            <img :src="product.image" :alt="product.title" class="h-48 w-full object-contain 
             transition-transform duration-300 
             group-hover:scale-105" />
        </div>

        <!-- Category -->
        <p class="text-xs text-green-600 font-medium uppercase tracking-wide mt-4">
            {{ product.category }}
        </p>

        <!-- Title -->
        <h3 class="font-semibold text-lg mt-1 line-clamp-2 
             text-gray-800 group-hover:text-green-600 transition">
            {{ product.title }}
        </h3>

        <!-- Rating -->
        <div class="flex items-center mt-2 space-x-2">
            <span class="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full">
                ⭐ {{ product.rating?.rate }}
            </span>
            <span class="text-xs text-gray-500">
                {{ product.rating?.count }} reviews
            </span>
        </div>

        <!-- Price -->
        <p class="text-2xl font-bold text-gray-900 mt-3">
            ${{ product.price }}
        </p>

        <!-- Description -->
        <p class="text-sm text-gray-600 mt-2 line-clamp-3">
            {{ truncatedDescription }}
        </p>

        <!-- Button -->
        <button @click="addToCart" class="mt-5 bg-green-500 hover:bg-green-600 
           text-white py-2.5 px-4 rounded-xl 
           font-medium tracking-wide
           transition-all duration-300 
           hover:scale-[1.02] active:scale-95">
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