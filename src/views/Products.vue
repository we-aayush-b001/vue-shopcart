<template>
  <MainLayout>
    <Header></Header>

    <div class="max-w-7xl mx-auto px-4 py-8">
      <div v-if="productStore.loading" class="text-center">
        Loading products...
      </div>

      <div v-else-if="productStore.error" class="text-red-500">
        {{ productStore.error }}
      </div>

       <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductDetail
          v-for="product in productStore.filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>


  </MainLayout>
</template>


<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import Header from '../components/Header.vue'
import { onMounted } from 'vue'
import { useProductStore } from '../stores/productStore'
import ProductDetail from '../components/ProductDetail.vue'

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts()
})

</script>