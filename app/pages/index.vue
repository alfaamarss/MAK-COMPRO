<script setup lang="ts">
import Navbar from "~/components/layout/Navbar.vue";
import HeroSection from "~/components/home/HeroSection.vue";
import ProyekSection from "~/components/proyek/ProyekSection.vue";
import FeaturedProductSection from "~/components/home/FeaturedProductSection.vue";
import ProyekClient from "~/components/proyek/ProyekClient.vue";
import Footer from "~/components/layout/footer.vue";
import ServiceSection from "~/components/OurService/ServiceSection.vue";
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col font-sans">
    <!-- Navbar (Sticky/Fixed di bagian paling atas) -->
    <Navbar />

    <!-- Main Content Wrapper (Otomatis mengisi ruang kosong) -->
    <main class="grow">
      <HeroSection />
      <ServiceSection />
      <FeaturedProductSection />
      <ProyekSection />
      <ProyekClient />
    </main>

    <!-- Footer (Selalu menempel di bawah) -->
    <Footer />
  </div>
</template>
