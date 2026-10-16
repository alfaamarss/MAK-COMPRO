```vue
<template>
  <section class="relative flex min-h-[65vh] w-full items-center overflow-hidden bg-neutral-900 pb-20 pt-20">
    <!-- Background & Overlay -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
        alt="Dokumentasi lingkungan proyek industri"
        class="h-full w-full object-cover opacity-40 mix-blend-overlay"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-[#7a2021]/70"></div>
    </div>

    <!-- Main Container -->
    <div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav
        class="mb-6 flex items-center gap-2 text-[10px] font-medium text-neutral-300 sm:text-xs"
        aria-label="Breadcrumb"
      >
        <svg class="h-3.5 w-3.5 text-[#e5c158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>

        <NuxtLink to="/" class="transition-colors hover:text-white"> Beranda </NuxtLink>

        <span class="text-neutral-500">/</span>
        <span class="font-semibold text-[#e5c158]">Portofolio Proyek</span>
      </nav>

      <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <!-- Left Column -->
        <div class="lg:col-span-7">
          <!-- Badge -->
          <div class="mb-5 inline-flex items-center rounded-full bg-white/95 px-3 py-1 shadow-md backdrop-blur-sm">
            <span class="mr-2 h-1.5 w-1.5 rounded-full bg-[#c41215]"></span>
            <span class="text-[10px] font-bold tracking-wider text-neutral-800"> PROJECT PORTFOLIO </span>
          </div>

          <!-- Main Heading -->
          <h1 class="mb-5 font-extrabold leading-tight tracking-tight">
            <span class="block text-2xl uppercase tracking-wide text-neutral-200 sm:text-3xl"> PORTOFOLIO </span>

            <span class="my-1 block text-3xl uppercase text-[#e5c158] drop-shadow-sm sm:text-4xl lg:text-5xl">
              PROYEK KAMI
            </span>

            <span class="block text-xl font-semibold tracking-normal text-white sm:text-2xl lg:text-3xl">
              Bukti Karya, Dedikasi, dan Kualitas Pengerjaan
            </span>
          </h1>

          <!-- Description -->
          <p class="mb-8 max-w-xl text-sm font-normal leading-relaxed text-neutral-300 sm:text-base">
            Lihat dokumentasi proyek PT Multi Artha Kreasindo dalam berbagai kebutuhan flooring, coating, waterproofing,
            dan pelapisan permukaan. Jelajahi hasil pengerjaan berdasarkan area aplikasi maupun sektor industri.
          </p>

          <!-- Category Badges -->
          <div class="flex flex-wrap gap-2.5 sm:gap-3">
            <div
              class="flex items-center gap-2 rounded-md border border-neutral-500/40 bg-black/40 px-3 py-2 shadow-inner backdrop-blur-md"
            >
              <svg class="h-4 w-4 shrink-0 text-[#e5c158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01"
                />
              </svg>
              <span class="text-xs font-semibold tracking-wide text-neutral-200"> Berdasarkan Area </span>
            </div>

            <div
              class="flex items-center gap-2 rounded-md border border-neutral-500/40 bg-black/40 px-3 py-2 shadow-inner backdrop-blur-md"
            >
              <svg class="h-4 w-4 shrink-0 text-[#e5c158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7h-9m3 4H5m11 4H9m4 4H4" />
              </svg>
              <span class="text-xs font-semibold tracking-wide text-neutral-200"> Berdasarkan Market </span>
            </div>

            <div
              class="flex items-center gap-2 rounded-md border border-neutral-500/40 bg-black/40 px-3 py-2 shadow-inner backdrop-blur-md"
            >
              <svg class="h-4 w-4 shrink-0 text-[#e5c158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5h16v14H4zM8 9h8M8 13h5" />
              </svg>
              <span class="text-xs font-semibold tracking-wide text-neutral-200"> Galeri Dokumentasi </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
