<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { projects } from "~/data/proyek";

const activeTab = ref("AREA");
const activeCategory = ref("Semua Proyek");
const sliderRef = ref<HTMLElement | null>(null);
let autoSlideInterval: any = null;

const areaFilters = ["Lantai Produksi", "Gudang & Logistik", "Bangunan Komersial", "Fasilitas Olahraga"];
const marketFilters = ["Manufaktur", "Oil & Chemical", "Konstruksi Baja", "Fasilitas Industri"];

const currentFilters = computed(() => {
  return activeTab.value === "AREA" ? areaFilters : marketFilters;
});

watch(activeTab, () => {
  activeCategory.value = "Semua Proyek";
});

const filteredProjects = computed(() => {
  let result = [];

  if (activeCategory.value === "Semua Proyek") {
    result = projects;
  } else {
    const keyword = activeCategory.value.toLowerCase();
    result = projects.filter((project) => {
      const searchString =
        `${project.tags.join(" ")} ${project.footerLeft || ""} ${project.footerRight || ""} ${project.title}`.toLowerCase();
      return searchString.includes(keyword);
    });
  }

  return result.map((project, index) => ({
    ...project,
    featured: index === 0,
  }));
});

// --- LOGIKA SLIDER MOBILE ---
const slideLeft = () => {
  if (sliderRef.value) {
    sliderRef.value.scrollBy({ left: -320, behavior: "smooth" });
    resetAutoSlide();
  }
};

const slideRight = () => {
  if (sliderRef.value) {
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.value;
    if (scrollLeft + clientWidth >= scrollWidth - 10) {
      sliderRef.value.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      sliderRef.value.scrollBy({ left: 320, behavior: "smooth" });
    }
    resetAutoSlide();
  }
};

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    if (window.innerWidth < 768) {
      slideRight();
    }
  }, 3500);
};

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
};

const resetAutoSlide = () => {
  stopAutoSlide();
  startAutoSlide();
};

onMounted(() => startAutoSlide());
onUnmounted(() => stopAutoSlide());

// ==================== LOGIKA MODAL LIGHTBOX ====================
const isModalOpen = ref(false);
const currentImageIndex = ref(0);

// Buka Modal dengan index dari item yang diklik
const openModal = (index: number) => {
  currentImageIndex.value = index;
  isModalOpen.value = true;
  document.body.style.overflow = "hidden"; // Kunci scroll halaman belakang
};

// Tutup Modal
const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = "auto"; // Buka kunci scroll
};

// Geser Kanan (Next) - membaca array filteredProjects
const nextImage = () => {
  if (currentImageIndex.value < filteredProjects.value.length - 1) {
    currentImageIndex.value++;
  } else {
    currentImageIndex.value = 0; // Looping kembali ke awal
  }
};

// Geser Kiri (Prev) - membaca array filteredProjects
const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  } else {
    currentImageIndex.value = filteredProjects.value.length - 1; // Looping ke gambar terakhir
  }
};
</script>

