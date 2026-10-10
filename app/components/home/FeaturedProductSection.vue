<script setup lang="ts">
import { onMounted } from "vue";

const featuredProducts = [
  {
    tag: "MULTI PAINT PRIMER",
    tagColor: "bg-[#cfa426]", // Emas
    image: "/images/produk/produk1.png",
    title: "Epoxy Primer Series",
    description:
      "Cat dasar berdaya penetrasi tinggi sebagai pengunci pori substrat dan memastikan daya lekat (adhesi) maksimal untuk lapisan berikutnya.",
  },
  {
    tag: "MULTI PAINT BODYCOAT",
    tagColor: "bg-[#8b1515]", // Merah gelap
    image: "/images/produk/produk1.png",
    title: "Epoxy Bodycoat Series",
    description:
      "Lapisan tengah struktural yang diformulasikan sangat kuat untuk menahan beban berat (heavy-duty) dan menciptakan permukaan tanpa sambungan.",
  },
  {
    tag: "MULTI PAINT TOPCOAT",
    tagColor: "bg-[#333333]", // Abu-abu gelap
    image: "/images/produk/produk1.png",
    title: "Epoxy Topcoat Series",
    description:
      "Lapisan pelindung akhir dengan hasil kilap prima. Memberikan perlindungan ekstra terhadap abrasi, goresan, dan paparan zat kimia.",
  },
];

// Logika Animasi Scroll
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  document.querySelectorAll(".scroll-animate").forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <section class="bg-[#f7f7f7] py-24 px-6 lg:px-8 font-sans overflow-hidden">
    <div class="mx-auto max-w-7xl">
      <!-- Header Section -->
      <div
        class="flex flex-col items-center text-center mb-20 scroll-animate opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <!-- PRODUK UNGGULAN  -->
        <h2
          class="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-neutral-900 mb-4 tracking-tight leading-[1.1]"
        >
          PRODUK
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[#c41215] to-[#7a2021]"
            >UNGGULAN</span
          >
        </h2>

        <!-- Sub-judul Pendukung -->
        <h3
          class="text-xl md:text-2xl font-semibold text-neutral-700 mb-6 max-w-2xl"
        >
          Material Berkualitas untuk Hasil Maksimal
        </h3>

        <!-- Deskripsi Utama -->
        <p
          class="text-neutral-500 max-w-2xl text-base md:text-lg leading-relaxed"
        >
          Kami memproduksi dan menggunakan sistem pelapisan epoxy terlengkap
          yang disesuaikan dengan standar ketahanan industri modern.
        </p>
      </div>

      <!-- Grid Produk Unggulan (3 Kolom) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <!-- Card Item -->
        <div
          v-for="(product, index) in featuredProducts"
          :key="index"
          class="scroll-animate opacity-0 translate-y-10 transition-all duration-[800ms] ease-out group"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <!-- Gambar & Label -->
          <div
            class="relative bg-white rounded-lg aspect-[4/3] flex items-center justify-center p-6 mb-6 overflow-hidden border border-neutral-200 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:border-neutral-300"
          >
            <!-- Gambar Produk (Placeholder sudah dihapus, gambar tampil bersih) -->
            <img
              :src="product.image"
              :alt="product.title"
              class="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
            />

            <!-- Tag Kategori -->
            <div
              class="absolute top-4 left-4 text-white text-[10px] font-bold px-3 py-1.5 tracking-wider rounded-sm shadow-sm z-10"
              :class="product.tagColor"
            >
              {{ product.tag }}
            </div>
          </div>

          <!-- Konten Teks Sederhana -->
          <div>
            <h3
              class="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#991b1b] transition-colors"
            >
              {{ product.title }}
            </h3>
            <p class="text-sm text-neutral-500 leading-relaxed mb-4">
              {{ product.description }}
            </p>
            <NuxtLink
              to="/produk"
              class="inline-flex items-center text-sm font-bold text-[#991b1b] hover:text-red-900 transition-colors"
            >
              Pelajari Lebih Lanjut
              <span class="ml-1 transition-transform group-hover:translate-x-1"
                >→</span
              >
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Tombol CTA Ke Halaman Produk Full -->
      <div
        class="flex justify-center scroll-animate opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out"
      >
        <NuxtLink
          to="/produk"
          class="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#991b1b] bg-transparent px-8 py-4 text-sm font-bold text-[#991b1b] transition-all hover:bg-[#991b1b] hover:text-white"
        >
          Lihat Seluruh Katalog Produk
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
