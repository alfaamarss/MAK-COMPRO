<template>
  <div class="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-gray-800">
    <div
      class="max-w-7xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden"
    >
      <!-- Top Navigation / Header Info -->
      <div
        class="px-6 py-4 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between text-xs md:text-sm text-gray-500 gap-2"
      >
        <div class="flex items-center space-x-2">
          <span>Home</span>
          <span>/</span>
          <span>Produk</span>
          <span>/</span>
          <span>Epoxy Floor Coating</span>
          <span>/</span>
          <span class="text-red-700 font-semibold"
            >Multi Artha Epoxy Floor Coating</span
          >
        </div>
        <div
          class="flex items-center space-x-2 font-bold text-yellow-600 tracking-wide text-xs"
        >
          <span class="inline-block w-2 h-2 rounded-full bg-yellow-500"></span>
          <span>BATCH PRODUKSI TERSEDIA • SERTIFIKASI MUTU RESMI</span>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Left Column: Gallery Section -->
        <div class="lg:col-span-5 flex flex-col gap-4">
          <!-- Main Image Container -->
          <div
            class="relative bg-gray-100 rounded-lg p-6 flex items-center justify-center min-h-[320px]"
          >
            <!-- Badges Top Left -->
            <div class="absolute top-4 left-4 flex flex-col gap-1 items-start">
              <span
                class="bg-red-800 text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider rounded-sm"
              >
                2K Coating System
              </span>
              <span
                class="bg-white text-gray-800 text-[10px] font-bold px-2 py-0.5 shadow-sm rounded-sm"
              >
                NETTO: 20 KG SET
              </span>
            </div>

            <!-- Main Product Image -->
            <img
              :src="selectedImage"
              alt="Multi Artha Epoxy Floor Coating"
              class="max-h-64 object-contain"
            />

            <!-- Badge Bottom Right -->
            <div
              class="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 text-[11px] font-semibold px-2.5 py-1 rounded shadow-sm flex items-center gap-1.5"
            >
              <svg
                class="w-3.5 h-3.5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              QC PASS CERTIFIED
            </div>
          </div>

          <!-- Thumbnails -->
          <div class="grid grid-cols-4 gap-3">
            <button
              v-for="(img, index) in thumbnails"
              :key="index"
              @click="selectedImage = img"
              :class="[
                'border-2 rounded-lg overflow-hidden h-20 bg-gray-100 flex items-center justify-center p-1 transition-all',
                selectedImage === img
                  ? 'border-red-800'
                  : 'border-transparent hover:border-gray-300',
              ]"
            >
              <img
                :src="img"
                alt="Thumbnail"
                class="max-h-full max-w-full object-cover"
              />
            </button>
          </div>

          <!-- Info Banner Bottom Left -->
          <div
            class="bg-amber-50 border border-amber-100/60 rounded-lg p-3.5 flex items-center gap-3"
          >
            <div class="p-2 bg-amber-100/80 rounded text-amber-800 shrink-0">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-xs font-bold text-gray-900">
                Formula Standar Heavy-Duty 2-Komponen
              </h4>
              <p class="text-xs text-gray-500 mt-0.5">
                Teruji ketahanan tekan dan abrasi di laboratorium manufaktur.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column: Product Details -->
        <div class="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <!-- Product Badges Header -->
            <div class="flex flex-wrap items-center gap-2">
              <span
                class="bg-red-100 text-red-800 text-[11px] font-bold px-2.5 py-1 rounded flex items-center gap-1.5 uppercase"
              >
                <svg
                  class="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1a1 1 0 000 2h1a1 1 0 100-2H7zm0 4a1 1 0 100 2h1a1 1 0 100-2H7zm0 4a1 1 0 100 2h1a1 1 0 100-2H7zm5-8a1 1 0 100 2h1a1 1 0 100-2h-1zm0 4a1 1 0 100 2h1a1 1 0 100-2h-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                PRODUK RESMI PABRIK | 2K COATING SYSTEM
              </span>
              <span
                class="bg-gray-200 text-gray-700 text-[11px] font-bold px-2.5 py-1 rounded uppercase"
              >
                GRADE A INDUSTRIAL
              </span>
            </div>

            <!-- Title & Subtitle -->
            <div>
              <h1
                class="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight"
              >
                Multi Artha Epoxy Floor Coating
              </h1>
              <p class="text-gray-500 font-medium text-base mt-1">
                2K High Performance Heavy-Duty Epoxy Surface Protection
              </p>
            </div>

            <!-- Description Box -->
            <div
              class="bg-stone-100/70 p-4 rounded-lg text-sm text-gray-600 leading-relaxed"
            >
              Lapisan epoxy dua komponen (Resin & Polyamide Hardener) yang
              dirancang khusus untuk proteksi permukaan lantai beton struktural.
              Memberikan daya rekat tinggi, ketahanan abrasi mekanis optimal,
              proteksi terhadap tumpahan kimia ringan, serta menghasilkan
              permukaan higienis tanpa celah yang mudah dirawat.
            </div>

            <!-- Technical Parameter Table -->
            <div class="space-y-3 pt-2">
              <div
                class="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-wider"
              >
                <svg
                  class="w-4 h-4 text-red-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
                RINGKASAN PARAMETER TEKNIS MATERIAL
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                <div class="flex bg-gray-100/80 rounded overflow-hidden">
                  <span class="w-1/2 p-2.5 text-gray-600 font-medium"
                    >Kategori Produk</span
                  >
                  <span class="w-1/2 p-2.5 font-bold text-gray-900"
                    >Epoxy Floor Coating</span
                  >
                </div>
                <div class="flex bg-gray-100/80 rounded overflow-hidden">
                  <span class="w-1/2 p-2.5 text-gray-600 font-medium"
                    >Tipe Kimiawi</span
                  >
                  <span class="w-1/2 p-2.5 font-bold text-gray-900"
                    >2K (Bisphenol Epoxy + Amine)</span
                  >
                </div>
                <div class="flex bg-gray-100/80 rounded overflow-hidden">
                  <span class="w-1/2 p-2.5 text-gray-600 font-medium"
                    >Rekomendasi Area</span
                  >
                  <span class="w-1/2 p-2.5 font-bold text-gray-900"
                    >Warehouse, Factory & Hub</span
                  >
                </div>
                <div class="flex bg-gray-100/80 rounded overflow-hidden">
                  <span class="w-1/2 p-2.5 text-gray-600 font-medium"
                    >Tampilan Akhir</span
                  >
                  <span class="w-1/2 p-2.5 font-bold text-gray-900"
                    >High Gloss Reflektif</span
                  >
                </div>
                <div class="flex bg-gray-100/80 rounded overflow-hidden">
                  <span class="w-1/2 p-2.5 text-gray-600 font-medium"
                    >Pilihan Kemasan</span
                  >
                  <span class="w-1/2 p-2.5 font-bold text-gray-900"
                    >Set 20 kg & Set 5 kg</span
                  >
                </div>
                <div class="flex bg-gray-100/80 rounded overflow-hidden">
                  <span class="w-1/2 p-2.5 text-gray-600 font-medium"
                    >Ketebalan Kering (DFT)</span
                  >
                  <span class="w-1/2 p-2.5 font-bold text-gray-900"
                    >300 – 1.000 µm</span
                  >
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                class="flex-1 bg-red-800 hover:bg-red-900 text-white font-bold text-sm py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1 1 0 01-1-1V4a1 1 0 011-1h8a1 1 0 011 1v4zm-7 4H7a1 1 0 01-1-1V7"
                  />
                </svg>
                <span>Konsultasi Produk & Estimasi Kebutuhan</span>
                <svg
                  class="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>

              <button
                class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-sm py-3.5 px-5 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <svg
                  class="w-4 h-4 text-red-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                  />
                </svg>
                Unduh TDS (PDF)
              </button>
            </div>

            <!-- Footer Note -->
            <div class="flex items-start gap-2 text-xs text-gray-500 pt-2">
              <svg
                class="w-4 h-4 text-red-800 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Konsultasikan perhitungan volume m² proyek, kelembaban substrat
                beton (RH &lt; 5%), dan profil mechanical grinding Anda langsung
                dengan Technical Sales Engineer kami.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Ganti URL gambar di bawah ini dengan asset asli Anda
const thumbnails = ref([
  "https://placehold.co/400x400/e2e8f0/1e293b?text=Kaleng+Epoxy",
  "https://placehold.co/400x400/e2e8f0/1e293b?text=Variasi+Kemasan",
  "https://placehold.co/400x400/e2e8f0/1e293b?text=Blank",
  "https://placehold.co/400x400/e2e8f0/1e293b?text=Lantai+Gudang",
]);

const selectedImage = ref(thumbnails.value[0]);
</script>
