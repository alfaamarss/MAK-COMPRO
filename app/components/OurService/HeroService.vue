<template>
  <section class="relative w-full min-h-[65vh] flex items-center bg-neutral-900 overflow-hidden pt-20 pb-20">
    <!-- Background & Overlay -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
        alt="Latar Belakang Pabrik Jasa Epoxy Lantai"
        class="w-full h-full object-cover opacity-40 mix-blend-overlay"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-[#7a2021]/70"></div>
    </div>

    <!-- Container Utama -->
    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-[10px] sm:text-xs text-neutral-300 mb-6 font-medium">
        <svg class="w-3.5 h-3.5 text-[#e5c158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <NuxtLink to="/" class="hover:text-white transition-colors">Beranda</NuxtLink>
        <span class="text-neutral-500">/</span>
        <span class="text-[#e5c158] font-semibold">Layanan Kami</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- KOLOM KIRI: Teks & Fitur (Span 7) -->
        <div class="lg:col-span-7">
          <!-- Badge -->
          <div class="inline-flex items-center bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 mb-5 shadow-md">
            <span class="w-1.5 h-1.5 rounded-full bg-[#c41215] mr-2"></span>
            <span class="text-[10px] font-bold text-neutral-800 tracking-wider">KONTRAKTOR & APLIKATOR RESMI</span>
          </div>

          <!-- Judul Utama (DIOPTIMASI UNTUK SEO H1) -->
          <h1 class="font-extrabold tracking-tight mb-5 leading-tight">
            <span class="block text-2xl sm:text-3xl text-neutral-200 uppercase tracking-wide">
              SPESIALIS KONTRAKTOR &
            </span>
            <span class="block text-3xl sm:text-4xl lg:text-5xl text-[#e5c158] uppercase my-1 drop-shadow-sm">
              JASA EPOXY LANTAI
            </span>
            <span class="block text-xl sm:text-2xl lg:text-3xl text-white font-semibold tracking-normal">
              INDUSTRIAL COATING TERPERCAYA
            </span>
          </h1>

          <!-- Deskripsi (DIOPTIMASI DENGAN KEYWORD) -->
          <p class="text-neutral-300 text-sm sm:text-base max-w-xl mb-8 leading-relaxed font-normal">
            Kami merupakan penyedia <strong>jasa epoxy lantai</strong> dan pelapisan lantai berstandar industri dengan
            eksekusi teknis presisi. Mulai dari persiapan substrat mekanis, perbaikan retak beton, hingga finishing
            kilap cermin tanpa pori dengan garansi resmi.
          </p>

          <!-- 3 Fitur Badges -->
          <div class="flex flex-wrap gap-2.5 sm:gap-3">
            <div
              class="flex items-center gap-2 border border-neutral-500/40 rounded-md bg-black/40 px-3 py-2 backdrop-blur-md shadow-inner"
            >
              <svg class="w-4 h-4 text-[#e5c158] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-xs text-neutral-200 font-semibold tracking-wide">Aplikator Ahli Berpengalaman</span>
            </div>

            <div
              class="flex items-center gap-2 border border-neutral-500/40 rounded-md bg-black/40 px-3 py-2 backdrop-blur-md shadow-inner"
            >
              <svg class="w-4 h-4 text-[#e5c158] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span class="text-xs text-neutral-200 font-semibold tracking-wide">Garansi Daya Rekat Penuh</span>
            </div>

            <div
              class="flex items-center gap-2 border border-neutral-500/40 rounded-md bg-black/40 px-3 py-2 backdrop-blur-md shadow-inner"
            >
              <svg class="w-4 h-4 text-[#e5c158] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <span class="text-xs text-neutral-200 font-semibold tracking-wide">Survey & Moisture Test Gratis</span>
            </div>
          </div>
        </div>

        <!-- KOLOM KANAN: Gambar utama -->
        <div class="lg:col-span-5 relative w-full max-w-md lg:ml-auto mt-8 lg:mt-0 pb-6 flex justify-end">
          <!-- Gambar Utama -->
          <div
            class="relative z-10 w-[75%] rounded-2xl overflow-hidden border border-neutral-700/60 shadow-2xl bg-neutral-900 -translate-x-6 sm:-translate-x-8"
          >
            <!-- Alt Text dioptimasi dengan Keyword -->
            <img
              src="/images/Services/epoxy/EpoxyFlooring1.jpg"
              alt="Hasil Pengerjaan Jasa Epoxy Lantai Pabrik dan Industri"
              class="w-full h-[260px] sm:h-[300px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <!-- Gambar Kecil -->
          <div
            class="absolute right-2 sm:right-0 -bottom-6 w-[48%] rounded-xl overflow-hidden border-2 border-neutral-800 shadow-2xl z-20 bg-neutral-900"
          >
            <img
              src="/images/Services/Hightemp.jpeg"
              alt="Layanan High Temp Coating dan Jasa Pengecatan Lantai"
              class="w-full h-[140px] sm:h-[160px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useSeoMeta, useHead } from "#imports";

// 1. Optimasi Meta Tags khusus menargetkan "Jasa Epoxy"
useSeoMeta({
  title: "Jasa Epoxy Lantai Profesional & Bergaransi | PT Multi Artha Kreasindo",
  description:
    "Mencari jasa epoxy lantai terpercaya? Kami adalah spesialis industrial flooring, coating, dan waterproofing dengan garansi resmi dan survey gratis. Hubungi kami sekarang!",
  keywords:
    "jasa epoxy, jasa epoxy lantai, kontraktor epoxy, harga epoxy lantai, aplikator epoxy lantai, pelapisan lantai pabrik, epoxy gudang, industrial coating",
  ogTitle: "Jasa Epoxy Lantai Profesional & Bergaransi",
  ogDescription:
    "Spesialis industrial flooring dan coating dengan garansi resmi. Dapatkan survey dan moisture test gratis untuk pabrik atau gudang Anda.",
  ogImage: "/images/Services/epoxy/EpoxyFlooring1.jpg",
  twitterCard: "summary_large_image",
});

// 2. Schema Markup SEO (Membantu Google memahami bahwa ini adalah halaman penawaran jasa lokal)
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Jasa Epoxy Lantai",
        provider: {
          "@type": "LocalBusiness",
          name: "PT Multi Artha Kreasindo",
          image: "/images/Services/epoxy/EpoxyFlooring1.jpg",
        },
        areaServed: "Indonesia",
        description:
          "Layanan jasa epoxy lantai profesional untuk pabrik, gudang, dan fasilitas komersial dengan garansi daya rekat maksimal.",
        offers: {
          "@type": "Offer",
          description: "Survey & Moisture Test Gratis sebelum pengerjaan Epoxy Lantai.",
        },
      }),
    },
  ],
});
</script>

<style scoped>
/* Pastikan HANYA ada CSS di dalam tag style ini, jangan masukkan tag HTML */
</style>
