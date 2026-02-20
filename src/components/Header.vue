<template>
   <header class="bg-green-500 text-white py-5">
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-4 justify-center items-center">

      <input
        v-model="productStore.searchInput"
        type="text"
        placeholder="Search products..."
        class="px-4 py-2 rounded text-gray-700 w-64 focus:outline-none"
      />

      <select
        v-model="productStore.selectedCategory"
        class="px-4 py-2 rounded text-gray-700 focus:outline-none"
      >
        <option value="">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      <select
        v-model="productStore.sortOption"
        class="px-4 py-2 rounded text-gray-700 focus:outline-none"
      >
        <option value="">Default Sorting</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
        <option value="a-z">Title: A to Z</option>
      </select>

    </div>
  </header>
</template>

<script setup>
import { useProductStore } from '../stores/productStore'
const productStore = useProductStore();
</script>