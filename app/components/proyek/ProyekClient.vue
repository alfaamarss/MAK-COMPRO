<script setup lang="ts"></script>

<template>
  <section class="bg-[#fffff] py-10 font-sans">
    <!-- ==================== SECTION TITLE (RATA TENGAH) ==================== -->
    <div class="mb-12 text-center flex flex-col items-center">
      <div class="flex items-center justify-center gap-3.5 mb-3">
        <div class="flex items-center">
          <span class="w-2.5 h-2.5 rounded-full bg-[#c41215]"></span>
          <span class="w-16 h-[3px] bg-gradient-to-r from-[#c41215] to-transparent"></span>
        </div>
        <span class="text-[#c41215] text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase">
          Kepercayaan Industri
        </span>
        <div class="flex items-center scale-x-[-1]">
          <span class="w-2.5 h-2.5 rounded-full bg-[#c41215]"></span>
          <span class="w-16 h-[3px] bg-gradient-to-r from-[#c41215] to-transparent"></span>
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
    <!-- ==================== CLIENT CARD CONTAINER ==================== -->
    <div class="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-10 shadow-sm">
      <div class="w-full flex items-center justify-center overflow-hidden py-4">
        <img
          src="/images/ourClient/client.png"
          alt="Daftar Klien PT Multi Artha Kreasindo"
          class="w-full max-w-5xl h-auto object-contain"
        />
      </div>
    </div>
  </section>
</template>
