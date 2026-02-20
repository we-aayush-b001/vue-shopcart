<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    
    <Navbar />

    <!-- Main Content -->
    <main class="flex-1">
      <slot></slot>
    </main>

    <Footer></Footer>

  </div>
</template>