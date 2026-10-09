<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue'
import ProductSection from '~/components/Product/ProductSection.vue';
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />

    <!-- Tambahkan padding-top di sini (pt-24 atau sesuaikan dengan tinggi navbar) -->
    <main class="pt-16">
      <ProductSection />
    </main>
  </div>
</template>
