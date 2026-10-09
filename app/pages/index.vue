<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue'
import HeroSection from '~/components/home/HeroSection.vue'
import AboutSection from '~/components/home/AboutSection.vue'
import ValueSection from '~/components/home/ValueSection.vue'
import FeaturedProductSection from '~/components/home/FeaturedProductSection.vue'
import Footer from '~/components/home/footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col">
    <!-- Navbar dibuat fixed/sticky agar rapi saat discroll di 100% -->
    <Navbar />

    <main class="flex-grow">
      <HeroSection />
      <AboutSection />
      <ValueSection />
      <FeaturedProductSection />
    </main>

    <Footer />
  </div>
</template>
