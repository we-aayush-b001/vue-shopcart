<template>
    <MainLayout>
        <div class="max-w-6xl mx-auto p-6">
            <h1 class="text-2xl font-bold mb-6">Shopping Cart</h1>

            <div v-if="cartStore.cartItems.length === 0" class="text-gray-500">
                Your cart is empty.
            </div>

            <!-- Cart Items -->
            <div v-else class="grid md:grid-cols-3 gap-6">

                <!-- Items List -->
                <div class="md:col-span-2 space-y-4">
                    <CartDetail v-for="item in cartStore.cartItems" :key="item.id" :item="item" />
                </div>

                <!-- Cart Summary -->
                <div class="bg-gray-100 p-6 rounded-lg shadow-md h-fit">
                    <h2 class="text-lg font-semibold mb-4">Cart Summary</h2>

                    <div class="flex justify-between mb-2">
                        <span>Total Items:</span>
                        <span class="font-semibold">
                            {{ cartStore.totalItems }}
                        </span>
                    </div>

                    <div class="flex justify-between mb-4">
                        <span>Total Price:</span>
                        <span class="font-semibold text-indigo-600">
                            ${{ cartStore.totalPrice.toFixed(2) }}
                        </span>
                    </div>

                </div>
            </div>
        </div>
    </MainLayout>

</template>


<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import Header from '../components/Header.vue'
import { useCartStore } from '../stores/cartStore';
import CartDetail from '../components/CartDetail.vue';
const cartStore = useCartStore();
</script>