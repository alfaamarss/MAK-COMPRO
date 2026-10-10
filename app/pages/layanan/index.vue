<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue'
import ServiceSection from '~/components/OurService/ServiceSection.vue';
import BeforeAfter from '~/components/OurService/BeforeAfterSlider.vue';
import Footer from '~/components/home/footer.vue';
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <main class="pt-16">
      <ServiceSection />
      <BeforeAfter  />
      <Footer />
    </main>
  </div>
</template>
