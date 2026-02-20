import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, computed, watch } from 'vue'

export const useProductStore = defineStore('product', () => {
  
  // -------------------
  // STATE
  // -------------------
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const searchQuery = ref('')
  const selectedCategory = ref('')
  const sortOption = ref('');
  const searchInput = ref('')
  let timeout = null;

  // ACTION: Fetch Products
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

  const categories = computed(() => {
    return [...new Set(products.value.map(p => p.category))]
  })

  const filteredProducts = computed(() => {
    let result = [...products.value]

    // searchQuery
    if (searchQuery.value) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(searchQuery.value.toLowerCase())
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

  watch(searchInput, (newValue) => {  // Debounce Search For Performnace Optimization
    clearTimeout(timeout)
    timeout = setTimeout(() => {
     searchQuery.value = newValue
    }, 300);
   })

  return {
    products,
    loading,
    error,
    searchQuery,
    selectedCategory,
    sortOption,
    categories,
    filteredProducts,
    searchInput,
    fetchProducts
  }
})