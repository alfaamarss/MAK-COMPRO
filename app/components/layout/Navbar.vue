<script setup lang="ts">
import { ref } from "vue";
const route = useRoute(); // Opsional jika hanya dipanggil, tapi disarankan dimasukkan ke variabel

const isOpen = ref(false);

const navItems = [
  { label: "Home", href: "/" },
  { label: "Produk", href: "/produk" },
  { label: "Layanan Kami", href: "/layanan" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Portofolio Kami", href: "/proyek" },
  { label: "Kontak", href: "/kontak" },
];
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/95 shadow-sm backdrop-blur-md">
    <div class="mx-auto flex h-20 sm:h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 w-full gap-4">
      <!-- 1. KIRI: Logo & Teks Perusahaan -->
      <NuxtLink to="/" class="flex items-center gap-3 shrink-0 group" aria-label="Beranda PT Multi Artha Kreasindo">
        <img src="/images/PT. MULTI KREASINDO.png" alt="Logo MAK" class="h-12 sm:h-16 lg:h-16 w-auto object-contain" />
        <div class="flex flex-col max-[380px]:hidden">
          <span
            class="font-bold text-[#1a2b4c] text-sm sm:text-base tracking-tight leading-tight uppercase whitespace-nowrap"
          >
            PT Multi Artha Kreasindo
          </span>
          <span
            class="text-[9px] sm:text-[10px] text-[#7a2021] font-semibold tracking-wider uppercase mt-0.5 whitespace-nowrap"
          >
            Industrial Cat Flooring & Coating
          </span>
        </div>
      </NuxtLink>

      <!-- 2. TENGAH: Desktop Navigation (Menggunakan Flex-1 agar otomatis ke tengah dan tidak menabrak logo) -->
      <nav class="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-8">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="text-sm lg:text-base font-semibold text-neutral-600 transition-colors duration-200 hover:text-[#c41215] whitespace-nowrap"
          active-class="!text-[#c41215] font-bold"
          exact-active-class="!text-[#c41215] font-bold"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- 3. KANAN: CTA & Mobile Toggle Wrapper -->
      <div class="flex items-center justify-end shrink-0">
        <!-- Desktop CTA -->
        <NuxtLink
          to="/kontak"
          class="hidden lg:inline-flex items-center justify-center rounded-md bg-[#c41215] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#a00f11]"
        >
          Konsultasi Sekarang
        </NuxtLink>

        <!-- Mobile Menu Button -->
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-600 transition-colors hover:border-[#c41215] hover:text-[#c41215] lg:hidden ml-4"
          @click="isOpen = !isOpen"
          :aria-expanded="isOpen"
          aria-label="Toggle navigation"
        >
          <svg v-if="!isOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation (Dropdown Menu) -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isOpen"
        class="absolute inset-x-0 top-20 sm:top-24 border-b border-neutral-200 bg-white px-4 sm:px-6 py-4 shadow-lg lg:hidden"
      >
        <nav class="flex flex-col space-y-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.href"
            :to="item.href"
            class="block rounded-md px-3 py-3 text-base font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-[#c41215]"
            active-class="!bg-red-50 !text-[#c41215] font-bold"
            exact-active-class="!bg-red-50 !text-[#c41215] font-bold"
            @click="isOpen = false"
          >
            {{ item.label }}
          </NuxtLink>

          <!-- Pemisah dan Tombol CTA untuk Mobile -->
          <div class="pt-4 pb-2">
            <NuxtLink
              to="/kontak"
              class="flex w-full items-center justify-center rounded-md bg-[#c41215] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a00f11]"
              @click="isOpen = false"
            >
              Konsultasi Sekarang
            </NuxtLink>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>
