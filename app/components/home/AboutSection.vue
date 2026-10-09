<template>
  <section class="about-section">
    <div class="about-container">

      <!-- Kolom Kiri (Gambar & Floating Card) -->
      <div class="about-image-wrapper">
        <!-- Ganti URL ini dengan gambar tim pekerja Anda -->
        <img src="/images/Services/EpoxyFlooring.jpg" alt="Pekerja Epoxy Flooring" class="about-image" />

        <div class="about-floating-card">
          <div class="card-header">
            <!-- Ikon Shield Check -->
            <svg class="shield-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h4 class="card-title">Terpercaya</h4>
          </div>
          <p class="card-desc">Menangani proyek skala industrial, pergudangan, hingga retail komersial.</p>
        </div>
      </div>

      <!-- Kolom Kanan (Teks Penjelasan) -->
      <div class="about-text-wrapper">

        <!-- Label Atas -->
        <div class="about-label">
          <span class="label-dot"></span>
          <span class="label-text">TENTANG KAMI</span>
        </div>

        <!-- Heading -->
        <h2 class="about-heading">
          Mitra Profesional untuk Kebutuhan Epoxy Flooring Anda
        </h2>

        <!-- Garis Pemisah -->
        <div class="about-title-divider"></div>

        <!-- Paragraf -->
        <p class="about-paragraph">
          PT Multi Artha Kreasindo merupakan perusahaan yang bergerak di bidang epoxy flooring dan coating, dengan fokus memberikan solusi pelapisan lantai yang berkualitas, rapi, dan sesuai dengan kebutuhan setiap proyek.
        </p>

        <p class="about-paragraph">
          Kami mengutamakan ketelitian dalam proses pengerjaan, kualitas hasil akhir, dan pemahaman terhadap kebutuhan setiap pelanggan guna memastikan lantai yang kuat, higienis, serta estetis.
        </p>

        <!-- Tautan/Link -->
        <NuxtLink to="/keunggulan" class="about-link">
          Selengkapnya Mengenai Keunggulan <span class="arrow-right">→</span>
        </NuxtLink>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* Reset Dasar (opsional jika sudah ada di global css) */
* {
  box-sizing: border-box;
}

.about-section {
  background-color: #f7f7f7; /* Background abu-abu terang */
  padding: 6rem 2rem;
  font-family: 'Arial', sans-serif; /* Sesuaikan dengan font project Anda */
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* ================================
   Area Gambar Kiri
   ================================ */
.about-image-wrapper {
  position: relative;
  width: 100%;
}

.about-image {
  width: 100%;
  border-radius: 8px;
  display: block;
  object-fit: cover;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}

.about-floating-card {
  position: absolute;
  bottom: -30px;
  right: -30px;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  width: 280px;
  z-index: 2;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.shield-icon {
  width: 28px;
  height: 28px;
  color: #991b1b; /* Merah gelap */
}

.card-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #111111;
}

.card-desc {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.5;
  color: #666666;
}

/* ================================
   Area Teks Kanan
   ================================ */
.about-text-wrapper {
  padding-left: 20px;
}

.about-label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.label-dot {
  width: 8px;
  height: 8px;
  background-color: #991b1b; /* Merah gelap */
  border-radius: 50%;
}

.label-text {
  color: #991b1b;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.about-heading {
  font-size: 2.5rem;
  font-weight: 800;
  color: #111111;
  line-height: 1.2;
  margin: 0 0 20px 0;
}

.about-title-divider {
  width: 60px;
  height: 3px;
  background-color: #d4af37; /* Kuning emas */
  margin-bottom: 24px;
}

.about-paragraph {
  font-size: 1rem;
  line-height: 1.7;
  color: #555555;
  margin-bottom: 16px;
}

.about-link {
  display: inline-flex;
  align-items: center;
  margin-top: 16px;
  font-size: 1rem;
  font-weight: 700;
  color: #991b1b;
  text-decoration: none;
  transition: color 0.3s ease;
}

.about-link:hover {
  color: #7f1414;
}

.arrow-right {
  margin-left: 8px;
  font-size: 1.2rem;
}

/* ================================
   Responsif (Mobile & Tablet)
   ================================ */
@media (max-width: 992px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-text-wrapper {
    padding-left: 0;
  }

  .about-floating-card {
    right: 20px;
    bottom: -20px;
  }
}

@media (max-width: 768px) {
  .about-heading {
    font-size: 2rem;
  }

  /* Mengatur ulang posisi card agar tidak terpotong di layar kecil */
  .about-floating-card {
    position: relative;
    right: 0;
    bottom: 0;
    margin-top: -30px;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
}
</style>
