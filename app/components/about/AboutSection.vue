<template>
  <section class="bg-white py-24 px-6 lg:px-12 font-sans overflow-hidden">
    <div class="mx-auto max-w-7xl">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        <!-- Kolom Kiri: Teks & Informasi (7 Kolom) -->
        <div class="lg:col-span-7 flex flex-col items-start">
          <!-- Badge Judul -->
          <div class="flex items-center gap-3 mb-5">
            <span class="w-8 h-[2px] bg-[#991b1b]"></span>
            <span
              class="text-[#991b1b] text-xl font-bold tracking-widest uppercase"
            >
              TENTANG PERUSAHAAN
            </span>
          </div>

          <!-- Judul Utama -->
          <h2
            class="text-3xl md:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight leading-tight"
          >
            Solusi Pelapisan Permukaan untuk Berbagai Kebutuhan
          </h2>

          <!-- Paragraf Deskripsi -->
          <p class="text-neutral-700 text-base md:text-lg leading-relaxed mb-4">
            <strong class="text-neutral-900 font-semibold"
              >PT Multi Artha Kreasindo</strong
            >
            menyediakan layanan flooring, waterproofing, protective coating, dan
            pengecatan untuk berbagai kebutuhan bangunan dan industri.
          </p>

          <p class="text-neutral-500 text-sm md:text-base leading-relaxed mb-8">
            Kami menangani berbagai kebutuhan pelapisan dan finishing permukaan,
            mulai dari epoxy flooring dan road line marking hingga sport
            flooring, decorative flooring, dan floor hardener. Setiap layanan
            disesuaikan dengan jenis pekerjaan serta kebutuhan area yang
            ditangani.
          </p>

          <!-- Divider / Garis Batas Bawah -->
          <div class="w-full h-[1px] bg-neutral-200 mb-8"></div>

          <!-- Informasi Cakupan & Metode Kerja (Grid 2 Kolom di bawah) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            <div class="border-l-4 border-[#991b1b] pl-4">
              <h4
                class="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5"
              >
                Cakupan Penanganan
              </h4>
              <p class="text-neutral-900 font-bold text-base mb-1">
                Industri & Komersial
              </p>
              <span class="text-neutral-500 text-sm">
                Pabrik, Gudang, Fasilitas Publik
              </span>
            </div>

            <div class="border-l-4 border-[#b45309] pl-4">
              <h4
                class="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5"
              >
                Metode Kerja
              </h4>
              <p class="text-neutral-900 font-bold text-base mb-1">
                Terstandarisasi
              </p>
              <span class="text-neutral-500 text-sm">
                Sesuai Karakteristik Substrat
              </span>
            </div>
          </div>
        </div>

        <!-- Kolom Kanan: Area Gambar (5 Kolom) -->
        <div
          class="lg:col-span-5 relative flex justify-center lg:justify-end mt-5 lg:mt-0"
        >
          <!-- Hiasan: Efek Tetesan / Cipratan Cat Abstrak di Background (Glow & Blob) -->
          <div
            class="absolute -top-6 -left-6 w-40 h-40 bg-red-600/10 rounded-full blur-2xl pointer-events-none"
          ></div>
          <div
            class="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"
          ></div>

          <!-- Frame Gambar Utama -->
          <div
            class="relative w-full max-w-[250px] lg:max-w-full aspect-square lg:aspect-square rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-50 flex items-center justify-center p-8 group"
          >
            <!-- Menggunakan object-contain agar ukuran gambar pas, tidak terpotong, dan tidak terlalu zoom -->
            <img
              src="/images/LogoMAK.png"
              alt="Profil PT Multi Artha Kreasindo"
              class="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <!-- Aksen Titik-titik (Dot Pattern) di belakang gambar sebagai dekorasi -->
          <div
            class="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(#d4d4d8_2px,transparent_2px)] [background-size:12px_12px] -z-10 rounded-full opacity-60"
          ></div>

          <!-- Hiasan: Badge Kecil Aksen "Paint & Coating Specialist" -->
          <div
            class="absolute -bottom-4 left-6 bg-white px-4 py-2 rounded-lg shadow-lg border border-neutral-100 flex items-center gap-2"
          >
            <span
              class="w-3 h-3 rounded-full bg-[#991b1b] animate-pulse"
            ></span>
            <span class="text-xs font-bold text-neutral-800 tracking-wide"
              >Industrial Paint Specialist</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
