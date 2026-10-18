<script setup lang="ts">
import Navbar from "~/components/layout/Navbar.vue";
import HeroProyek from "~/components/proyek/HeroProyek.vue";
import Footer from "~/components/layout/footer.vue";
import ProyekSection from "~/components/proyek/ProyekSection.vue";
import ProyekClient from "~/components/proyek/ProyekClient.vue";
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />

    <main class="pt-16">
      <HeroProyek />
      <ProyekSection />
      <ProyekClient />

      <Footer />
    </main>
  </div>
</template>
