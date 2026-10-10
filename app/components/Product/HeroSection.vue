<template>
  <!-- Diubah min-h-[65vh] dan pb-20 agar lebih panjang ke bawah menutupi area putih -->
  <section class="relative w-full min-h-[65vh] flex items-center bg-neutral-900 overflow-hidden pt-22 pb-22">

    <div class="absolute inset-0 z-0">
      <img
        src="/images/services/SportFlooring.jpg"
        alt="Background Pabrik"
        class="w-full h-full object-cover opacity-40 mix-blend-overlay"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-[#7a2021]/70"></div>
    </div>

    <!-- Container Utama -->
    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">

      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-[10px] sm:text-xs text-neutral-300 mb-6 font-medium">
        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <NuxtLink to="/" class="hover:text-white transition-colors">Beranda</NuxtLink>
        <span class="text-neutral-500">/</span>
        <span class="text-[#e5c158]">Produk</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        <!-- KOLOM KIRI: Teks & Fitur -->
        <div class="lg:col-span-7">
          <div class="inline-flex items-center bg-white rounded-full px-2.5 py-1 mb-4 shadow-md">
            <span class="w-1.5 h-1.5 rounded-full bg-[#c41215] mr-1.5"></span>
            <span class="text-[9px] sm:text-[10px] font-bold text-neutral-800 tracking-wider">PRODUCT CATALOG</span>
            <span class="mx-1.5 text-neutral-300">|</span>
            <span class="text-[9px] sm:text-[10px] font-bold text-[#d4af37] tracking-wider">SPEC-GRADE</span>
          </div>

          <h1 class="font-extrabold leading-[1.1] mb-4 tracking-tight">
            <span class="block text-3xl sm:text-4xl lg:text-4xl text-white whitespace-nowrap">
              PRODUK COATING UNTUK
            </span>
            <span class="block text-3xl sm:text-4xl lg:text-5xl text-[#e5c158] mt-1">
              KEBUTUHAN INDUSTRI
            </span>
          </h1>

          <p class="text-neutral-300 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
            Pilihan produk coating dan pelapis permukaan untuk mendukung kebutuhan flooring, perlindungan, dan finishing pada berbagai aplikasi.
          </p>

          <div class="flex flex-wrap gap-2 sm:gap-3">
            <div class="flex items-center gap-1.5 border border-neutral-500/50 rounded-md bg-black/30 px-2.5 py-1.5 backdrop-blur-sm">
              <svg class="w-3.5 h-3.5 text-[#e5c158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-[10px] sm:text-xs text-neutral-200 font-medium">Formulasi Industri B2B</span>
            </div>
            <div class="flex items-center gap-1.5 border border-neutral-500/50 rounded-md bg-black/30 px-2.5 py-1.5 backdrop-blur-sm">
              <svg class="w-3.5 h-3.5 text-[#e5c158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span class="text-[10px] sm:text-xs text-neutral-200 font-medium">Standar Mutu Teruji</span>
            </div>
            <div class="flex items-center gap-1.5 border border-neutral-500/50 rounded-md bg-black/30 px-2.5 py-1.5 backdrop-blur-sm">
              <svg class="w-3.5 h-3.5 text-[#e5c158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <span class="text-[10px] sm:text-xs text-neutral-200 font-medium">Batch QC Terverifikasi</span>
            </div>
          </div>
        </div>

        <!-- KOLOM KANAN -->
        <div class="lg:col-span-5 relative w-full mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <div class="relative z-10 w-[80%] max-w-[320px]">
            <img
              src="/images/produk/produk1.png"
              alt="Grup Produk MAK"
              class="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
