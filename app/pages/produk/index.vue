<script setup lang="ts">
import Footer from "~/components/home/footer.vue";
import Navbar from "~/components/layout/Navbar.vue";
import HeroSection from "~/components/Product/HeroSection.vue";
import ProductSection from "~/components/Product/ProductSection.vue";
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col font-sans">
    <Navbar />

    <!-- Tambahkan padding-top di sini (pt-24 atau sesuaikan dengan tinggi navbar) -->
    <main class="pt-16">
      <HeroSection />
      <ProductSection />
      <Footer />
    </main>
  </div>
</template>
