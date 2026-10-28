<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from "vue";
import { projects } from "~/data/proyek";
import { useSeoMeta, useHead } from "#imports";

// ==================== SEO Halaman Portofolio ====================
useSeoMeta({
  title: "Portofolio Proyek Epoxy & Coating | PT Multi Artha Kreasindo",
  description:
    "Dokumentasi aktual hasil pengerjaan aplikasi epoxy flooring, coating, dan waterproofing di berbagai sektor industri seperti manufaktur, oil & chemical, dan fasilitas komersial.",
});

useHead({
  meta: [
    {
      name: "keywords",
      content: "portofolio epoxy lantai, proyek coating industri, hasil kerja epoxy, kontraktor lantai pabrik",
    },
  ],
});

const activeTab = ref("AREA");
const activeCategory = ref("Semua Proyek");
const sliderRef = ref<HTMLElement | null>(null);
let autoSlideInterval: any = null;

const areaFilters = ["Lantai Produksi", "Gudang & Logistik", "Bangunan Komersial", "Fasilitas Olahraga"];
const marketFilters = ["Manufaktur", "Oil & Chemical", "Konstruksi Baja", "Fasilitas Industri"];

const currentFilters = computed(() => {
  return activeTab.value === "AREA" ? areaFilters : marketFilters;
});

// Reset kategori saat tab berubah
watch(activeTab, () => {
  activeCategory.value = "Semua Proyek";
});

// OPTIMASI: Evaluasi Cepat (Short-Circuit) & Tanpa membuat Object Baru
const filteredProjects = computed(() => {
  if (activeCategory.value === "Semua Proyek") {
    return projects;
  }

  const keyword = activeCategory.value.toLowerCase();

  return projects.filter((project) => {
    // Berhenti mengecek jika sudah ketemu kecocokan (menghemat RAM & CPU)
    if (project.tags && project.tags.some((tag) => tag.toLowerCase().includes(keyword))) return true;
    if (project.title && project.title.toLowerCase().includes(keyword)) return true;
    if (project.footerLeft && project.footerLeft.toLowerCase().includes(keyword)) return true;
    if (project.footerRight && project.footerRight.toLowerCase().includes(keyword)) return true;

    return false;
  });
});

// --- LOGIKA SLIDER MOBILE (DIPERBAIKI) ---
const slideRight = () => {
  if (sliderRef.value) {
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.value;

    // Gunakan Math.ceil agar perhitungan sisa pixel lebih akurat di semua ukuran HP
    if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
      sliderRef.value.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      // Geser dinamis sejauh lebar layar (clientWidth), bukan angka statis 320px
      sliderRef.value.scrollBy({ left: clientWidth, behavior: "smooth" });
    }
  }
};

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    if (window.innerWidth < 768) {
      requestAnimationFrame(slideRight); // Animasi DOM lebih ringan
    }
  }, 3500);
};

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
};

// ==================== SCROLL OBSERVER ====================
let observer: IntersectionObserver | null = null;

const initObserver = () => {
  if (typeof IntersectionObserver === "undefined") return;

  // Buat observer hanya 1x
  if (!observer) {
    observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target); // Berhenti pantau yang sudah muncul
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 50px 0px" },
    );
  }

  // Hanya pantau elemen yang belum muncul
  const elements = document.querySelectorAll(".animate-on-scroll:not(.is-visible)");
  elements.forEach((el) => observer?.observe(el));
};

// Panggil ulang observer setiap kali data filter berubah supaya tidak nge-blank
watch(filteredProjects, () => {
  nextTick(() => {
    initObserver();
  });
});

onMounted(() => {
  startAutoSlide();
  nextTick(() => {
    initObserver();
  });
});

onUnmounted(() => {
  stopAutoSlide();
  if (observer) observer.disconnect();
});

// ==================== LOGIKA MODAL LIGHTBOX ====================
const isModalOpen = ref(false);
const currentImageIndex = ref(0);

const openModal = (index: number) => {
  currentImageIndex.value = index;
  isModalOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = "";
};

const nextImage = () => {
  if (currentImageIndex.value < filteredProjects.value.length - 1) {
    currentImageIndex.value++;
  } else {
    currentImageIndex.value = 0;
  }
};

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  } else {
    currentImageIndex.value = filteredProjects.value.length - 1;
  }
};
</script>

