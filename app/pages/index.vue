<script setup lang="ts">
import Navbar from "~/components/layout/Navbar.vue";
import HeroSection from "~/components/home/HeroSection.vue";
import ProyekSection from "~/components/proyek/ProyekSection.vue";
import FeaturedProductSection from "~/components/home/FeaturedProductSection.vue";
import ProyekClient from "~/components/proyek/ProyekClient.vue";
import Footer from "~/components/layout/footer.vue";
import ServiceSection from "~/components/OurService/ServiceSection.vue";

useSeoMeta({
  title: "Epoxy Lantai & Industrial Coating",
  description:
    "PT Multi Artha Kreasindo menyediakan solusi epoxy lantai dan industrial coating untuk pabrik, gudang, fasilitas industri, dan area komersial.",
  ogTitle: "Epoxy Lantai & Industrial Coating | PT Multi Artha Kreasindo",
  ogDescription:
    "Temukan solusi epoxy lantai dan industrial coating dari PT Multi Artha Kreasindo untuk kebutuhan industri dan komersial.",
  ogType: "website",
  ogUrl: "https://www.multiarthakreasindo.com/",
  ogLocale: "id_ID",
  twitterCard: "summary_large_image",
  robots: "index, follow",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://www.multiarthakreasindo.com/",
    },
  ],
});
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col font-sans">
    <Navbar />

    <main class="grow">
      <HeroSection />
      <ServiceSection />
      <FeaturedProductSection />
      <ProyekSection />
      <ProyekClient />
    </main>

    <Footer />
  </div>
</template>
