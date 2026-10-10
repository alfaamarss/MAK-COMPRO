<script setup lang="ts">
import Navbar from "~/components/layout/Navbar.vue";
import HeroSection from "~/components/about/HeroSection.vue";
import AboutSection from "~/components/about/AboutSection.vue";
import ValueSection from "~/components/about/ValueSection.vue";
import Footer from "~/components/home/footer.vue";
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />

    <main class="pt-16">
      <HeroSection />
      <AboutSection />
      <ValueSection />
      <Footer />
    </main>
  </div>
</template>
