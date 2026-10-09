<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue'
import HeroSection from '~/components/home/HeroSection.vue'
import AboutSection from '~/components/home/AboutSection.vue';
import ValueSection from '~/components/home/ValueSection.vue';
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />

    <main>
        <AboutSection />

    </main>
  </div>
</template>
