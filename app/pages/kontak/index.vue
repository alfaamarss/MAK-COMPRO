<script setup lang="ts">
import Navbar from "~/components/layout/Navbar.vue";
import HeroKontak from "~/components/kontak/HeroKontak.vue";
import kontakSection from "~/components/kontak/kontakSection.vue";

import Footer from "~/components/layout/footer.vue";
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <main class="pt-16">
      <HeroKontak />
      <kontakSection />
      <Footer />
    </main>
  </div>
</template>
