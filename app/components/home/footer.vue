<template>
  <footer class="site-footer">
    <!-- CTA Callout Banner -->
    <div class="footer-cta-section">
      <div class="container">
        <div class="cta-badge">
          <span>KONSULTASI TEKNIS & PENGADAAN MATERIAL</span>
        </div>
        <h2 class="cta-title">
          Butuh Bantuan Memilih Produk Cat & Coating yang Tepat?
        </h2>
        <p class="cta-description">
          Konsultasikan kebutuhan spesifikasi material, luas area, estimasi jumlah pail cat, atau permintaan kustomisasi formulasi batch khusus bersama tim teknis PT Multi Artha Kreasindo.
        </p>

        <div class="cta-actions">
          <a href="https://wa.me/628xxxxxxxxxx" target="_blank" class="btn-whatsapp">
            <span>💬 Konsultasi Sekarang via WhatsApp &rarr;</span>
          </a>
          <a href="#kontak" class="btn-outline">
            <span>📞 Hubungi Tim Penjualan & Distribusi</span>
          </a>
        </div>

        <div class="cta-features">
          <span>PENGIRIMAN SELURUH INDONESIA</span>
          <span class="dot">&bull;</span>
          <span>DUKUNGAN APLIKATOR MITRA</span>
          <span class="dot">&bull;</span>
          <span>FORMULA STANDAR PABRIKAN</span>
        </div>
      </div>
    </div>

    <!-- Main Footer Links & Info -->
    <div class="footer-main-section">
      <div class="container">
        <div class="footer-grid">
          <!-- Col 1: Brand Info -->
          <div class="footer-col brand-col">
            <h3 class="footer-brand-title">PT Multi Artha Kreasindo</h3>
            <p class="footer-brand-desc">
              Solusi profesional epoxy flooring dan coating untuk berbagai kebutuhan industri, komersial, dan fasilitas lainnya.
            </p>
            <div class="certified-badge">
              INDUSTRIAL CERTIFIED QUALITY
            </div>
          </div>

          <!-- Col 2: Layanan -->
          <div class="footer-col">
            <h4 class="footer-heading">Layanan</h4>
            <ul class="footer-links">
              <li><a href="#">Epoxy Flooring</a></li>
              <li><a href="#">Epoxy Self Leveling</a></li>
              <li><a href="#">Epoxy Coating</a></li>
              <li><a href="#">Industrial Flooring</a></li>
              <li><a href="#">Warehouse Flooring</a></li>
              <li><a href="#">Floor Repair</a></li>
            </ul>
          </div>

          <!-- Col 3: Perusahaan -->
          <div class="footer-col">
            <h4 class="footer-heading">Perusahaan</h4>
            <ul class="footer-links">

            </ul>
          </div>

          <!-- Col 4: Hubungi Kami -->
          <div class="footer-col">
            <h4 class="footer-heading">Hubungi Kami</h4>
            <ul class="footer-contact-links">
              <li><a href="#">💬 WhatsApp Official</a></li>
              <li><a href="#">📞 Telepon Kantor</a></li>
              <li><a href="#">✉️ Email Rekanan</a></li>
              <li><a href="#">📍 Lokasi & Workshop</a></li>
            </ul>
          </div>
        </div>

        <!-- Footer Bottom Bar -->
        <div class="footer-bottom">
          <p class="copyright">
            &copy; 2026 PT Multi Artha Kreasindo. All Rights Reserved.
          </p>
          <div class="footer-bottom-right">
            <span>HEAVY INDUSTRIAL STANDARD</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Tambahkan logika interaktif jika diperlukan di sini
</script>

<style scoped>
.site-footer {
  font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
  color: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ================= CTA BANNER SECTION ================= */
.footer-cta-section {
  background-color: #781c1c; /* Warna merah marun khas industri */
  background-image: linear-gradient(135deg, #8a1f1f 0%, #611313 100%);
  padding: 70px 20px 60px 20px;
  text-align: center;
  position: relative;
  border-bottom: 3px solid #f59e0b; /* Garis aksen kuning emas */
}

.cta-badge {
  display: inline-block;
  margin-bottom: 20px;
}

.cta-badge span {
  background-color: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cta-title {
  font-size: 32px;
  font-weight: 800;
  color: #ffffff;
  max-width: 800px;
  margin: 0 auto 16px auto;
  line-height: 1.3;
}

.cta-description {
  font-size: 15px;
  color: #e2e8f0;
  max-width: 750px;
  margin: 0 auto 35px auto;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 35px;
}

.btn-whatsapp {
  background-color: #ffffff;
  color: #781c1c;
  padding: 14px 28px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-whatsapp:hover {
  background-color: #f1f5f9;
  transform: translateY(-2px);
}

.btn-outline {
  background-color: transparent;
  color: #ffffff;
  padding: 14px 28px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: all 0.2s ease;
}

.btn-outline:hover {
  border-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.05);
}

.cta-features {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.8px;
  color: #cbd5e1;
}

.cta-features .dot {
  color: #f59e0b;
}

/* ================= MAIN FOOTER SECTION ================= */
.footer-main-section {
  background-color: #121212; /* Warna latar belakang gelap hitam */
  padding: 60px 20px 30px 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;
  margin-bottom: 50px;
}

@media (min-width: 640px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  }
}

.footer-brand-title {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 12px 0;
}

.footer-brand-desc {
  font-size: 14px;
  color: #94a3b8;
  line-height: 1.6;
  margin: 0 0 20px 0;
}

.certified-badge {
  display: inline-block;
  background: transparent;
  border: 1px solid #ca8a04;
  color: #eab308;
  font-size: 11px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 4px;
  letter-spacing: 0.5px;
}

.footer-heading {
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 20px 0;
  position: relative;
}

/* Garis aksen merah tipis di sebelah kiri judul heading */
.footer-heading::before {
  content: '';
  position: absolute;
  left: -12px;
  top: 2px;
  bottom: 2px;
  width: 3px;
  background-color: #dc2626;
}

.footer-links, .footer-contact-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links li a, .footer-contact-links li a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}

.footer-links li a:hover, .footer-contact-links li a:hover {
  color: #ffffff;
}

/* ================= FOOTER BOTTOM ================= */
.footer-bottom {
  border-top: 1px solid #262626;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #737373;
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
  }
}

.copyright {
  margin: 0;
}

.footer-bottom-right {
  font-weight: 600;
  letter-spacing: 0.5px;
}
</style>
