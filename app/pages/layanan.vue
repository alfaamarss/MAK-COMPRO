<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue'
import ServiceSection from '~/components/OurService/ServiceSection.vue';
import HeroServiceSection from '~/components/OurService/HeroServiceSection.vue';
import BeforeAfter from '~/components/OurService/BeforeAfterSlider.vue';
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />

    <!-- Tambahkan padding-top di sini (pt-24 atau sesuaikan dengan tinggi navbar) -->
    <main class="pt-16">
      <HeroServiceSection />
      <ServiceSection   />
      <BeforeAfter  />
    </main>
  </div>
</template>
