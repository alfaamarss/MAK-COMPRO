<template>
  <section class="transformation-section">
    <div class="container">

      <!-- Section Header -->
      <div class="header-section">
        <span class="subtitle">HASIL PEKERJAAN NYATA</span>
        <h2 class="title">Transformasi Permukaan Lantai</h2>
        <p class="description">
          Bukti nyata keahlian perbaikan dan pelapisan epoxy oleh tim aplikator profesional PT Multi Artha Kreasindo.
        </p>
      </div>

      <!-- Interactive Slider Box -->
      <div class="slider-wrapper">
        <div class="slider-container">

          <!-- Gambar AFTER (Background Base) -->
          <img
            src="/images/Services/After.jpeg"
            alt="Lantai Sesudah Epoxy"
            class="img-layer img-after"
          />

          <!-- Gambar BEFORE (Clipped Overlay) -->
          <div
            class="img-layer img-before-wrapper"
            :style="{ clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)` }"
          >
            <img
              src="/images/Services/Before.png"
              alt="Lantai Sebelum Epoxy"
              class="img-before"
            />
          </div>

          <!-- Floating Badges / Labels -->
          <div class="label badge-before">BEFORE</div>
          <div class="label badge-after">AFTER</div>

          <!-- Slider Handle (Garis & Tombol Kuning) -->
          <div class="slider-handle-visual" :style="{ left: `${sliderValue}%` }">
            <div class="slider-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>

          <!-- Transparent Range Input -->
          <input
            type="range"
            min="0"
            max="100"
            v-model="sliderValue"
            class="slider-input"
            aria-label="Geser untuk melihat transformasi lantai"
          />
        </div>
      </div>

      <!-- Footer Details Card -->
      <div class="footer-details">

        <!-- Kondisi Awal -->
        <div class="detail-box">
          <h3 class="detail-title">
            <span class="dot dot-red"></span> KONDISI AWAL (SEBELUM)
          </h3>
          <p class="detail-text">
            Lantai beton berumur 8 tahun mengalami keretakan rambut luas, pelepasan debu semen terus-menerus yang merusak inventaris, dan noda oli mesin yang meresap ke dalam pori beton.
          </p>
        </div>

        <!-- Divider Line -->
        <div class="vertical-divider"></div>

        <!-- Hasil Eksekusi -->
        <div class="detail-box">
          <h3 class="detail-title text-gray">
            <span class="dot dot-yellow"></span> HASIL EKSEKUSI (SESUDAH)
          </h3>
          <p class="detail-text">
            Selesai dalam 4 hari kerja seluas 3.500 m². Substrat diperbaiki dengan mortar epoxy, diaplikasikan self-leveling 2.000 mikron, menghasilkan lantai mulus bergaransi 2 tahun penuh.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Nilai awal slider (50% tepat di tengah)
const sliderValue = ref(50)
</script>

<style scoped>
/* KONFIGURASI UMUM */
.transformation-section {
  padding: 80px 20px;
  background-color: #ffffff;
  font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
  color: #1e293b;
  width: 100%;
  box-sizing: border-box;
}

.container {
  max-width: 800px; /* Pas 100% untuk layar monitor standar */
  margin: 0 auto;
  width: 90%;
}

/* HEADER */
.header-section {
  text-align: center;
  margin-bottom: 40px;
}

.subtitle {
  color: #b30000;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 12px;
}

.title {
  font-size: 36px;
  font-weight: 800;
  margin: 0 0 16px 0;
  color: #0f172a;
  line-height: 1.2;
}

.description {
  color: #64748b;
  font-size: 16px;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
}

/* CONTAINER SLIDER (100% FULL WIDTH) */
.slider-wrapper {
  margin-bottom: 35px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 35px -5px rgba(0, 0, 0, 0.12);
  width: 100%;
  background-color: #000;
}

.slider-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9; /* Rasio gambar seimbang */
  background-color: #0f172a;
}

/* POSISI & KETEPATAN GAMBAR LANTAI */
.img-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  /* PENTING: Mengunci fokus tampilan ke 85% area bawah (murni fokus pada lantai) */
  object-position: center 85%;

  user-select: none;
  pointer-events: none;
}

.img-before-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: clip-path;
}

.img-before {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 85%; /* Harus sama persis dengan img-layer agar gambar sinkron */
}

/* BADGES / LABELS modern (KACA BLUR) */
.label {
  position: absolute;
  top: 20px;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #ffffff;
  padding: 8px 22px;
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 2px;
  border-radius: 8px;
  z-index: 5;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.badge-before { left: 24px; }
.badge-after { right: 24px; }

/* SLIDER HANDLE (GARIS & TOMBOL KUNING EMAS) */
.slider-handle-visual {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: #f59e0b; /* Kuning Emas */
  z-index: 10;
  transform: translateX(-50%);
  pointer-events: none;
  box-shadow: 0 0 10px rgba(245, 158, 11, 0.5);
}

.slider-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  background-color: #f59e0b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
  border: 2px solid #ffffff;
}

.slider-button svg {
  margin: 0 -3px;
}

/* INPUT TRANSPARAN USER INTERACTION */
.slider-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: ew-resize;
  z-index: 20;
  margin: 0;
}

/* FOOTER DESKRIPSI (RAPI & SIMETRIS) */
.footer-details {
  display: flex;
  align-items: stretch;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 28px 36px;
  gap: 36px;
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.04);
}

.vertical-divider {
  width: 3px;
  background-color: #f59e0b;
  border-radius: 2px;
  flex-shrink: 0;
}

.detail-box {
  flex: 1;
}

.detail-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 800;
  margin: 0 0 10px 0;
  color: #b30000;
  letter-spacing: 0.5px;
}

.detail-title.text-gray {
  color: #475569;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.dot-red { background-color: #dc2626; }
.dot-yellow { background-color: #f59e0b; }

.detail-text {
  font-size: 14px;
  line-height: 1.65;
  color: #475569;
  margin: 0;
}

/* RESPONSIVE DESIGN */
@media (max-width: 900px) {
  .title { font-size: 28px; }
  .slider-wrapper { border-radius: 12px; }
  .label {
    font-size: 12px;
    padding: 6px 14px;
    top: 14px;
  }
  .badge-before { left: 14px; }
  .badge-after { right: 14px; }

  .slider-button {
    width: 38px;
    height: 38px;
  }

  .footer-details {
    flex-direction: column;
    padding: 24px;
    gap: 20px;
  }
  .vertical-divider {
    width: 100%;
    height: 3px;
  }
}
</style>
