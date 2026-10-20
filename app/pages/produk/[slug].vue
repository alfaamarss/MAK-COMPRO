<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute, createError, useSeoMeta, useHead } from "#imports";
import Navbar from "~/components/layout/Navbar.vue";
import { products } from "~/data/products";

const route = useRoute();
const slug = computed(() => String(route.params.slug));

const product = computed(() => {
  return products.find((item) => item.slug === slug.value) || products[0];
});

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Produk tidak ditemukan",
  });
}

// State
const activeVariant = ref(product.value?.variants?.[0] || null);
const activeImage = ref(activeVariant.value?.image || product.value?.image);
const currentWeight = computed(() => activeVariant.value?.weight || product.value?.weight);

// Fungsi ganti varian
const selectVariant = (variant: any) => {
  activeVariant.value = variant;
  if (variant.image) {
    activeImage.value = variant.image;
  }
};

// Watcher untuk reset state
watch(product, (newProduct) => {
  if (newProduct) {
    activeVariant.value = newProduct.variants?.[0] || null;
    activeImage.value = activeVariant.value?.image || newProduct.image;
  }
});

// ==================== METADATA SEO ====================
useSeoMeta({
  title: () => product.value?.seo?.metaTitle ?? `${product.value?.title} | PT Multi Artha Kreasindo`,
  description: () => product.value?.seo?.metaDescription ?? product.value?.description,

  ogTitle: () => product.value?.seo?.metaTitle ?? `${product.value?.title} | PT Multi Artha Kreasindo`,
  ogDescription: () => product.value?.seo?.metaDescription ?? product.value?.description,
  ogType: "website", // Diubah dari "product" agar sesuai dengan tipe UseSeoMetaInput bawaan Nuxt
  ogUrl: () => `https://www.multiarthakreasindo.com/produk/${slug.value}`,
  ogImage: () =>
    product.value?.image ? new URL(product.value.image, "https://www.multiarthakreasindo.com").href : undefined,

  twitterCard: "summary_large_image",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: () => `https://www.multiarthakreasindo.com/produk/${slug.value}`,
    },
  ],
  meta: [
    {
      name: "keywords",
      content: () =>
        product.value?.seo?.keywords?.join(", ") ?? "cat epoxy lantai, coating industri, cat lantai pabrik",
    },
  ],
  // Tambahan Schema.org (JSON-LD)
  script: [
    {
      // Menggunakan Type Casting as "application/json" untuk mem-bypass TS Error
      type: "application/ld+json" as "application/json",
      // Menggunakan innerHTML sesuai standar useHead terbaru
      innerHTML: computed(() =>
        JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: product.value?.title,
          image: product.value?.image ? `https://www.multiarthakreasindo.com${product.value.image}` : undefined,
          description: product.value?.description,
          brand: {
            "@type": "Brand",
            name: "Multi Paint",
          },
          manufacturer: {
            "@type": "Organization",
            name: "PT Multi Artha Kreasindo",
          },
        }),
      ),
    },
  ],
});
</script>