<template>
  <section class="bg-[#f9fafb] py-16 font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- TITLE -->
      <div class="mb-10 text-center sm:text-left">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
          PROYEK YANG TELAH <span class="text-[#c41215]">KAMI KERJAKAN</span>
        </h2>
        <p class="text-neutral-500 text-sm sm:text-base mt-3 max-w-2xl">
          Dokumentasi aktual hasil pengerjaan aplikasi flooring, coating, dan waterproofing di berbagai sektor industri.
        </p>
      </div>

      <!-- HEADER TABS (PILIHAN 2: Sleek Minimalist Underline) -->
      <div class="border-b border-gray-200 flex gap-8 md:gap-12 mb-8">
        <button
          @click="activeTab = 'AREA'"
          :class="[
            'pb-4 font-extrabold uppercase tracking-wider text-xs md:text-sm flex items-center gap-2 relative transition-all duration-300',
            activeTab === 'AREA' ? 'text-[#b31b1b]' : 'text-gray-400 hover:text-gray-700',
          ]"
        >
          <!-- Titik Indikator Merah Kecil -->
          <span
            :class="[
              'w-1.5 h-1.5 rounded-full transition-all duration-300',
              activeTab === 'AREA' ? 'bg-[#b31b1b] scale-125' : 'bg-transparent',
            ]"
          ></span>
          AREA
          <span class="text-[11px] font-normal normal-case text-gray-400 hidden sm:inline">(Lokasi & Fisik)</span>

          <!-- Garis Bawah Animasi Aktif -->
          <span
            v-if="activeTab === 'AREA'"
            class="absolute bottom-0 left-0 w-full h-[3px] bg-[#b31b1b] rounded-t-full transition-all"
          ></span>
        </button>

        <button
          @click="activeTab = 'MARKET'"
          :class="[
            'pb-4 font-extrabold uppercase tracking-wider text-xs md:text-sm flex items-center gap-2 relative transition-all duration-300',
            activeTab === 'MARKET' ? 'text-[#b31b1b]' : 'text-gray-400 hover:text-gray-700',
          ]"
        >
          <!-- Titik Indikator Merah Kecil -->
          <span
            :class="[
              'w-1.5 h-1.5 rounded-full transition-all duration-300',
              activeTab === 'MARKET' ? 'bg-[#b31b1b] scale-125' : 'bg-transparent',
            ]"
          ></span>
          MARKET
          <span class="text-[11px] font-normal normal-case text-gray-400 hidden sm:inline">(Sektor Industri)</span>

          <!-- Garis Bawah Animasi Aktif -->
          <span
            v-if="activeTab === 'MARKET'"
            class="absolute bottom-0 left-0 w-full h-[3px] bg-[#b31b1b] rounded-t-full transition-all"
          ></span>
        </button>
      </div>

      <!-- PILL FILTERS -->
      <div class="flex flex-wrap gap-2.5 mb-10">
        <button
          @click="activeCategory = 'Semua Proyek'"
          :class="[
            'px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all shadow-sm',
            activeCategory === 'Semua Proyek'
              ? 'bg-[#b31b1b] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
          ]"
        >
          Semua Proyek
        </button>
        <button
          v-for="filter in currentFilters"
          :key="filter"
          @click="activeCategory = filter"
          :class="[
            'px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all',
            activeCategory === filter
              ? 'bg-[#b31b1b] text-white shadow-sm'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
          ]"
        >
          {{ filter }}
        </button>
      </div>

      <!-- ==================== PROJECT GRID ==================== -->
      <div class="relative w-full group/slider">
        <div
          ref="sliderRef"
          @touchstart="stopAutoSlide"
          @touchend="startAutoSlide"
          @mouseenter="stopAutoSlide"
          @mouseleave="startAutoSlide"
          class="flex md:grid md:grid-cols-2 lg:grid-cols-3 md:grid-flow-dense gap-5 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
        >
          <div
            v-for="(item, index) in filteredProjects"
            :key="item.id"
            @click="openModal(index)"
            :class="[
              item.featured ? 'lg:col-span-2' : 'lg:col-span-1',
              'group cursor-pointer flex flex-col rounded-xl overflow-hidden bg-white border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300',
              'min-w-[85vw] sm:min-w-[60vw] md:min-w-0 shrink-0 md:shrink snap-center relative',
            ]"
          >
            <!-- Image Container -->
            <div :class="['relative w-full overflow-hidden', item.hasFooter ? 'h-60 sm:h-65' : 'h-80 lg:h-95']">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>

              <!-- Top Badges -->
              <div class="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                <div
                  class="bg-white/95 backdrop-blur-sm text-gray-900 text-[9px] sm:text-[10px] font-extrabold px-2.5 py-1 rounded flex items-center gap-1.5 uppercase tracking-wider shadow-sm"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> {{ item.status }}
                </div>
              </div>

              <!-- Text Content -->
              <div class="absolute bottom-4 left-4 right-4 z-10">
                <!-- ======= MASUKKIN LAGI KODE TAG INI DI SINI ======= -->
                <div class="flex flex-wrap gap-2 mb-2.5">
                  <span
                    v-for="tag in item.tags"
                    :key="tag"
                    class="bg-white/20 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider border border-white/20"
                  >
                    {{ tag }}
                  </span>
                </div>
                <!-- ==================================================== -->

                <h3
                  class="text-white font-bold text-lg sm:text-[22px] leading-snug mb-1.5 group-hover:text-red-200 transition-colors"
                >
                  {{ item.title }}
                </h3>
              </div>

              <!-- Text Content -->
              <div class="absolute bottom-4 left-4 right-4 z-10">
                <h3
                  class="text-white font-bold text-lg sm:text-[22px] leading-snug mb-1.5 group-hover:text-red-200 transition-colors"
                >
                  {{ item.title }}
                </h3>
              </div>
            </div>

            <!-- Bottom Footer -->
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== MODAL LIGHTBOX ==================== -->
  <Teleport to="body">
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8 transition-opacity"
    >
      <button
        @click="closeModal"
        class="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white z-50 transition-colors"
      >
        <svg class="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Container Gambar -->
      <div
        v-if="filteredProjects.length > 0"
        class="relative w-full max-w-5xl flex flex-col items-center justify-center"
      >
        <!-- Perbaikan Error TypeScript TS2532 dengan tanda tanya (?) -->
        <img
          :src="filteredProjects[currentImageIndex]?.image"
          :alt="filteredProjects[currentImageIndex]?.title"
          class="max-w-full max-h-[75vh] md:max-h-[85vh] object-contain rounded-md shadow-2xl transition-all"
        />

        <div class="mt-6 flex flex-col items-center gap-3">
          <h4 class="text-white font-bold text-lg md:text-xl text-center">
            {{ filteredProjects[currentImageIndex]?.title }}
          </h4>

          <div v-if="filteredProjects.length > 1" class="flex gap-2 flex-wrap justify-center">
            <button
              v-for="(_, index) in filteredProjects"
              :key="index"
              @click="currentImageIndex = index"
              :class="[
                'h-2.5 rounded-full transition-all duration-300',
                currentImageIndex === index ? 'bg-[#c41215] w-8' : 'bg-white/40 hover:bg-white/80 w-2.5',
              ]"
            ></button>
          </div>
        </div>

        <button
          v-if="filteredProjects.length > 1"
          @click.stop="prevImage"
          class="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#b31b1b] text-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all shadow-lg backdrop-blur-md"
        >
          <svg class="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button
          v-if="filteredProjects.length > 1"
          @click.stop="nextImage"
          class="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#b31b1b] text-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all shadow-lg backdrop-blur-md"
        >
          <svg class="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
