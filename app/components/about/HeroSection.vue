<template>
  <section class="hero-section">
    <!-- Gradient Overlay Background -->
    <div class="hero-overlay"></div>

    <div class="container hero-content">
      <!-- Breadcrumb -->
      <div class="breadcrumb">
        BERANDA / <span class="text-gold">Layanan Kami</span>
      </div>

      <!-- Main Headline -->
      <h1 class="hero-title">
        Mengenal <span class="highlight">Multi Artha Kreasindo</span><br />
      </h1>

      <!-- Description -->
      <p class="hero-description">
        Kami menghadirkan aplikasi pelapisan lantai berstandar industri dengan
        eksekusi teknis presisi. Mulai dari persiapan substrat mekanis,
        penambalan retak, hingga finishing kilap cermin tanpa pori bergaransi
        resmi.
      </p>

      <!-- Divider -->
      <hr class="divider" />

      <!-- Bottom Stats / Features Grid -->
      <div class="features-row">
        <div
          class="feature-item"
          v-for="(feature, index) in features"
          :key="index"
        >
          <div class="feature-icon-box">
            <!-- Icon SVG Placeholder -->
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="svg-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                :d="feature.iconPath"
              />
            </svg>
          </div>
          <div class="feature-text">
            <h4>{{ feature.title }}</h4>
            <p>{{ feature.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Data fitur di bagian bawah Hero
const features = ref([
  {
    title: "Aplikator Ahli",
    subtitle: "TENAGA KERJA BERPENGALAMAN",
    iconPath:
      "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", // Check badge icon
  },
  {
    title: "Aplikator Ahli",
    subtitle: "TENAGA KERJA BERPENGALAMAN",
    iconPath:
      "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", // Check badge icon
  },

  {
    title: "Garansi Pekerjaan",
    subtitle: "JAMINAN DAYA REKAT PENUH",
    iconPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", // Shield icon
  },
  {
    title: "Survey & Moisture Test",
    subtitle: "TANPA BIAYA TAMBAHAN",
    iconPath:
      "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", // Clipboard icon
  },
]);
</script>

<style scoped>
/* GENERAL SETUP */
/* GENERAL SETUP */
.hero-section {
  position: relative;
  background-image: url("/images/Services/HeroServices.jpg");

  /* PENTING: Memastikan gambar menutup area dengan proporsional */
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;

  /* OPTIMASI KETAJAMAN BROWSER */
  image-rendering: -webkit-optimize-contrast; /* Mengurangi blur di browser berbasis WebKit/Chrome */
  image-rendering: crisp-edges;

  /* Mencegah gambar terlalu terenggang (distorsi) */
  min-height: 80vh;
  display: flex;
  align-items: center;
  color: #ffffff;
}

/* GRADIENT OVERLAY (Gelap di kiri, Transparan di Kanan) */
/* GRADIENT OVERLAY (Hitam Pekat di Kiri, Pure Clear / Bening Murni di Kanan) */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(12, 12, 12, 0.98) 0%,
    /* Hitam pekat di paling kiri untuk keterbacaan teks */
    rgba(12, 12, 12, 0.85) 35%,
    /* Tetap gelap di bawah teks */ rgba(12, 12, 12, 0.2) 60%,
    /* Mulai memudar tanpa rona merah */ rgba(0, 0, 0, 0) 80%
      /* 100% bening/clear murni sebelum mencapai sisi paling kanan */
  );
  z-index: 1;
}

/* Pastikan konten hero tidak menutupi gambar di kanan */
.container.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 20px 40px;
  /* Batasi lebar konten teks agar tidak melebar ke area foto */
  max-width: 1200px;
}

.hero-title,
.hero-description {
  /* Batasi lebar teks secara eksplisit agar menyisakan ruang di kanan */
  max-width: 650px;
}

/* BREADCRUMB */
.breadcrumb {
  font-size: 12px;
  letter-spacing: 1px;
  color: #888888;
  margin-bottom: 25px;
  text-transform: uppercase;
}

.text-gold {
  color: #f6d365;
  font-weight: 600;
}

/* BADGE SPECIALIST */
.badge-specialist {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(139, 0, 0, 0.8);
  border: 1px solid #700000;
  padding: 6px 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 2px;
  margin-bottom: 25px;
}

.badge-specialist .dot {
  width: 6px;
  height: 6px;
  background-color: #f6d365;
  border-radius: 50%;
}

/* HERO TITLE */
.hero-title {
  font-size: 46px;
  font-weight: 800;
  line-height: 1.3;
  margin: 0 0 20px 0;
  max-width: 700px;
}

.hero-title .highlight {
  color: #f6d365;
  border-bottom: 3px solid #f6d365;
  padding-bottom: 2px;
  display: inline-block;
}

/* HERO DESCRIPTION */
.hero-description {
  font-size: 16px;
  color: #cccccc;
  line-height: 1.7;
  max-width: 600px;
  margin-bottom: 40px;
}

/* ACTIONS / BUTTONS */
.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 60px;
}

.btn-primary {
  background-color: #b30000;
  color: white;
  border: none;
  padding: 14px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-primary:hover {
  background-color: #8c0000;
}

.btn-outline {
  background-color: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 14px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-outline:hover {
  border-color: white;
  background-color: rgba(255, 255, 255, 0.1);
}

.icon-outline {
  font-size: 16px;
}

/* DIVIDER */
.divider {
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 30px;
}

/* FEATURES ROW */
.features-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.feature-icon-box {
  width: 32px;
  height: 32px;
  min-width: 32px;
  border: 1px solid #f6d365;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(246, 211, 101, 0.05);
  color: #f6d365;
}

.svg-icon {
  width: 18px;
  height: 18px;
}

.feature-text h4 {
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 4px 0;
}

.feature-text p {
  color: #999999;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin: 0;
}

/* RESPONSIVE DESIGN */
@media (max-width: 992px) {
  .hero-title {
    font-size: 38px;
  }
  .features-row {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 20px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    background-position: left center;
  }
  .hero-overlay {
    background: linear-gradient(
      180deg,
      rgba(15, 15, 15, 0.9) 0%,
      rgba(15, 15, 15, 0.95) 70%,
      rgba(130, 25, 25, 0.8) 100%
    );
  }
  .hero-title {
    font-size: 32px;
  }
  .hero-actions {
    flex-direction: column;
  }
  .btn-primary,
  .btn-outline {
    width: 100%;
    justify-content: center;
  }
  .features-row {
    grid-template-columns: 1fr;
  }
}
</style>
