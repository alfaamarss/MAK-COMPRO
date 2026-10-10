<template>
  <section class="relative w-full min-h-[65vh] flex items-center bg-neutral-900 overflow-hidden pt-20 pb-20">
    <!-- Background & Overlay -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
        alt="Background Pabrik"
        class="w-full h-full object-cover opacity-40 mix-blend-overlay"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-[#7a2021]/70"></div>
    </div>

    <!-- Container Utama -->
    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-[10px] sm:text-xs text-neutral-300 mb-6 font-medium">
        <svg class="w-3.5 h-3.5 text-[#e5c158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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
            <span class="text-[10px] font-bold text-neutral-800 tracking-wider">LAYANAN PROFESIONAL</span>
          </div>

          <!-- Judul Utama -->
          <h1 class="font-extrabold tracking-tight mb-5 leading-tight">
            <span class="block text-2xl sm:text-3xl text-neutral-200 uppercase tracking-wide">
              SOLUSI PENGERJAAN
            </span>
            <span class="block text-3xl sm:text-4xl lg:text-5xl text-[#e5c158] uppercase my-1 drop-shadow-sm">
              INDUSTRIAL FLOORING &amp; COATING
            </span>
            <span class="block text-xl sm:text-2xl lg:text-3xl text-white font-semibold tracking-normal">
              PROFESIONAL &amp; TERPERCAYA
            </span>
          </h1>

          <!-- Deskripsi -->
          <p class="text-neutral-300 text-sm sm:text-base max-w-xl mb-8 leading-relaxed font-normal">
            Kami menghadirkan aplikasi pelapisan lantai berstandar industri dengan eksekusi teknis presisi. Mulai dari persiapan substrat mekanis, penambalan retak, hingga finishing kilap cermin tanpa pori bergaransi resmi.
          </p>

          <!-- 3 Fitur Badges -->
          <div class="flex flex-wrap gap-2.5 sm:gap-3">
            <div class="flex items-center gap-2 border border-neutral-500/40 rounded-md bg-black/40 px-3 py-2 backdrop-blur-md shadow-inner">
              <svg class="w-4 h-4 text-[#e5c158] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-xs text-neutral-200 font-semibold tracking-wide">Aplikator Ahli Berpengalaman</span>
            </div>

            <div class="flex items-center gap-2 border border-neutral-500/40 rounded-md bg-black/40 px-3 py-2 backdrop-blur-md shadow-inner">
              <svg class="w-4 h-4 text-[#e5c158] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span class="text-xs text-neutral-200 font-semibold tracking-wide">Garansi Daya Rekat Penuh</span>
            </div>

            <div class="flex items-center gap-2 border border-neutral-500/40 rounded-md bg-black/40 px-3 py-2 backdrop-blur-md shadow-inner">
              <svg class="w-4 h-4 text-[#e5c158] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <span class="text-xs text-neutral-200 font-semibold tracking-wide">Survey &amp; Moisture Test Gratis</span>
            </div>
          </div>
        </div>

        <!-- KOLOM KANAN: Gambar utama digeser sedikit ke kiri -->
        <div class="lg:col-span-5 relative w-full max-w-md lg:ml-auto mt-8 lg:mt-0 pb-6 flex justify-end">

          <!-- Gambar Utama (Digeser ke kiri dengan -translate-x-4 atau -translate-x-6) -->
          <div class="relative z-10 w-[75%] rounded-2xl overflow-hidden border border-neutral-700/60 shadow-2xl bg-neutral-900 -translate-x-6 sm:-translate-x-8">
            <img
              src="/images/Services/EpoxyFlooring.jpg"
              alt="Layanan Epoxy Flooring"
              class="w-full h-[260px] sm:h-[300px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <!-- Gambar Kecil (Floating di Kanan Bawah) -->
          <div class="absolute right-2 sm:right-0 -bottom-6 w-[48%] rounded-xl overflow-hidden border-2 border-neutral-800 shadow-2xl z-20 bg-neutral-900">
            <img
              src="/images/Services/Hightemp.jpeg"
              alt="High Temp Coating"
              class="w-full h-[140px] sm:h-[160px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Kosongkan atau isi script di sini jika dibutuhkan nantinya
</script>

<style scoped>
/* Pastikan HANYA ada CSS di dalam tag style ini, jangan masukkan tag HTML */
</style>
