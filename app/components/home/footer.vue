<template>
  <footer class="w-full font-sans text-white bg-neutral-950">
    <!-- CTA Callout Banner -->
    <div
      class="relative overflow-hidden bg-gradient-to-r from-[#7a2021] via-[#c41215] to-[#7a2021] border-b-4 border-[#e5c158] py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-4xl mx-auto text-center relative z-10">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 backdrop-blur-md px-3 py-1 rounded-full mb-3"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-[#e5c158] animate-pulse"></span>
          <span class="text-[9px] sm:text-xs font-bold text-white tracking-widest uppercase">
            KONSULTASI TEKNIS & PENGADAAN
          </span>
        </div>

        <!-- Title & Desc -->
        <h2 class="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-2 sm:mb-3">
          Butuh Bantuan Memilih Produk Coating?
        </h2>
        <p class="text-neutral-200 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed mb-5">
          Konsultasikan spesifikasi material, estimasi kebutuhan, atau custom formulasi bersama tim teknis PT Multi
          Artha Kreasindo.
        </p>

        <!-- CTA Actions -->
        <div class="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-2.5 sm:gap-4 mb-5">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center gap-2 bg-white text-[#7a2021] hover:bg-neutral-100 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all"
          >
            <svg class="w-4 h-4 fill-current text-emerald-600" viewBox="0 0 24 24">
              <path
                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
              />
            </svg>
            <span>Konsultasi WhatsApp</span>
          </a>
          <NuxtLink
            to="/kontak"
            class="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl border border-white/40 transition-all"
          >
            <span>Hubungi Sales</span>
          </NuxtLink>
        </div>

        <!-- Features Badges -->
        <div
          class="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-[10px] sm:text-xs font-semibold text-neutral-200"
        >
          <span>PENGIRIMAN INDONESIA</span>
          <span class="text-[#e5c158]">•</span>
          <span>APLIKATOR MITRA</span>
          <span class="text-[#e5c158]">•</span>
          <span>STANDAR PABRIKAN</span>
        </div>
      </div>
    </div>

    <!-- Main Footer Links & Info -->
    <div class="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="grid grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-8 lg:gap-8 pb-8 sm:pb-12 border-b border-neutral-800">
        <!-- Col 1: Brand Info (Full Width di Mobile / 5 Cols di Desktop) -->
        <div class="col-span-2 lg:col-span-5 space-y-3">
          <h3 class="text-lg sm:text-xl font-extrabold text-white tracking-tight">PT Multi Artha Kreasindo</h3>
          <p class="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
            Solusi profesional epoxy flooring dan coating pelapis permukaan untuk kebutuhan industri, komersial, dan
            fasilitas khusus.
          </p>
          <div class="inline-block border border-[#e5c158]/50 bg-[#e5c158]/10 px-2.5 py-1 rounded-md">
            <span class="text-[10px] sm:text-xs font-bold text-[#e5c158] tracking-wider uppercase">
              Industrial Certified Quality
            </span>
          </div>
        </div>

        <!-- Col 2: Layanan (Kolom Kiri di Mobile / 3 Cols di Desktop) -->
        <div class="col-span-1 lg:col-span-3">
          <h4
            class="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3 pl-2.5 border-l-2 border-[#c41215]"
          >
            Layanan
          </h4>
          <ul class="space-y-1.5 text-xs sm:text-sm">
            <li>
              <NuxtLink to="/layanan" class="text-neutral-400 hover:text-white transition-colors"
                >Epoxy Flooring</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/layanan" class="text-neutral-400 hover:text-white transition-colors"
                >Self Leveling</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/layanan" class="text-neutral-400 hover:text-white transition-colors"
                >Coating & Paint</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/layanan" class="text-neutral-400 hover:text-white transition-colors"
                >Industrial Floor</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/layanan" class="text-neutral-400 hover:text-white transition-colors"
                >Warehouse Floor</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/layanan" class="text-neutral-400 hover:text-white transition-colors"
                >Floor Repair</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Col 3: Hubungi Kami (Kolom Kanan di Mobile / 4 Cols di Desktop) -->
        <div class="col-span-1 lg:col-span-4">
          <h4
            class="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3 pl-2.5 border-l-2 border-[#c41215]"
          >
            Hubungi Kami
          </h4>
          <ul class="space-y-2 text-xs sm:text-sm text-neutral-400">
            <li class="flex items-center gap-2">
              <span class="text-emerald-400">💬</span>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener"
                class="hover:text-white transition-colors"
                >+62 812-3456-7890</a
              >
            </li>
            <li class="flex items-center gap-2">
              <span class="text-[#e5c158]">📞</span>
              <a href="tel:+62211234567" class="hover:text-white transition-colors">(021) 1234-567</a>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-[#c41215]">✉️</span>
              <a href="mailto:info@multiarthakreasindo.com" class="hover:text-white transition-colors truncate"
                >info@multiarthakreasindo.com</a
              >
            </li>
            <li class="flex items-start gap-2 pt-0.5">
              <span>📍</span>
              <span class="text-[11px] sm:text-xs leading-relaxed"
                >Kawasan Industri & Pergudangan, Jakarta, Indonesia</span
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom Bar -->
      <div
        class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-neutral-500 text-center sm:text-left"
      >
        <p>&copy; {{ currentYear }} PT Multi Artha Kreasindo. All Rights Reserved.</p>
        <div class="font-semibold tracking-wider text-neutral-400">
          <span>HEAVY INDUSTRIAL STANDARD</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