<template>
  <section class="bg-[#f8fafc] py-16 sm:py-20 font-sans overflow-hidden transform-gpu">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- ================= TITLE ================= -->
      <div class="mb-12 flex flex-col items-center text-center animate-on-scroll">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
          PROYEK YANG TELAH <br />
          <span class="text-[#c41215]">KAMI KERJAKAN</span>
        </h2>
        <p class="text-neutral-500 text-sm sm:text-base mt-4 max-w-2xl leading-relaxed">
          Dokumentasi aktual hasil pengerjaan aplikasi flooring, coating, dan waterproofing di berbagai sektor industri.
        </p>
      </div>

      <!-- ================= HEADER TABS ================= -->
      <div
        class="flex justify-center gap-8 md:gap-14 mb-8 border-b border-gray-200/80 animate-on-scroll"
        style="transition-delay: 0.1s"
      >
        <button
          @click="activeTab = 'AREA'"
          :class="[
            'pb-4 font-extrabold uppercase tracking-wider text-xs md:text-sm flex items-center gap-2 relative transition duration-200',
            activeTab === 'AREA' ? 'text-[#b31b1b]' : 'text-gray-400 hover:text-gray-700',
          ]"
        >
          <span
            :class="[
              'w-1.5 h-1.5 rounded-full transition-transform duration-200',
              activeTab === 'AREA' ? 'bg-[#b31b1b] scale-125' : 'bg-transparent',
            ]"
          ></span>
          AREA
          <span class="text-[11px] font-medium normal-case text-gray-400 hidden sm:inline">(Lokasi & Fisik)</span>
          <span
            v-if="activeTab === 'AREA'"
            class="absolute bottom-0 left-0 w-full h-[3px] bg-[#b31b1b] rounded-t-full"
          ></span>
        </button>

        <button
          @click="activeTab = 'MARKET'"
          :class="[
            'pb-4 font-extrabold uppercase tracking-wider text-xs md:text-sm flex items-center gap-2 relative transition duration-200',
            activeTab === 'MARKET' ? 'text-[#b31b1b]' : 'text-gray-400 hover:text-gray-700',
          ]"
        >
          <span
            :class="[
              'w-1.5 h-1.5 rounded-full transition-transform duration-200',
              activeTab === 'MARKET' ? 'bg-[#b31b1b] scale-125' : 'bg-transparent',
            ]"
          ></span>
          MARKET
          <span class="text-[11px] font-medium normal-case text-gray-400 hidden sm:inline">(Sektor Industri)</span>
          <span
            v-if="activeTab === 'MARKET'"
            class="absolute bottom-0 left-0 w-full h-[3px] bg-[#b31b1b] rounded-t-full"
          ></span>
        </button>
      </div>

      <!-- ================= PILL FILTERS ================= -->
      <div class="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll" style="transition-delay: 0.15s">
        <button
          @click="activeCategory = 'Semua Proyek'"
          :class="[
            'px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold transition-colors shadow-sm',
            activeCategory === 'Semua Proyek'
              ? 'bg-[#b31b1b] text-white ring-2 ring-[#b31b1b] ring-offset-2 ring-offset-[#f8fafc]'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-[#b31b1b]',
          ]"
        >
          Semua Proyek
        </button>
        <button
          v-for="filter in currentFilters"
          :key="filter"
          @click="activeCategory = filter"
          :class="[
            'px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold transition-colors shadow-sm',
            activeCategory === filter
              ? 'bg-[#b31b1b] text-white ring-2 ring-[#b31b1b] ring-offset-2 ring-offset-[#f8fafc]'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-[#b31b1b]',
          ]"
        >
          {{ filter }}
        </button>
      </div>

      <!-- ================= PROJECT GRID ================= -->
      <ClientOnly>
        <div class="relative w-full group/slider px-1">
          <div
            ref="sliderRef"
            @touchstart.passive="stopAutoSlide"
            @touchend.passive="startAutoSlide"
            @mouseenter="stopAutoSlide"
            @mouseleave="startAutoSlide"
            class="flex md:grid md:grid-cols-2 lg:grid-cols-3 md:grid-flow-dense gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 hide-scrollbar scroll-smooth"
          >
            <div
              v-for="(item, index) in filteredProjects"
              :key="item.id"
              @click="openModal(index)"
              :class="[
                index === 0 ? 'lg:col-span-2' : 'lg:col-span-1',
                'group cursor-pointer flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm animate-on-scroll',
                /* PERBAIKAN: Menggunakan snap-start agar selalu pas di pinggir kiri layar HP */
                'w-full min-w-full md:min-w-0 md:w-auto shrink-0 md:shrink snap-start relative hover-lift',
              ]"
              :style="{ transitionDelay: `${0.1 + (index % 5) * 0.05}s` }"
            >
              <!-- Image Container -->
              <div
                :class="[
                  'relative w-full overflow-hidden transform-gpu',
                  item.hasFooter ? 'h-64 sm:h-72' : 'h-80 sm:h-96',
                ]"
              >
                <img
                  :src="item.image"
                  :alt="`Proyek ${item.title}`"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  class="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-transparent pointer-events-none"
                ></div>

                <div class="absolute top-5 left-5 flex flex-wrap gap-2 z-10">
                  <div
                    class="bg-white/95 backdrop-blur-md text-gray-900 text-[10px] font-black px-3 py-1.5 rounded-md flex items-center gap-2 uppercase tracking-wider shadow-sm"
                  >
                    <span class="w-2 h-2 rounded-full bg-amber-400 shadow-inner"></span> {{ item.status }}
                  </div>
                </div>

                <div class="absolute bottom-5 left-5 right-5 z-10 pointer-events-none">
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span
                      v-for="tag in item.tags"
                      :key="tag"
                      class="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-white/30"
                    >
                      {{ tag }}
                    </span>
                  </div>
                  <h3
                    class="text-white font-extrabold text-xl sm:text-2xl leading-snug mb-1 group-hover:text-red-300 transition-colors duration-200"
                  >
                    {{ item.title }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClientOnly>
    </div>
  </section>

  <!-- ================= MODAL LIGHTBOX ================= -->
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/95 backdrop-blur-sm p-4 md:p-8"
      >
        <button
          @click="closeModal"
          class="absolute top-5 right-5 md:top-8 md:right-8 text-white/70 hover:text-white hover:rotate-90 z-[110] transition duration-200 p-2 bg-white/10 hover:bg-[#c41215] rounded-full"
        >
          <svg class="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div
          v-if="filteredProjects.length > 0"
          class="relative w-full max-w-6xl flex flex-col items-center justify-center px-4"
        >
          <img
            :src="filteredProjects[currentImageIndex]?.image"
            :alt="filteredProjects[currentImageIndex]?.title"
            loading="lazy"
            decoding="async"
            class="w-auto max-w-[90vw] md:max-w-full max-h-[50vh] md:max-h-[65vh] object-contain rounded-xl shadow-2xl"
          />

          <div class="mt-6 flex flex-col items-center gap-3 w-full max-w-3xl">
            <h4 class="text-white font-bold text-xl md:text-3xl text-center tracking-wide">
              {{ filteredProjects[currentImageIndex]?.title }}
            </h4>

            <p
              v-if="filteredProjects[currentImageIndex]?.desc"
              class="text-gray-300 text-sm md:text-base text-center leading-relaxed"
            >
              {{ filteredProjects[currentImageIndex]?.desc }}
            </p>

            <NuxtLink
              v-if="filteredProjects[currentImageIndex]?.slug"
              :to="`/proyek/${filteredProjects[currentImageIndex]?.slug}`"
              @click="closeModal"
              class="mt-3 px-6 py-2.5 bg-[#c41215] text-white rounded-full text-sm font-bold shadow-md hover:bg-[#a00e10] transition-colors inline-flex items-center gap-2 hover:-translate-y-0.5"
            >
              Lihat Detail Proyek
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </NuxtLink>

            <div v-if="filteredProjects.length > 1" class="flex gap-2.5 flex-wrap justify-center mt-4">
              <button
                v-for="(_, index) in filteredProjects"
                :key="index"
                @click="currentImageIndex = index"
                :class="[
                  'h-2.5 rounded-full transition-all duration-300',
                  currentImageIndex === index
                    ? 'bg-[#c41215] w-10 shadow-[0_0_10px_rgba(196,18,21,0.5)]'
                    : 'bg-white/30 hover:bg-white/60 w-2.5',
                ]"
              ></button>
            </div>
          </div>

          <div
            class="absolute w-full flex justify-between top-[35%] md:top-[40%] -translate-y-1/2 px-0 md:-mx-20 pointer-events-none"
          >
            <button
              v-if="filteredProjects.length > 1"
              @click.stop="prevImage"
              class="pointer-events-auto bg-white/10 hover:bg-[#b31b1b] border border-white/20 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition hover:scale-110 shadow-lg backdrop-blur-md"
            >
              <svg class="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            <button
              v-if="filteredProjects.length > 1"
              @click.stop="nextImage"
              class="pointer-events-auto bg-white/10 hover:bg-[#b31b1b] border border-white/20 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition hover:scale-110 shadow-lg backdrop-blur-md"
            >
              <svg class="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Transisi Vue untuk Modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Scroll Reveal Animasi yang lebih ringan dengan transform-gpu */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
  will-change: opacity, transform;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.is-visible.hover-lift {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.is-visible.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Scrollbar Hide */
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
