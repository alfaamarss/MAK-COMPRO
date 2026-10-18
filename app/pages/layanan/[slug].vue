<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute, createError, useSeoMeta } from "#imports";
import Navbar from "~/components/layout/Navbar.vue";
import Footer from "~/components/layout/footer.vue";
import { services } from "~/data/services";

const route = useRoute();
const slug = computed(() => String(route.params.slug));

const service = computed(() => services.find((item) => item.slug === slug.value));

if (!service.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Layanan tidak ditemukan",
  });
}

// Gunakan properti gambar utama dari service
const activeImage = ref(service.value?.image || (service.value?.images?.[0] ?? ""));

const selectImage = (image: string) => {
  activeImage.value = image;
};

// Reset gambar jika service berubah (misal navigasi antar route)
watch(service, (newService) => {
  if (!newService) return;
  activeImage.value = newService.image || (newService.images?.[0] ?? "");
});

useSeoMeta({
  title: () => `${service.value?.title ?? "Layanan"} | PT Multi Artha Kreasindo`,
  description: () => service.value?.description ?? "Informasi layanan flooring dan coating industri.",
});
</script>

<template>
  <div v-if="service" class="min-h-screen bg-white font-sans text-[#202020]">
    <Navbar />

    <main class="pt-20 lg:pt-24">
      <!-- Breadcrumb -->
      <div class="border-b border-gray-100">
        <div class="mx-auto flex max-w-7xl items-center gap-2 px-5 py-4 text-sm text-gray-500 sm:px-8 lg:px-10">
          <NuxtLink to="/" class="transition hover:text-[#9B1C1C]"> Beranda </NuxtLink>
          <span>/</span>
          <NuxtLink to="/layanan" class="transition hover:text-[#9B1C1C]"> Layanan </NuxtLink>
          <span>/</span>
          <span class="truncate font-semibold text-gray-800">
            {{ service.title }}
          </span>
        </div>
      </div>

      <!-- Main Detail -->
      <section class="mx-auto max-w-7xl px-5 pt-6 pb-10 sm:px-8 sm:pt-8 sm:pb-12 lg:px-10 lg:pt-10 lg:pb-16">
        <div class="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <!-- Image Gallery Section -->
          <div class="lg:sticky lg:top-28">
            <!-- Main Image -->
            <div
              class="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-[#F6F5F2] p-5 sm:p-8"
            >
              <div
                class="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#C9A227]/10 blur-3xl"
              />

              <img
                :src="activeImage"
                :alt="service.title"
                class="relative z-10 h-full w-full rounded-xl object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <!-- Thumbnails -->
            <div v-if="service.images?.length" class="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              <button
                v-for="(img, idx) in service.images"
                :key="idx"
                @click="selectImage(img)"
                class="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 sm:w-32"
                :class="
                  activeImage === img
                    ? 'border-[#C9A227] shadow-sm'
                    : 'border-transparent hover:border-gray-200 opacity-70 hover:opacity-100'
                "
              >
                <img :src="img" :alt="`${service.title} thumbnail ${idx + 1}`" class="h-full w-full object-cover" />
              </button>
            </div>

            <!-- Trust Information -->
            <div class="mt-5 flex items-center gap-4 rounded-xl border border-gray-100 p-4">
              <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#9B1C1C]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m5-2a10 10 0 01-8-4
                    10 10 0 01-8 4v5a10 10 0 006 9
                    10 10 0 006-9V8z"
                  />
                </svg>
              </div>

              <div>
                <p class="text-sm font-bold text-gray-900">Standar pengerjaan profesional</p>
                <p class="mt-1 text-xs leading-relaxed text-gray-500">
                  Penyesuaian metode berdasarkan kondisi dan kebutuhan area proyek.
                </p>
              </div>
            </div>
          </div>

          <!-- Service Information -->
          <div class="flex min-w-0 flex-col">
            <div class="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#9B1C1C]">
              <span class="h-[2px] w-8 bg-[#C9A227]" />
              Layanan Kami
            </div>

            <h1
              class="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-[46px]"
            >
              {{ service.title }}
            </h1>

            <p class="mt-6 text-base leading-8 text-gray-600 sm:text-[17px]">
              {{ service.description }}
            </p>

            <!-- Features -->
            <div v-if="service.features?.length" class="mt-9 border-t border-gray-200 pt-7">
              <h2 class="text-lg font-bold text-gray-900">Keunggulan Layanan</h2>
              <p class="mt-1 text-sm text-gray-500">Nilai tambah untuk kebutuhan proyek industri Anda.</p>

              <ul class="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                <li v-for="(feature, idx) in service.features" :key="idx" class="flex items-start gap-3">
                  <span
                    class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700"
                  >
                    <svg class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8
                        a1 1 0 01-1.414 0l-4-4
                        a1 1 0 011.414-1.414L8 12.586l7.293-7.293
                        a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span class="text-sm leading-6 text-gray-700">
                    {{ feature }}
                  </span>
                </li>
              </ul>
            </div>

            <!-- Specifications -->
            <div v-if="service.specifications?.length" class="mt-9 border-t border-gray-200 pt-7">
              <h2 class="text-lg font-bold text-gray-900">Parameter Teknis</h2>

              <div class="mt-4 divide-y divide-gray-100">
                <div
                  v-for="(spec, index) in service.specifications"
                  :key="index"
                  class="flex items-start justify-between gap-5 py-4"
                >
                  <span class="text-sm text-gray-500">
                    {{ spec.label }}
                  </span>
                  <span class="max-w-[60%] text-right text-sm font-semibold leading-6 text-gray-900">
                    {{ spec.value }}
                  </span>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div class="mt-9 rounded-2xl bg-[#F7F5F1] p-5 sm:p-7">
              <p class="text-lg font-bold text-gray-950">Butuh solusi untuk proyek Anda?</p>

              <p class="mt-2 text-sm leading-6 text-gray-600">
                Diskusikan kebutuhan flooring atau coating Anda bersama tim kami.
              </p>

              <NuxtLink
                to="/kontak"
                class="group mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-[#9B1C1C] px-5 py-4 text-sm font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#7A1515] hover:shadow-lg sm:w-auto"
              >
                Konsultasi & Jadwalkan Survey
                <svg
                  class="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </NuxtLink>

              <div class="mt-5 flex items-start gap-2 border-t border-gray-200 pt-4">
                <svg
                  class="mt-0.5 h-4 w-4 shrink-0 text-[#9B1C1C]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 11v5m0-8h.01" />
                </svg>

                <p class="text-xs leading-5 text-gray-500">
                  Setiap proyek perlu mempertimbangkan kondisi substrat dan persiapan permukaan. Metode pengerjaan
                  ditentukan berdasarkan hasil pemeriksaan lapangan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom Brand Strip -->
      <section class="border-t border-gray-100 bg-white">
        <div
          class="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"
        >
          <div>
            <p class="text-sm font-bold text-gray-900">PT Multi Artha Kreasindo</p>
            <p class="mt-1 text-xs text-gray-500">Solusi epoxy dan coating industrial.</p>
          </div>

          <NuxtLink
            to="/layanan"
            class="inline-flex items-center gap-2 text-sm font-semibold text-[#9B1C1C] transition hover:gap-3"
          >
            Lihat layanan lainnya
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>
      </section>
      <Footer />
    </main>
  </div>
</template>
