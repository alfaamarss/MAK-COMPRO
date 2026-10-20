<script setup lang="ts">
import Footer from "~/components/layout/footer.vue";
import Navbar from "~/components/layout/Navbar.vue";
import HeroSection from "~/components/Product/HeroSection.vue";
import ProductSection from "~/components/Product/ProductSection.vue";
import { useSeoMeta, useHead } from "#imports";

// ==================== METADATA SEO HALAMAN KATALOG ====================
useSeoMeta({
  title: "Katalog Produk Cat Epoxy & Coating | PT Multi Artha Kreasindo",
  description:
    "Temukan berbagai produk cat epoxy lantai, polyurethane, zincromate primer, dan cat marka jalan berstandar industri. Solusi material coating terbaik.",

  ogTitle: "Katalog Produk Cat Epoxy & Coating | PT Multi Artha Kreasindo",
  ogDescription:
    "Temukan berbagai produk cat epoxy lantai, polyurethane, zincromate primer, dan cat marka jalan berstandar industri. Solusi material coating terbaik.",
  ogType: "website",
  ogUrl: "https://www.multiarthakreasindo.com/produk",
  twitterCard: "summary_large_image",
});

// Menambahkan Keywords, Canonical URL, dan Schema.org JSON-LD
useHead({
  link: [
    {
      rel: "canonical",
      href: "https://www.multiarthakreasindo.com/produk",
    },
  ],
  meta: [
    {
      name: "keywords",
      content:
        "katalog produk epoxy, jual cat lantai industri, cat polyurethane, cat marka jalan, pabrik cat epoxy, supplier epoxy lantai",
    },
  ],
  script: [
    {
      // Melakukan type casting agar TypeScript tidak error
      type: "application/ld+json" as "application/json",
      // Gunakan innerHTML alih-alih children
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Katalog Produk Cat Epoxy & Coating",
        description:
          "Katalog lengkap produk cat lantai epoxy, polyurethane, dan pelapis anti karat dari PT Multi Artha Kreasindo.",
        url: "https://www.multiarthakreasindo.com/produk",
        publisher: {
          "@type": "Organization",
          name: "PT Multi Artha Kreasindo",
          url: "https://www.multiarthakreasindo.com",
        },
      }),
    },
  ],
});
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col font-sans">
    <Navbar />

    <!-- Tambahkan padding-top di sini (pt-24 atau sesuaikan dengan tinggi navbar) -->
    <main class="pt-16">
      <HeroSection />
      <ProductSection />
      <Footer />
    </main>
  </div>
</template>
