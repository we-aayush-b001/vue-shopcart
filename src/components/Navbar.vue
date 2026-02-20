<template>
  <nav class="bg-white shadow-md">
    <div class="px-4 py-2 flex justify-between items-center">

      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img src="../assets/dashboard.svg" alt="dashboard" class="w-8 h-8" />
        <h1 class="text-2xl font-bold text-green-500">
          Bansal Bazaar
        </h1>
      </div>

      <!-- Links -->
      <div class="space-x-6">
        <RouterLink to="/products" class="text-gray-700 hover:text-indigo-600 font-medium">
          Products
        </RouterLink>

        <RouterLink to="/cart" class="relative text-gray-700 hover:text-indigo-600 font-medium">
          Cart

          <!-- Badge -->
          <span v-if="cartStore.totalItems > 0" class="absolute -top-2 -right-3 
                  bg-red-500 text-white 
                  text-xs font-bold 
                  px-2 py-0.5 
                  rounded-full 
                  min-w-[20px] 
                  text-center">
            {{ cartStore.totalItems }}
          </span>
        </RouterLink>
      </div>

    </div>
  </nav>
</template>


<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cartStore';
const cartStore = useCartStore();
</script>