<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { projects } from "~/data/portofolio";

const activeTab = ref("AREA");
const activeCategory = ref("Semua Proyek");
const sliderRef = ref<HTMLElement | null>(null);
let autoSlideInterval: any = null;

const areaFilters = [
  "Lantai Produksi",
  "Gudang & Logistik",
  "Bangunan Komersial",
  "Fasilitas Olahraga",
  "Dak Beton / Atap",
];
const marketFilters = ["Manufaktur", "Oil & Chemical", "Konstruksi Baja", "Fasilitas Industri"];

const currentFilters = computed(() => {
  return activeTab.value === "AREA" ? areaFilters : marketFilters;
});

watch(activeTab, () => {
  activeCategory.value = "Semua Proyek";
});

const filteredProjects = computed(() => {
  if (activeCategory.value === "Semua Proyek") {
    return projects;
  }
  const keyword = activeCategory.value.toLowerCase();
  return projects.filter((project) => {
    const searchString =
      `${project.tags.join(" ")} ${project.footerLeft || ""} ${project.footerRight || ""} ${project.title}`.toLowerCase();
    return searchString.includes(keyword);
  });
});


// --- LOGIKA SLIDER & AUTOPLAY ---
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

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>

<template>
  <section class="bg-[#f9fafb] py-16 font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- ==================== SECTION TITLE / JUDUL UTAMA ==================== -->
      <div class="mb-10 text-center sm:text-left">
        <div class="flex items-center justify-center sm:justify-start gap-3.5 mb-3"</div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
          PROYEK YANG TELAH <span class="text-[#c41215]">KAMI KERJAKAN</span>
        </h2>
        <p class="text-neutral-500 text-sm sm:text-base mt-3 max-w-2xl">
          Dokumentasi aktual hasil pengerjaan aplikasi flooring, coating, dan waterproofing di berbagai sektor industri
          dan komersial.
        </p>
      </div>

      <!-- ==================== HEADER TABS ==================== -->
      <div class="border-b border-gray-200 flex flex-wrap gap-6 sm:gap-10 mb-6">
        <button
          @click="activeTab = 'AREA'"
          :class="[
            'pb-3 font-bold uppercase tracking-wide text-sm flex items-center gap-1.5 transition-colors',
            activeTab === 'AREA'
              ? 'border-b-2 border-[#b31b1b] text-[#b31b1b] -mb-[1px]'
              : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700',
          ]"
        >
          AREA
          <span class="text-xs font-normal capitalize" :class="activeTab === 'AREA' ? 'text-gray-500' : 'text-gray-400'"
            >(Lokasi & Fisik)</span
          >
        </button>
        <button
          @click="activeTab = 'MARKET'"
          :class="[
            'pb-3 font-bold uppercase tracking-wide text-sm flex items-center gap-1.5 transition-colors',
            activeTab === 'MARKET'
              ? 'border-b-2 border-[#b31b1b] text-[#b31b1b] -mb-[1px]'
              : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700',
          ]"
        >
          MARKET
          <span
            class="text-xs font-normal capitalize"
            :class="activeTab === 'MARKET' ? 'text-gray-500' : 'text-gray-400'"
            >(Sektor Industri)</span
          >
        </button>
      </div>

      <!-- ==================== PILL FILTERS ==================== -->
      <div class="flex flex-wrap gap-2.5 mb-10">
        <button
          @click="activeCategory = 'Semua Proyek'"
          :class="[
            'px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold flex items-center gap-2 transition-all shadow-sm',
            activeCategory === 'Semua Proyek'
              ? 'bg-[#b31b1b] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
          ]"
        >
          <span v-if="activeCategory === 'Semua Proyek'" class="w-1.5 h-1.5 bg-white rounded-full"></span> Semua Proyek
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

      <!-- ==================== WRAPPER SLIDER & TOMBOL ==================== -->
      <div class="relative w-full group/slider">
        <!-- PROJECT GRID / MOBILE SLIDER -->
        <div
          ref="sliderRef"
          @touchstart="stopAutoSlide"
          @touchend="startAutoSlide"
          @mouseenter="stopAutoSlide"
          @mouseleave="startAutoSlide"
          class="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
        >
          <div
            v-for="item in filteredProjects"
            :key="item.id"
            :class="[
              item.featured ? 'lg:col-span-2' : 'lg:col-span-1',
              'group cursor-pointer flex flex-col rounded-xl overflow-hidden bg-white border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300',
              'min-w-[85vw] sm:min-w-[60vw] md:min-w-0 shrink-0 md:shrink-1 snap-center relative',
            ]"
          >
            <!-- Image Container -->
            <div
              :class="[
                'relative w-full overflow-hidden',
                item.hasFooter ? 'h-[240px] sm:h-[260px]' : 'h-[320px] lg:h-[380px]',
              ]"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              <!-- Top Badges -->
              <div class="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                <div
                  class="bg-white/95 backdrop-blur-sm text-gray-900 text-[9px] sm:text-[10px] font-extrabold px-2.5 py-1 rounded flex items-center gap-1.5 uppercase tracking-wider shadow-sm"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> {{ item.status }}
                </div>
                <div
                  v-if="item.isFeaturedBadge"
                  class="bg-[#b31b1b] text-white text-[9px] sm:text-[10px] font-extrabold px-2.5 py-1 rounded uppercase tracking-wider shadow-sm"
                >
                  FEATURED
                </div>
              </div>

              <!-- Text Content -->
              <div class="absolute bottom-4 left-4 right-4 z-10">
                <div class="flex flex-wrap gap-2 mb-2.5">
                  <span
                    v-for="tag in item.tags"
                    :key="tag"
                    class="bg-white/20 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider border border-white/20"
                  >
                    {{ tag }}
                  </span>
                </div>
                <h3
                  class="text-white font-bold text-lg sm:text-[22px] leading-snug mb-1.5 group-hover:text-red-200 transition-colors"
                >
                  {{ item.title }}
                </h3>
                <p v-if="item.desc" class="text-gray-300 text-xs sm:text-sm line-clamp-2 max-w-2xl font-medium">
                  {{ item.desc }}
                </p>
              </div>
            </div>

            <!-- Bottom Footer -->
            <div
              v-if="item.hasFooter"
              class="px-4 py-3.5 flex justify-between items-center text-[10px] font-bold text-gray-500 bg-white border-t border-gray-100"
            >
              <span class="uppercase tracking-widest truncate mr-3">{{ item.footerLeft }}</span>
              <span class="text-gray-800 text-right shrink-0 tracking-wide">{{ item.footerRight }}</span>
            </div>
          </div>
        </div>

        <!-- ==================== TOMBOL NAVIGASI OVERLAY (Hanya di Mobile, di dalam Slider) ==================== -->
        <button
          @click="slideLeft"
          class="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 -ml-2 rounded-full bg-white/85 backdrop-blur text-gray-700 shadow-[0_4px_15px_rgba(0,0,0,0.2)] flex items-center justify-center hover:text-[#b31b1b] active:scale-95 transition-all"
        >
          <svg class="w-5 h-5 pr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button
          @click="slideRight"
          class="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 -mr-2 rounded-full bg-white/85 backdrop-blur text-gray-700 shadow-[0_4px_15px_rgba(0,0,0,0.2)] flex items-center justify-center hover:text-[#b31b1b] active:scale-95 transition-all"
        >
          <svg class="w-5 h-5 pl-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7-7"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
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
