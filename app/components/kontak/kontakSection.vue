<template>
  <section class="py-20 bg-white text-neutral-900 relative overflow-hidden">
    <!-- Decorative background glow -->
    <div
      class="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#c41215]/5 blur-[120px] pointer-events-none rounded-full"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-[#e5c158]/15 blur-[120px] pointer-events-none rounded-full"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 rounded-full mb-3 shadow-sm"
        >
          <span class="w-2 h-2 rounded-full bg-[#c41215]"></span>
          <span class="text-xs font-semibold text-neutral-700 uppercase tracking-wider">Mari Terhubung</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
          Siap Membantu Proyek & <span class="text-[#c41215]">Kebutuhan Anda</span>
        </h2>
        <p class="text-neutral-600 text-sm sm:text-base leading-relaxed">
          Pilih saluran komunikasi yang paling nyaman bagi Anda atau kirimkan pesan langsung melalui formulir di bawah
          ini.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <!-- KOLOM KIRI: Informasi Kontak & Sosial Media -->
        <div class="lg:col-span-5 space-y-8">
          <!-- Card Kontak Cepat -->
          <div class="bg-neutral-50/80 border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-sm backdrop-blur-sm">
            <h3
              class="text-xl font-bold text-neutral-900 mb-6 border-b border-neutral-200 pb-3 flex items-center gap-2"
            >
              <span class="text-[#c41215]">✦</span> Kontak Langsung
            </h3>

            <div class="space-y-5">
              <!-- WhatsApp -->
              <a
                href="https://wa.me/6281111852220"
                target="_blank"
                rel="noopener"
                class="flex items-center gap-4 p-3.5 bg-white hover:bg-emerald-50/60 border border-neutral-200 hover:border-emerald-400 rounded-xl transition-all shadow-sm group"
              >
                <div
                  class="w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform"
                >
                  <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-neutral-500 font-medium">WhatsApp Official</p>
                  <p class="text-sm font-bold text-neutral-900 group-hover:text-emerald-600 transition-colors">
                    0811-1185-2220
                  </p>
                </div>
              </a>

              <!-- Phone -->
              <a
                href="tel:082213978167"
                class="flex items-center gap-4 p-3.5 bg-white hover:bg-amber-50/60 border border-neutral-200 hover:border-amber-400 rounded-xl transition-all shadow-sm group"
              >
                <div
                  class="w-11 h-11 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform"
                >
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-neutral-500 font-medium">Telepon Kantor</p>
                  <p class="text-sm font-bold text-neutral-900 group-hover:text-[#b8860b] transition-colors">
                    0822-1397-8167
                  </p>
                </div>
              </a>

              <!-- Email -->
              <a
                href="mailto:multiarthakreasindo@gmail.com"
                class="flex items-center gap-4 p-3.5 bg-white hover:bg-red-50/60 border border-neutral-200 hover:border-red-300 rounded-xl transition-all shadow-sm group"
              >
                <div
                  class="w-11 h-11 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-[#c41215] group-hover:scale-110 transition-transform"
                >
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div class="overflow-hidden">
                  <p class="text-xs text-neutral-500 font-medium">Email Resmi</p>
                  <p
                    class="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-[#c41215] transition-colors truncate"
                  >
                    multiarthakreasindo@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          <!-- Card Media Sosial -->
          <div class="bg-neutral-50/80 border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-sm backdrop-blur-sm">
            <h3 class="text-lg font-bold text-neutral-900 mb-2">Ikuti Media Sosial Kami</h3>
            <p class="text-xs text-neutral-500 mb-6">
              Dapatkan update produk terbaru, portofolio proyek, dan konten edukasi menarik.
            </p>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <!-- WhatsApp -->
              <a
                href="https://wa.me/6281111852220"
                target="_blank"
                rel="noopener"
                class="flex flex-col items-center justify-center gap-2 p-3.5 bg-white hover:bg-emerald-50 border border-neutral-200 hover:border-emerald-300 rounded-xl transition-all shadow-sm group text-center"
              >
                <div
                  class="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform"
                >
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                    />
                  </svg>
                </div>
                <span class="text-xs font-semibold text-neutral-700 group-hover:text-emerald-600">WhatsApp</span>
              </a>

              <!-- Instagram -->
              <a
                href="https://instagram.com/jasaepoxy_lantai?obrf=MXI2dXIxaG91ajQ1Yw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener"
                class="flex flex-col items-center justify-center gap-2 p-3.5 bg-white hover:bg-pink-50 border border-neutral-200 hover:border-pink-300 rounded-xl transition-all shadow-sm group text-center"
              >
                <div
                  class="w-9 h-9 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform"
                >
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                </div>
                <span class="text-xs font-semibold text-neutral-700 group-hover:text-pink-600">Instagram</span>
              </a>

              <!-- TikTok -->
              <a
                href="https://www.tiktok.com/@multipaint_epoxycat?_r=1&_t=ZS-9AXoWWxC7m6"
                target="_blank"
                rel="noopener"
                class="flex flex-col items-center justify-center gap-2 p-3.5 bg-white hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-400 rounded-xl transition-all shadow-sm group text-center"
              >
                <div
                  class="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:scale-110 transition-transform"
                >
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.31 1.56-1.28 2.55.02.82.42 1.61 1.08 2.1 1.12.83 2.7.77 3.75-.14.71-.62 1.12-1.54 1.14-2.48.01-4.77.01-9.53.01-14.3.01-.01.01-.02.01-.03z"
                    />
                  </svg>
                </div>
                <span class="text-xs font-semibold text-neutral-700 group-hover:text-black">TikTok</span>
              </a>
            </div>
          </div>
        </div>

        <!-- KOLOM KANAN: Formulir Pesan / Konsultasi (Terkirim ke WhatsApp) -->
        <div class="lg:col-span-7">
          <div
            class="bg-neutral-50/80 border border-neutral-200 rounded-2xl p-6 sm:p-10 shadow-sm backdrop-blur-sm relative"
          >
            <div class="mb-8">
              <h3 class="text-2xl font-bold text-neutral-900 mb-2">Kirim Pesan atau Pertanyaan</h3>
              <p class="text-xs sm:text-sm text-neutral-500">
                Isi formulir di bawah ini dan Anda akan langsung terhubung ke WhatsApp Official kami.
              </p>
            </div>

            <form @submit.prevent="sendToWhatsapp" class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <!-- Nama Lengkap -->
                <div>
                  <label class="block text-xs font-semibold text-neutral-700 mb-2">Nama Lengkap *</label>
                  <input
                    v-model="form.nama"
                    type="text"
                    placeholder="Contoh: Budi Santoso"
                    required
                    class="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#c41215] focus:ring-1 focus:ring-[#c41215] transition-all"
                  />
                </div>

                <!-- Perusahaan / Instansi -->
                <div>
                  <label class="block text-xs font-semibold text-neutral-700 mb-2">Nama Perusahaan / Proyek</label>
                  <input
                    v-model="form.perusahaan"
                    type="text"
                    placeholder="Contoh: PT Industri Jaya"
                    class="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#c41215] focus:ring-1 focus:ring-[#c41215] transition-all"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <!-- Email -->
                <div>
                  <label class="block text-xs font-semibold text-neutral-700 mb-2">Alamat Email *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="budi@perusahaan.com"
                    required
                    class="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#c41215] focus:ring-1 focus:ring-[#c41215] transition-all"
                  />
                </div>

                <!-- Nomor Telepon / WhatsApp -->
                <div>
                  <label class="block text-xs font-semibold text-neutral-700 mb-2">Nomor WhatsApp *</label>
                  <input
                    v-model="form.whatsapp"
                    type="tel"
                    placeholder="081234567890"
                    required
                    class="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#c41215] focus:ring-1 focus:ring-[#c41215] transition-all"
                  />
                </div>
              </div>

              <!-- Topik Layanan -->
              <div>
                <label class="block text-xs font-semibold text-neutral-700 mb-2">Topik Kebutuhan</label>
                <select
                  v-model="form.topik"
                  class="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:border-[#c41215] focus:ring-1 focus:ring-[#c41215] transition-all"
                >
                  <option value="" disabled selected>Pilih Kebutuhan / Konsultasi</option>
                  <option value="Coating & Flooring Industri">Coating & Flooring Industri</option>
                  <option value="Permintaan Katalog & Spesifikasi Tech">Permintaan Katalog & Spesifikasi Tech</option>
                  <option value="Permintaan Sampel Produk">Permintaan Sampel Produk</option>
                  <option value="Kerjasama / Distributor B2B">Kerjasama / Distributor B2B</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <!-- Pesan -->
              <div>
                <label class="block text-xs font-semibold text-neutral-700 mb-2">Pesan / Detail Proyek *</label>
                <textarea
                  v-model="form.pesan"
                  rows="4"
                  placeholder="Jelaskan kebutuhan volume, estimasi area, atau pertanyaan teknis Anda..."
                  required
                  class="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#c41215] focus:ring-1 focus:ring-[#c41215] transition-all resize-none"
                ></textarea>
              </div>

              <!-- Tombol Submit -->
              <button
                type="submit"
                class="w-full bg-[#c41215] hover:bg-[#a80e11] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-red-600/20 hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Kirim via WhatsApp Sekarang</span>
                <svg
                  class="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  nama: "",
  perusahaan: "",
  email: "",
  whatsapp: "",
  topik: "",
  pesan: "",
});

const sendToWhatsapp = () => {
  const targetNumber = "6281111852220";
  const text =
    `Halo PT Multi Artha Kreasindo, saya ingin berkonsultasi:\n\n` +
    `*Nama:* ${form.value.nama}\n` +
    `*Perusahaan/Proyek:* ${form.value.perusahaan || "-"}\n` +
    `*Email:* ${form.value.email}\n` +
    `*No. WA:* ${form.value.whatsapp}\n` +
    `*Topik:* ${form.value.topik || "-"}\n` +
    `*Pesan:* ${form.value.pesan}`;

  const encodedText = encodeURIComponent(text);
  window.open(`https://wa.me/${targetNumber}?text=${encodedText}`, "_blank");
};
</script>
