<script setup lang="ts">
// Daftar logo klien yang dibagi menjadi 2 kelompok untuk Baris Atas dan Baris Bawah
const row1Logos = [
  { id: 1, name: "Aqua", src: "/images/ourClient/Aqua.jpeg" },
  { id: 2, name: "Gelora Bung Karno", src: "/images/ourClient/gbk.jpeg" },
  { id: 3, name: "Lippo Group", src: "/images/ourClient/lippo.jpeg" },
  { id: 4, name: "Mayora", src: "/images/ourClient/mayora.jpeg" },
  { id: 8, name: "Mayora", src: "/images/ourClient/hyundai.jpeg" },
];

const row2Logos = [
  { id: 5, name: "Padel", src: "/images/ourClient/padel.jpeg" },
  { id: 6, name: "Sekar Laut", src: "/images/ourClient/SekarLaut.jpeg" },
  { id: 7, name: "Servo", src: "/images/ourClient/servo.jpeg" },
  { id: 9, name: "Servo", src: "/images/ourClient/puriMedika.jpeg" },
];
</script>

<template>
  <section class="bg-white py-10 font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- ==================== SECTION TITLE (RATA TENGAH) ==================== -->
      <div class="mb-12 text-center flex flex-col items-center">
        <div class="flex items-center justify-center gap-3.5 mb-3">
          <div class="flex items-center">
            <span class="w-2.5 h-2.5 rounded-full bg-[#c41215]"></span>
            <span class="w-16 h-[3px] bg-linear-to-r from-[#c41215] to-transparent"></span>
          </div>
          <span class="text-[#c41215] text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase">
            Kepercayaan Industri
          </span>
          <div class="flex items-center scale-x-[-1]">
            <span class="w-2.5 h-2.5 rounded-full bg-[#c41215]"></span>
            <span class="w-16 h-[3px] bg-linear-to-r from-[#c41215] to-transparent"></span>
          </div>
        </div>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
          MITRA & KLIEN <span class="text-[#c41215]">TERPERCAYA KAMI</span>
        </h2>

        <p class="text-neutral-500 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
          Dipercaya oleh berbagai perusahaan multinasional, pabrik manufaktur, rumah sakit, hingga fasilitas publik di
          Indonesia.
        </p>
      </div>

      <!-- ==================== DUAL ROW CLIENT LOGO SLIDER ==================== -->
      <div
        class="relative w-full overflow-hidden bg-white border border-gray-200/80 rounded-2xl py-10 md:py-12 shadow-sm flex flex-col gap-8 md:gap-10"
      >
        <!-- Efek Bayangan Transparan di Kiri & Kanan -->
        <div
          class="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"
        ></div>
        <div
          class="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"
        ></div>

        <!-- BARIS 1: BERGERAK KE KIRI -->
        <div class="flex items-center gap-10 md:gap-16 w-max animate-ticker-left">
          <template v-for="i in 4" :key="'row1-' + i">
            <div
              v-for="logo in row1Logos"
              :key="logo.id + '-r1-' + i"
              class="h-24 sm:h-32 md:h-36 w-48 sm:w-64 md:w-72 bg-white border border-gray-200 rounded-2xl flex items-center justify-center p-4 sm:p-6 shadow-sm hover:scale-105 transition-transform duration-300"
            >
              <img :src="logo.src" :alt="logo.name" class="max-h-full max-w-full object-contain" />
            </div>
          </template>
        </div>

        <!-- BARIS 2: BERGERAK KE KANAN -->
        <div class="flex items-center gap-10 md:gap-16 w-max animate-ticker-right">
          <template v-for="i in 4" :key="'row2-' + i">
            <div
              v-for="logo in row2Logos"
              :key="logo.id + '-r2-' + i"
              class="h-24 sm:h-32 md:h-36 w-48 sm:w-64 md:w-72 bg-white border border-gray-200 rounded-2xl flex items-center justify-center p-4 sm:p-6 shadow-sm hover:scale-105 transition-transform duration-300"
            >
              <img :src="logo.src" :alt="logo.name" class="max-h-full max-w-full object-contain" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animasi Baris 1: Bergerak ke Kiri */
@keyframes tickerLeft {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

/* Animasi Baris 2: Bergerak ke Kanan (Mulai dari -50% menuju 0) */
@keyframes tickerRight {
  0% {
    transform: translate3d(-50%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

.animate-ticker-left {
  animation: tickerLeft 30s linear infinite;
}

.animate-ticker-right {
  animation: tickerRight 30s linear infinite;
}

/*
  SOLUSI: Gunakan @media (hover: hover)
  Agar animasi berhenti HANYA jika kursor mouse (di laptop/PC) diarahkan.
  Di HP (layar sentuh), ditekan seperti apa pun slider tidak akan macet/berhenti.
*/
@media (hover: hover) and (pointer: fine) {
  .animate-ticker-left:hover,
  .animate-ticker-right:hover {
    animation-play-state: paused;
  }
}
</style>
