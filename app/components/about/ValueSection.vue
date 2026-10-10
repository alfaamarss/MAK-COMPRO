<script setup lang="ts">
const values = [
  {
    number: "01",
    title: "Kualitas Pekerjaan",
    description:
      "Menggunakan material berkualitas untuk hasil yang kuat dan tahan lama.",
  },
  {
    number: "02",
    title: "Pengerjaan Profesional",
    description:
      "Dikerjakan oleh aplikator berpengalaman dengan proses kerja yang profesional.",
  },
  {
    number: "03",
    title: "Finishing Berkualitas",
    description:
      "Menghasilkan permukaan seamless, rapi, presisi, dan mudah dirawat.",
  },
  {
    number: "04",
    title: "Solusi Sesuai Proyek",
    description:
      "Spesifikasi dan metode pengerjaan disesuaikan dengan kebutuhan setiap proyek.",
  },
];
</script>

<template>
  <section class="value-section">
    <div class="value-container">
      <article v-for="value in values" :key="value.number" class="value-card">
        <span class="value-number">
          {{ value.number }}
        </span>

        <span class="value-divider"></span>

        <h2 class="value-title">
          {{ value.title }}
        </h2>

        <p class="value-desc">
          {{ value.description }}
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.value-section {
  width: 100%;
  padding: 4rem 2rem;

  background: #f7f7f7;
}

.value-container {
  width: 100%;
  max-width: 1280px;

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 2.5rem;
}

.value-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.value-number {
  margin-bottom: 8px;

  color: #991b1b;

  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
}

.value-divider {
  width: 40px;
  height: 3px;

  margin-bottom: 16px;

  background: #d4af37;
}

.value-title {
  margin: 0 0 8px;

  color: #111;

  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.3;
}

.value-desc {
  margin: 0;

  color: #666;

  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .value-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .value-section {
    padding: 3rem 1.5rem;
  }

  .value-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>
