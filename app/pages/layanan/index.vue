<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue'
import ServiceSection from '~/components/OurService/ServiceSection.vue';
import HeroServiceSection from '~/components/OurService/HeroServiceSection.vue';
import BeforeAfter from '~/components/OurService/BeforeAfterSlider.vue';
import Footer from '~/components/home/footer.vue';
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <main class="pt-16">
      <HeroServiceSection />
      <ServiceSection   />
      <BeforeAfter  />
      <Footer />
    </main>
  </div>
</template>
