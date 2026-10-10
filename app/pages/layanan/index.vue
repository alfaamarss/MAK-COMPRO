<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue'
import HeroService from '~/components/OurService/HeroService.vue';
import BeforeAfter from '~/components/OurService/BeforeAfterSlider.vue';
import Footer from '~/components/home/footer.vue';
import ServiceSection from '~/components/OurService/ServiceSection.vue';
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <main class="pt-16">
      <HeroService />
      <ServiceSection
      <BeforeAfter  />
      <Footer />
    </main>
  </div>
</template>
