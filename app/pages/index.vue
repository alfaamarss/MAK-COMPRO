<script setup lang="ts">
import Navbar from "~/components/layout/Navbar.vue";
import HeroSection from "~/components/home/HeroSection.vue";
import AboutSection from "~/components/about/AboutSection.vue";
import FeaturedProductSection from "~/components/home/FeaturedProductSection.vue";
import Footer from "~/components/home/footer.vue";
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col font-sans">
    <!-- Navbar (Sticky/Fixed di bagian paling atas) -->
    <Navbar />

    <!-- Main Content Wrapper (Otomatis mengisi ruang kosong) -->
    <main class="flex-grow">
      <HeroSection />
      <AboutSection />
      <FeaturedProductSection />
    </main>

    <!-- Footer (Selalu menempel di bawah) -->
    <Footer />
  </div>
</template>
