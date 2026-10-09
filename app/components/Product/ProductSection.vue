<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { products } from '~/data/products'

// State untuk mendeteksi apakah section sudah masuk viewport
const isVisible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect() // Hentikan observasi setelah animasi berjalan sekali
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-gradient-to-b from-[#f9f9fb] to-[#f2f2f5] py-24 px-6 lg:px-8 font-sans overflow-hidden"
  >
    <div class="mx-auto max-w-7xl">

      <!-- =========================================
           HEADER SECTION
      ========================================= -->
      <div
        class="text-center mb-16 transition-all duration-1000 ease-out transform"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <span
          class="inline-block bg-amber-50 text-amber-700 border border-amber-200/60 text-[11px] font-bold px-3.5 py-1.5 mb-4 tracking-widest uppercase rounded-full shadow-sm"
        >
          Katalog Produk Resmi
        </span>

        <h2
          class="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-4 tracking-tight"
        >
          Formulasi & Kemasan Produk Kami
        </h2>

        <p
          class="text-neutral-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
        >
          Solusi sistem coating dan cat berkualitas tinggi untuk ketahanan maksimal serta finishing estetis pada berbagai permukaan industri maupun komersial.
        </p>
      </div>


      <!-- =========================================
           GRID PRODUK
      ========================================= -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >

        <!-- CARD PRODUK -->
        <div
          v-for="(product, index) in products"
          :key="product.id"
          class="bg-white border border-neutral-200/80 rounded-2xl shadow-sm flex flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 ease-out transform group"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
          :style="{
            transitionDelay: `${(index + 1) * 100}ms`
          }"
        >

          <!-- =====================================
               GAMBAR & LABEL
          ====================================== -->
          <div
            class="relative bg-gradient-to-br from-neutral-50 to-neutral-100 aspect-[4/3] flex items-center justify-center p-8 overflow-hidden border-b border-neutral-100"
          >

            <!-- IMAGE -->
            <img
              :src="product.image"
              :alt="product.title"
              class="w-full h-full object-contain drop-shadow-md transition-transform duration-700 group-hover:scale-105"
            />

            <!-- TAG (Kategori) -->
            <div
              class="absolute top-3 left-3 text-white text-[10px] font-bold px-3 py-1 tracking-wider uppercase rounded-md shadow-sm z-10"
              :class="product.tagColor"
            >
              {{ product.tag }}
            </div>

            <!-- WEIGHT (Kemasan) -->
            <div
              class="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-[11px] font-bold text-neutral-700 px-3 py-1 rounded-md shadow-sm border border-neutral-200/60 z-10"
            >
              {{ product.weight }}
            </div>

          </div>


          <!-- =====================================
               CONTENT
          ====================================== -->
          <div class="p-6 flex flex-col flex-1 justify-between">

            <div>
              <!-- TITLE -->
              <h3
                class="text-base font-bold text-neutral-900 mb-2 leading-snug group-hover:text-[#9B1C1C] transition-colors"
              >
                {{ product.title }}
              </h3>

              <!-- DESCRIPTION -->
              <p
                class="text-[13px] text-neutral-500 mb-6 leading-relaxed line-clamp-2"
              >
                {{ product.description }}
              </p>

              <!-- =================================
                   FEATURES (Dibatasi 3 keunggulan teratas)
              ================================== -->
              <ul class="space-y-2.5 mb-6">
                <li
                  v-for="(feature, idx) in product.features.slice(0, 3)"
                  :key="idx"
                  class="flex items-start gap-2.5 text-[12.5px] text-neutral-700 leading-snug"
                >
                  <!-- CHECK ICON -->
                  <div class="bg-emerald-50 text-emerald-600 p-0.5 rounded-full shrink-0 mt-0.5">
                    <svg
                      class="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span class="line-clamp-1 font-medium">
                    {{ feature }}
                  </span>
                </li>
              </ul>
            </div>


            <!-- =================================
                 FOOTER CARD
            ================================== -->
            <div
              class="pt-4 border-t border-neutral-100 flex items-center justify-between gap-4 mt-auto"
            >
              <!-- PRODUCT INFORMATION -->
              <span
                class="text-[10px] font-extrabold tracking-widest text-neutral-400 uppercase"
              >
                Spesifikasi Resmi
              </span>

              <!-- DETAIL LINK -->
              <NuxtLink
                :to="`/produk/${product.slug}`"
                class="text-xs font-bold text-[#9B1C1C] hover:text-[#7A1515] transition-colors flex items-center gap-1.5 group/link whitespace-nowrap bg-red-50 px-3 py-1.5 rounded-lg"
              >
                Lihat Detail
                <span
                  class="transform transition-transform group-hover/link:translate-x-1"
                >
                  &rarr;
                </span>
              </NuxtLink>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>
