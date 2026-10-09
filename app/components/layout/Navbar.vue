<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'Produk', href: '/produk' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Proyek', href: '/proyek' },
  { label: 'Kontak', href: '/kontak' }
]
</script>

<template>
  <!-- Menambahkan bayangan (shadow) halus dan blur yang lebih rapi -->
  <header
  class="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/95 shadow-sm backdrop-blur-md">
  <div class="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

      <!-- Logo -->
      <NuxtLink
          to="/"
          class="flex shrink-0 items-center"
          aria-label="Beranda"
        >
          <img
            src="/images/PT. MULTI KREASINDO.png"
            alt="PT Multi Artha Kreasindo"
            class="h-16 w-auto object-contain lg:h-30"
          />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-8">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="text-sm font-semibold text-neutral-600 transition-colors duration-200 hover:text-red-700"
          active-class="text-red-700"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- CTA & Mobile Toggle Wrapper -->
      <div class="flex items-center gap-4">

        <!-- Desktop CTA -->
        <NuxtLink
          to="/kontak"
          class="hidden lg:inline-flex items-center justify-center rounded-md bg-red-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-800 hover:shadow-md focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
        >
          Konsultasi Sekarang
        </NuxtLink>

        <!-- Mobile Menu Button -->
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-600 transition-colors hover:border-red-700 hover:text-red-700 lg:hidden"
          @click="isOpen = !isOpen"
          :aria-expanded="isOpen"
          aria-label="Toggle navigation"
        >
          <!-- Ikon Hamburger (menu tertutup) -->
          <svg v-if="!isOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!-- Ikon X (menu terbuka) -->
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
      <!-- Posisi absolute membuat menu mengambang di atas konten, bukan mendorong konten -->
      <div v-if="isOpen" class="absolute inset-x-0 top-20 border-b border-neutral-200 bg-white px-6 py-4 shadow-lg lg:hidden">
        <nav class="flex flex-col space-y-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.href"
            :to="item.href"
            class="block rounded-md px-3 py-3 text-base font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-red-700"
            active-class="bg-red-50 text-red-700"
            @click="isOpen = false"
          >
            {{ item.label }}
          </NuxtLink>

          <!-- Pemisah dan Tombol CTA untuk Mobile -->
          <div class="pt-4 pb-2">
            <NuxtLink
              to="/kontak"
              class="flex w-full items-center justify-center rounded-md bg-red-700 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-800"
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