<template>
  <div v-if="product" class="min-h-screen bg-white font-sans text-gray-800 selection:bg-[#9B1C1C] selection:text-white">
    <Navbar />

    <main class="pt-20 lg:pt-24 pb-15">
      <!-- ========================================
           BREADCRUMB
      ========================================= -->
      <section class="bg-gray-50/80 py-3.5 border-b border-gray-200/60 backdrop-blur-sm sticky top-16 lg:top-20 z-30">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-4">
          <nav class="flex items-center gap-2.5 text-sm text-gray-500 font-medium">
            <NuxtLink to="/" class="hover:text-[#9B1C1C] transition-colors flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
              </svg>
              Home
            </NuxtLink>
            <span class="text-gray-300">/</span>
            <NuxtLink to="/produk" class="hover:text-[#9B1C1C] transition-colors">Produk</NuxtLink>
            <span class="text-gray-300">/</span>
            <!-- Diperbaiki class max-w-[180px] menjadi max-w-45 -->
            <span class="text-[#9B1C1C] font-semibold truncate max-w-45 sm:max-w-none">{{ product.title }}</span>
          </nav>

          <div
            class="flex items-center gap-2 text-xs font-bold tracking-wide text-gray-700 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"
              ></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            READY STOCK
          </div>
        </div>
      </section>

      <!-- ========================================
           MAIN CONTENT
      ========================================= -->
      <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <!-- LEFT COLUMN: IMAGES -->
          <div class="lg:col-span-5 flex flex-col gap-5">
            <!-- Main Image Card -->
            <!-- Diperbaiki class bg-gradient-to-br menjadi bg-linear-to-br -->
            <div
              class="relative bg-linear-to-br from-gray-50 to-gray-100/50 border border-gray-200/80 rounded-3xl overflow-hidden flex items-center justify-center aspect-square p-8 group transition-all duration-500 hover:shadow-xl hover:border-gray-300"
            >
              <!-- Badges -->
              <div class="absolute top-5 left-5 flex flex-col gap-2.5 z-20">
                <span
                  class="text-white px-3.5 py-1.5 text-[11px] font-bold tracking-widest uppercase rounded-lg shadow-sm"
                  :class="product.tagColor"
                >
                  {{ product.tag }}
                </span>
                <span
                  class="bg-white/95 backdrop-blur-md text-gray-800 px-3.5 py-1.5 text-[11px] font-bold tracking-widest uppercase rounded-lg shadow-sm border border-gray-200/50"
                >
                  {{ currentWeight }}
                </span>
              </div>

              <!-- Zoom Indicator -->
              <div
                class="absolute bottom-5 right-5 bg-white/90 backdrop-blur-md rounded-full p-2.5 text-gray-600 shadow-sm opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>

              <!-- Product Image -->
              <img
                :src="activeImage"
                :alt="`Kemasan ${product.title}`"
                class="relative z-10 max-h-full w-full object-contain drop-shadow-2xl mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <!-- THUMBNAILS GALLERY -->
            <div v-if="product.variants && product.variants.length > 0" class="grid grid-cols-4 gap-3.5">
              <button
                v-for="(variant, idx) in product.variants.slice(0, 2)"
                :key="idx"
                @click="selectVariant(variant)"
                :class="[
                  'relative rounded-2xl aspect-square p-2 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 group',
                  activeVariant?.label === variant.label
                    ? 'bg-white border-2 border-[#9B1C1C] shadow-md ring-4 ring-red-50'
                    : 'bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300',
                ]"
              >
                <div
                  class="absolute top-2 left-2 bg-white/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-[9px] font-bold text-gray-600"
                >
                  {{ variant.label.split(" ")[0] }}
                </div>
                <img
                  :src="variant.image"
                  class="w-[75%] h-[75%] object-contain mix-blend-multiply transition-transform group-hover:scale-110"
                  :alt="`Varian ${variant.label} untuk ${product.title}`"
                />
              </button>
            </div>

            <div v-else class="grid grid-cols-4 gap-3.5">
              <button
                class="bg-white border-2 border-[#9B1C1C] shadow-md ring-4 ring-red-50 rounded-2xl aspect-square p-2 flex items-center justify-center overflow-hidden"
              >
                <img
                  :src="product.image"
                  class="w-[80%] h-[80%] object-contain mix-blend-multiply"
                  :alt="product.title"
                />
              </button>
            </div>
          </div>

          <!-- RIGHT COLUMN: PRODUCT INFO -->
          <div class="lg:col-span-7 flex flex-col">
            <!-- Label Pabrik -->
            <div class="mb-5">
              <span
                class="inline-flex items-center gap-1.5 bg-red-50/50 text-[#9B1C1C] border border-red-100 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                Produk Resmi Pabrik
              </span>
            </div>

            <!-- Title -->
            <h1
              class="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-gray-900 leading-[1.15] mb-6"
            >
              {{ product.title }}
            </h1>

            <!-- PILIHAN UKURAN -->
            <div v-if="product.variants && product.variants.length > 0" class="mb-7">
              <h3 class="text-[13px] font-bold uppercase tracking-widest text-gray-500 mb-3.5">Pilih Ukuran Kemasan</h3>
              <div class="flex flex-wrap gap-3">
                <button
                  v-for="variant in product.variants"
                  :key="variant.label"
                  @click="selectVariant(variant)"
                  :class="[
                    'px-6 py-3 rounded-xl border-2 font-bold text-sm transition-all flex items-center gap-2',
                    activeVariant?.label === variant.label
                      ? 'border-[#9B1C1C] bg-red-50/40 text-[#9B1C1C] shadow-sm'
                      : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
                  ]"
                >
                  <div
                    :class="[
                      'w-3 h-3 rounded-full border-2',
                      activeVariant?.label === variant.label ? 'border-[#9B1C1C] bg-[#9B1C1C]' : 'border-gray-300',
                    ]"
                  ></div>
                  {{ variant.label }}
                </button>
              </div>
            </div>

            <!-- Deskripsi -->
            <!-- Diperbaiki class border-l-[4px] dan bg-gradient-to-r menjadi border-l-4 dan bg-linear-to-r -->
            <div
              class="border-l-4 border-[#9B1C1C] bg-linear-to-r from-red-50/50 to-transparent p-5 mb-10 rounded-r-2xl"
            >
              <p class="text-gray-600 leading-relaxed text-[15px]">
                {{ product.description }}
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <!-- FITUR PRODUK -->
              <div v-if="product.features && product.features.length > 0">
                <h3 class="text-[13px] font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                  Keunggulan
                </h3>
                <ul class="flex flex-col gap-3">
                  <li
                    v-for="(feature, idx) in product.features"
                    :key="idx"
                    class="flex items-start gap-3 bg-gray-50/50 p-3 rounded-xl border border-gray-100"
                  >
                    <div class="bg-emerald-100 p-1 rounded-full shrink-0 mt-0.5">
                      <svg
                        class="h-3.5 w-3.5 text-emerald-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <span class="text-[14px] text-gray-700 font-medium leading-tight">{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <!-- SPESIFIKASI TEKNIS -->
              <div>
                <h3 class="text-[13px] font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                  Spesifikasi
                </h3>
                <div class="flex flex-col gap-2.5">
                  <div
                    v-for="(spec, index) in product.specifications"
                    :key="index"
                    class="flex justify-between items-center bg-white border border-gray-200 p-3.5 rounded-xl hover:border-gray-300 transition-colors"
                  >
                    <span class="text-[13px] text-gray-500 font-medium">{{ spec.label }}</span>
                    <span class="text-[14px] font-bold text-gray-900 text-right">{{ spec.value }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- ACTIONS & INFO (Nempel di bawah) -->
            <div class="mt-auto pt-6 border-t border-gray-100 flex flex-col gap-5">
              <!-- Buttons -->
              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtLink
                  to="/kontak"
                  class="group flex-1 bg-[#9B1C1C] hover:bg-[#7A1515] text-white px-6 py-4.5 rounded-2xl font-bold flex items-center justify-center gap-2.5 shadow-lg shadow-[#9B1C1C]/25 transition-all duration-300 hover:shadow-[#9B1C1C]/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                  Tanya Estimasi Proyek
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-1 transform group-hover:translate-x-1.5 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </NuxtLink>

                <!-- Tombol TDS -->
                <button
                  :disabled="!product.tds"
                  :class="[
                    'border-2 px-6 py-4.5 rounded-2xl font-bold flex items-center justify-center gap-2.5 transition-all duration-300 whitespace-nowrap',
                    product.tds
                      ? 'bg-white hover:bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-300 active:scale-[0.98]'
                      : 'bg-gray-50 border-gray-100 text-gray-400 cursor-not-allowed',
                  ]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    :class="['h-5 w-5', product.tds ? 'text-gray-500' : 'text-gray-300']"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {{ product.tds ? "Unduh TDS" : "TDS Belum Tersedia" }}
                </button>
              </div>

              <!-- Important Note -->
              <div class="bg-amber-50/60 border border-amber-200/60 rounded-2xl p-4 flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 shrink-0 text-amber-500 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p class="text-[13px] text-amber-800/90 font-medium leading-relaxed">
                  Konsultasikan perhitungan volume m² proyek, kondisi substrat, dan profil kebutuhan Anda langsung
                  dengan Technical Sales Engineer kami sebelum pengaplikasian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
