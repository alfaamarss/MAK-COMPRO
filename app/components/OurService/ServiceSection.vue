<template>
  <section class="services-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <span class="category-badge">LAYANAN KAMI</span>
        <h2 class="title">Layanan Flooring & Coating Profesional</h2>
        <p class="description">
          Solusi pengerjaan lantai dan pelapisan berkualitas tinggi yang disesuaikan dengan kebutuhan area industri,
          komersial, maupun hunian Anda.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="services-grid">
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <!-- Card Image Container -->
          <div class="card-image-wrapper">
            <img :src="service.image" :alt="service.title" class="card-img" />
            <span class="badge" v-if="service.badge">{{ service.badge }}</span>
          </div>

          <!-- Card Content -->
          <div class="card-content">
            <h3 class="card-title">{{ service.title }}</h3>
            <p class="card-text">{{ service.description }}</p>

            <!-- Highlights / Feature List -->
            <ul class="highlights-list" v-if="service.highlights">
              <li v-for="(highlight, hIndex) in service.highlights" :key="hIndex">
                <span class="check-icon">✓</span> {{ highlight }}
              </li>
            </ul>

            <!-- Card Footer CTA (Diubah menggunakan NuxtLink dengan dynamic slug) -->
            <div class="card-footer">
              <NuxtLink :to="`/layanan/${service.slug}`" class="btn-detail">
                <span>Lihat Detail</span>
                <span class="arrow">&rarr;</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const services = ref([
  {
    slug: "epoxy-flooring",
    title: "Epoxy Flooring",
    badge: "BEST SELLER",
    image: "/images/Services/epoxy/EpoxyFlooring1.jpg",
    description:
      "Pengecatan lantai berbasis resin epoxy dan polimer yang melekat kuat pada lapisan beton. Melindungi lantai dari goresan, benturan, dan tumpahan bahan kimia dengan ketebalan 300 - 2000 micron.",
    highlights: [
      "Tahan goresan & benturan berat",
      "Lantai higienis & tanpa sambungan",
      "Tahan bahan kimia & mudah dibersihkan",
    ],
  },
  {
    slug: "road-line-marking",
    title: "Road Line Marking",
    image: "/images/Services/linemarking/linemarking1.jpeg",
    description:
      "Pemasangan marka dan garis batas presisi untuk jalan, gudang, pabrik, serta showroom. Berfungsi mengarahkan alur lalu lintas internal dan membatasi area kerja secara aman.",
    highlights: [
      "Memenuhi standar K3 & lalu lintas",
      "Warna cerah & high-visibility",
      "Tahan gesekan roda kendaraan / forklift",
    ],
  },
  {
    slug: "protective-coating",
    title: "Protective Coating",
    image: "/images/Services/Protective.jpeg",
    description:
      "Pelapisan khusus permukaan logam maupun non-logam untuk mencegah korosi dan karat akibat cuaca ekstrem atau lingkungan kimia. Cocok untuk pipa, tangki, dan struktur baja.",
    highlights: [
      "Perlindungan anti-korosi jangka panjang",
      "Metode aplikasi yang fleksibel",
      "Ideal untuk area industri & pipa tangki",
    ],
  },
  {
    slug: "sport-flooring",
    title: "Sport Flooring",
    image: "/images/Services/sport/sportflooring1.jpg",
    description:
      "Pengecatan khusus lapangan olahraga outdoor dan indoor (tenis, basket, dll) menggunakan metode Plexipave berkualitas tinggi yang terjamin anti-retak dan bebas genangan air.",
    highlights: ["Metode aplikasi Plexipave", "Anti-retak & ramah cuaca", "Permukaan presisi bebas genangan"],
  },
  {
    slug: "decorative-flooring",
    title: "Decorative Flooring",
    image: "/images/Services/Decorative.jpeg",
    description:
      "Solusi pelapisan lantai dekoratif berestetika tinggi seperti Flakes system, Metallic epoxy, atau Quartz sand untuk showroom, kantor, hotel, dan area komersial.",
    highlights: ["Estetika mewah & eksklusif", "Pilihan motif flakes & metallic unik", "Mudah dibersihkan & berkilau"],
  },
]);
</script>

<style scoped>
/* VARIABLES & BASE RESET */
.services-section {
  padding: 80px 20px;
  background-color: #f8fafc;
  font-family: "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1e293b;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* SECTION HEADER */
.section-header {
  text-align: center;
  max-width: 650px;
  margin: 0 auto 50px auto;
}

.category-badge {
  display: inline-block;
  color: #b30000;
  background-color: rgba(179, 0, 0, 0.08);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1.2px;
  padding: 6px 16px;
  border-radius: 20px;
  margin-bottom: 12px;
}

.title {
  font-size: 32px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 16px 0;
  line-height: 1.25;
}

.description {
  color: #64748b;
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
}

.card-image-wrapper {
  position: relative;
  height: 190px;
  background-color: #f1f5f9;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.service-card:hover .card-img {
  transform: scale(1.05);
}

/* GRID LAYOUT */
.services-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 28px;
}

@media (min-width: 640px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* CARD STYLING */
.service-card {
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.03),
    0 2px 4px -1px rgba(0, 0, 0, 0.02);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.08),
    0 10px 10px -5px rgba(0, 0, 0, 0.03);
  border-color: #cbd5e1;
}

.badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background-color: #b30000;
  color: #ffffff;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 700;
  border-radius: 6px;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(179, 0, 0, 0.2);
}

/* CARD CONTENT */
.card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 12px 0;
}

.card-text {
  color: #475569;
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 18px 0;
}

/* HIGHLIGHTS LIST */
.highlights-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.highlights-list li {
  font-size: 13px;
  color: #334155;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.check-icon {
  color: #b30000;
  font-weight: bold;
  background-color: rgba(179, 0, 0, 0.1);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
}

/* CARD FOOTER & BUTTON */
.card-footer {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px dashed #e2e8f0;
}

.btn-detail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #b30000;
  font-weight: 700;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.btn-detail .arrow {
  transition: transform 0.2s ease;
}

.service-card:hover .btn-detail {
  color: #800000;
}

.service-card:hover .btn-detail .arrow {
  transform: translateX(4px);
}
</style>
