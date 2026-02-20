<template>
  <div class="border p-4 rounded shadow hover:shadow-lg transition">
    <h3 class="font-bold text-lg">
      {{ product.title }}
    </h3>
    <p class="text-gray-600">
      ${{ product.price }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>