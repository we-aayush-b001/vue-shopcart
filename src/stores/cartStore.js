import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useCartStore = defineStore('cart', () => {

  // 🔹 Load cart from localStorage (if exists)
  const storedCart = localStorage.getItem('cart')
  const cartItems = ref(storedCart ? JSON.parse(storedCart) : []);

  const totalItems = computed(() =>
    cartItems.value.reduce((total, item) => total + item.quantity, 0)
  )

  const totalPrice = computed(() =>
    cartItems.value.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )
  )

  const getItemQuantity = (productId) => {
    const item = cartItems.value.find(
      item => item.product.id === productId
    )
    return item ? item.quantity : 0
  }

  const addToCart = (product) => {
    const existingItem = cartItems.value.find(
      item => item.product.id === product.id
    )

    if (existingItem) {
      existingItem.quantity++
    } else {
      cartItems.value.push({ product, quantity: 1 })
    }
  }

  const increaseQuantity = (productId) => {
    const item = cartItems.value.find(
      item => item.product.id === productId
    )
    if (item) item.quantity++
  }

  const decreaseQuantity = (productId) => {
    const item = cartItems.value.find(
      item => item.product.id === productId
    )

    if (!item) return

    if (item.quantity > 1) {
      item.quantity--
    } else {
      removeFromCart(productId)
    }
  }

  const removeFromCart = (productId) => {
    cartItems.value = cartItems.value.filter(
      item => item.product.id !== productId
    )
  }

  const clearCart = () => {
    cartItems.value = []
  }

  //  Automatically sync with localStorage
  watch(
    cartItems,
    (newCart) => {
      localStorage.setItem('cart', JSON.stringify(newCart))
    },
    { deep: true }
  )

  return {
    cartItems,
    totalItems,
    totalPrice,
    getItemQuantity,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
  }
})