<template>
  <section class="relative w-full min-h-[65vh] flex items-center bg-neutral-900 overflow-hidden pt-22 pb-22">
    <div class="absolute inset-0 z-0">
      <img
        src="/images/produk/produk1.png"
        alt="Background Kontak"
        class="w-full h-full object-cover opacity-40 mix-blend-overlay"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-[#7a2021]/70"></div>
    </div>

    <!-- Container Utama -->
    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-[10px] sm:text-xs text-neutral-300 mb-6 font-medium">
        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <NuxtLink to="/" class="hover:text-white transition-colors">Beranda</NuxtLink>
        <span class="text-neutral-500">/</span>
        <span class="text-[#e5c158]">Kontak Kami</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- KOLOM KIRI: Teks & Fitur -->
        <div class="lg:col-span-7">
          <div class="inline-flex items-center bg-white rounded-full px-2.5 py-1 mb-4 shadow-md">
            <span class="w-1.5 h-1.5 rounded-full bg-[#c41215] mr-1.5"></span>
            <span class="text-[9px] sm:text-[10px] font-bold text-neutral-800 tracking-wider">CUSTOMER SERVICE</span>
            <span class="mx-1.5 text-neutral-300">|</span>
            <span class="text-[9px] sm:text-[10px] font-bold text-[#d4af37] tracking-wider">HELPDESK</span>
          </div>

          <h1 class="font-extrabold leading-[1.1] mb-4 tracking-tight">
            <span class="block text-3xl sm:text-4xl lg:text-4xl text-white whitespace-nowrap">
              HUBUNGI KAMI UNTUK
            </span>
            <span class="block text-3xl sm:text-4xl lg:text-5xl text-[#e5c158] mt-1"> SOLUSI TERBAIK ANDA </span>
          </h1>

          <p class="text-neutral-300 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
            Punya pertanyaan mengenai produk atau butuh konsultasi proyek? Tim ahli kami siap membantu memberikan solusi
            teknis dan layanan terbaik untuk kebutuhan industri Anda.
          </p>

          <div class="flex flex-wrap gap-2 sm:gap-3">
            <div
              class="flex items-center gap-1.5 border border-neutral-500/50 rounded-md bg-black/30 px-2.5 py-1.5 backdrop-blur-sm"
            >
              <svg class="w-3.5 h-3.5 text-[#e5c158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span class="text-[10px] sm:text-xs text-neutral-200 font-medium">Layanan Cepat Tanggap</span>
            </div>
            <div
              class="flex items-center gap-1.5 border border-neutral-500/50 rounded-md bg-black/30 px-2.5 py-1.5 backdrop-blur-sm"
            >
              <svg class="w-3.5 h-3.5 text-[#e5c158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span class="text-[10px] sm:text-xs text-neutral-200 font-medium">Konsultasi Ahli</span>
            </div>
            <div
              class="flex items-center gap-1.5 border border-neutral-500/50 rounded-md bg-black/30 px-2.5 py-1.5 backdrop-blur-sm"
            >
              <svg class="w-3.5 h-3.5 text-[#e5c158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <span class="text-[10px] sm:text-xs text-neutral-200 font-medium">Dukungan Teknis</span>
            </div>
          </div>
        </div>

        <!-- KOLOM KANAN -->
        <div class="lg:col-span-5 relative w-full mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <div class="relative z-10 w-[80%] max-w-[320px]">
            <img
              src="/images/PT. MULTI KREASINDO.png"
              alt="Layanan Pelanggan"
              class="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
