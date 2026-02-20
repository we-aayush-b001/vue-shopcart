import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, computed } from 'vue'

export const useProductStore = defineStore('product', () => {
  
  // -------------------
  // STATE
  // -------------------
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const search = ref('')
  const selectedCategory = ref('')
  const sortOption = ref('')

  // -------------------
  // ACTION: Fetch Products
  // -------------------
  const fetchProducts = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      products.value = response.data
    } catch (err) {
      error.value = 'Failed to fetch products'
    } finally {
      loading.value = false
    }
  }

  // -------------------
  // GETTERS (Computed)
  // -------------------

  const categories = computed(() => {
    return [...new Set(products.value.map(p => p.category))]
  })

  const filteredProducts = computed(() => {
    let result = [...products.value]

    // Search
    if (search.value) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(search.value.toLowerCase())
      )
    }

    // Category
    if (selectedCategory.value) {
      result = result.filter(p =>
        p.category === selectedCategory.value
      )
    }

    // Sorting
    if (sortOption.value === 'low-high') {
      result.sort((a, b) => a.price - b.price)
    }

    if (sortOption.value === 'high-low') {
      result.sort((a, b) => b.price - a.price)
    }

    if (sortOption.value === 'a-z') {
      result.sort((a, b) => a.title.localeCompare(b.title))
    }

    return result
  })

  return {
    products,
    loading,
    error,
    search,
    selectedCategory,
    sortOption,
    categories,
    filteredProducts,
    fetchProducts
  }
})