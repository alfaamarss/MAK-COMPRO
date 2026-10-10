<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const currentSlide = ref(0);

const slides = [
  {
    image: "/images/Hero1.jpeg",
    eyebrow: "SOLUSI EPOXY & CAT INDUSTRIAL",
    title: "Solusi Epoxy & Cat Industrial",
    highlight: "Profesional",
    titleAfter: "untuk Berbagai Kebutuhan Industri",
    description:
      "Menghadirkan solusi epoxy flooring, epoxy coating, dan cat industrial untuk kebutuhan industri, gudang, workshop, dan berbagai fasilitas lainnya. Dengan aplikasi profesional untuk hasil yang kuat, tahan lama, dan rapi.",
  },
  {
    image: "/images/Hero2.jpeg",
    eyebrow: "EPOXY FLOORING",
    title: "Lantai Industrial yang",
    highlight: "Kuat & Tahan Lama",
    titleAfter: "",
    description:
      "Solusi epoxy flooring dengan permukaan seamless, mudah dibersihkan, dan dirancang untuk menghadapi aktivitas industri dengan intensitas tinggi.",
  },
  {
    image: "/images/Hero3.jpeg",
    eyebrow: "INDUSTRIAL COATING",
    title: "Perlindungan Permukaan",
    highlight: "Profesional & Berkualitas",
    titleAfter: "",
    description:
      "Layanan coating dan pengecatan industrial untuk membantu melindungi permukaan sekaligus memberikan hasil akhir yang rapi dan profesional.",
  },
];

let sliderInterval: ReturnType<typeof setInterval>;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

onMounted(() => {
  sliderInterval = setInterval(nextSlide, 6000);
});

onBeforeUnmount(() => {
  clearInterval(sliderInterval);
});
</script>

<template>
  <section class="hero-section">
    <!-- Background Slider -->
    <TransitionGroup name="slide-fade">
      <div
        v-for="(slide, index) in slides"
        v-show="currentSlide === index"
        :key="slide.image"
        class="hero-background"
        :style="{ backgroundImage: `url('${slide.image}')` }"
      />
    </TransitionGroup>

    <!-- Overlay -->
    <div class="hero-overlay"></div>

    <!-- Content -->
    <div class="hero-content">
      <Transition name="content-fade" mode="out-in">
        <div :key="currentSlide" class="hero-eyebrow">
          <span class="eyebrow-square"></span>
          <span class="eyebrow-text">
            {{ slides[currentSlide].eyebrow }}
          </span>
        </div>
      </Transition>

      <Transition name="content-fade" mode="out-in">
        <h1 :key="`heading-${currentSlide}`" class="hero-heading">
          {{ slides[currentSlide].title }}

          <span class="text-yellow">
            {{ slides[currentSlide].highlight }}
          </span>

          <br />

          {{ slides[currentSlide].titleAfter }}
        </h1>
      </Transition>

      <Transition name="content-fade" mode="out-in">
        <p :key="`description-${currentSlide}`" class="hero-description">
          {{ slides[currentSlide].description }}
        </p>
      </Transition>

      <!-- Buttons -->
      <div class="hero-buttons">
        <NuxtLink to="/kontak" class="btn btn-primary">
          Konsultasi Sekarang
          <span class="arrow">→</span>
        </NuxtLink>

        <NuxtLink to="/proyek" class="btn btn-secondary">
          Lihat Proyek
        </NuxtLink>
      </div>

      <!-- Features -->
      <div class="hero-features">
        <div class="feature-item">
          <span class="icon"> ✓ </span>
          <span>Material Berkualitas</span>
        </div>

        <span class="dot"></span>

        <div class="feature-item">
          <span class="icon"> ✓ </span>
          <span>Pengerjaan Profesional</span>
        </div>

        <span class="dot"></span>

        <div class="feature-item">
          <span class="icon"> ✓ </span>
          <span>Finishing Rapi</span>
        </div>

        <span class="dot"></span>

        <div class="feature-item">
          <span class="icon"> ✓ </span>
          <span>Sesuai Kebutuhan</span>
        </div>
      </div>
    </div>

    <!-- Slider Controls -->
    <div class="slider-controls">
      <button
        type="button"
        class="slider-arrow"
        aria-label="Slide sebelumnya"
        @click="prevSlide"
      >
        ←
      </button>

      <div class="slider-dots">
        <button
          v-for="(_, index) in slides"
          :key="index"
          type="button"
          class="slider-dot"
          :class="{ active: currentSlide === index }"
          :aria-label="`Ke slide ${index + 1}`"
          @click="goToSlide(index)"
        />
      </div>

      <button
        type="button"
        class="slider-arrow"
        aria-label="Slide berikutnya"
        @click="nextSlide"
      >
        →
      </button>
    </div>

    <!-- Counter -->
    <div class="slide-counter">
      <span>
        {{ String(currentSlide + 1).padStart(2, "0") }}
      </span>

      <span class="counter-line"></span>

      <span>
        {{ String(slides.length).padStart(2, "0") }}
      </span>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  background: #111;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

/* Background transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    opacity 0.8s ease,
    transform 6s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: scale(1.04);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: scale(1);
}

/* Overlay */
.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;

  background: linear-gradient(
    to right,
    rgba(10, 10, 10, 0.97) 0%,
    rgba(10, 10, 10, 0.88) 35%,
    rgba(10, 10, 10, 0.6) 60%,
    rgba(10, 10, 10, 0.15) 100%
  );
}

/* Content */
.hero-content {
  position: relative;
  z-index: 10;

  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
  padding: 7rem 3rem 8rem;
}

/* Eyebrow */
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 20px;
  padding: 7px 14px;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;

  background: rgba(30, 30, 30, 0.55);
  backdrop-filter: blur(5px);
}

.eyebrow-square {
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  background: #fce18d;
}

.eyebrow-text {
  color: #d4d4d4;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.6px;
}

/* Heading */
.hero-heading {
  max-width: 850px;

  margin: 0 0 20px;

  color: #fff;

  font-size: clamp(42px, 4vw, 58px);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -1.5px;
}

.text-yellow {
  color: #fce18d;
}

/* Description */
.hero-description {
  max-width: 620px;

  margin: 0 0 32px;

  color: #d4d4d4;

  font-size: 16px;
  line-height: 1.65;
}

/* Buttons */
.hero-buttons {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  margin-bottom: 38px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 12px 26px;

  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  cursor: pointer;

  transition:
    background-color 0.25s ease,
    transform 0.25s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: #b91c1c;
  color: #fff;
}

.btn-primary:hover {
  background: #991b1b;
}

.btn-secondary {
  background: #fff;
  color: #450a0a;
}

.btn-secondary:hover {
  background: #e5e5e5;
}

.arrow {
  margin-left: 8px;
  font-size: 17px;
  line-height: 1;
}

/* Features */
.hero-features {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  color: #d4d4d4;

  font-size: 13px;
  font-weight: 500;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 7px;
}

.icon {
  display: flex;
  align-items: center;

  color: #fce18d;
  font-weight: 700;
}

.dot {
  width: 4px;
  height: 4px;

  flex-shrink: 0;

  border-radius: 50%;
  background: #737373;
}

/* Slider Controls */
.slider-controls {
  position: absolute;
  z-index: 20;

  right: max(3rem, calc((100% - 1280px) / 2));
  bottom: 32px;

  display: flex;
  align-items: center;
  gap: 14px;
}

.slider-arrow {
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid rgba(255, 255, 255, 0.25);

  background: rgba(0, 0, 0, 0.35);
  color: #fff;

  font-size: 16px;

  cursor: pointer;

  transition:
    background-color 0.25s ease,
    border-color 0.25s ease;
}

.slider-arrow:hover {
  background: #b91c1c;
  border-color: #b91c1c;
}

.slider-dots {
  display: flex;
  align-items: center;
  gap: 7px;
}

.slider-dot {
  width: 7px;
  height: 7px;

  padding: 0;

  border: 0;
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.4);

  cursor: pointer;

  transition:
    width 0.3s ease,
    background-color 0.3s ease;
}

.slider-dot.active {
  width: 24px;

  border-radius: 4px;

  background: #fce18d;
}

/* Counter */
.slide-counter {
  position: absolute;
  z-index: 20;

  left: max(3rem, calc((100% - 1280px) / 2));
  bottom: 35px;

  display: flex;
  align-items: center;
  gap: 10px;

  color: rgba(255, 255, 255, 0.8);

  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
}

.counter-line {
  width: 35px;
  height: 1px;

  background: rgba(255, 255, 255, 0.4);
}

/* Content transition */
.content-fade-enter-active,
.content-fade-leave-active {
  transition:
    opacity 0.45s ease,
    transform 0.45s ease;
}

.content-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.content-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Tablet */
@media (max-width: 1100px) {
  .hero-content {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .hero-heading {
    max-width: 720px;
    font-size: 50px;
  }

  .slider-controls {
    right: 2rem;
  }

  .slide-counter {
    left: 2rem;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .hero-section {
    min-height: 100svh;
  }

  .hero-content {
    padding: 7rem 1.5rem 8rem;
  }

  .hero-overlay {
    background: linear-gradient(
      to right,
      rgba(10, 10, 10, 0.92),
      rgba(10, 10, 10, 0.7)
    );
  }

  .hero-eyebrow {
    margin-bottom: 16px;
    padding: 6px 11px;
  }

  .eyebrow-text {
    font-size: 9px;
    letter-spacing: 1.2px;
  }

  .hero-heading {
    max-width: 100%;
    font-size: 40px;
    line-height: 1.1;
    letter-spacing: -1px;
  }

  .hero-description {
    max-width: 100%;
    margin-bottom: 26px;

    font-size: 15px;
    line-height: 1.6;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;

    margin-bottom: 30px;
  }

  .btn {
    width: 100%;
    padding: 13px 20px;
  }

  .hero-features {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    font-size: 12px;
  }

  .dot {
    display: none;
  }

  .slider-controls {
    right: 1.5rem;
    bottom: 25px;
    gap: 10px;
  }

  .slider-arrow {
    width: 34px;
    height: 34px;
    font-size: 14px;
  }

  .slider-dot {
    width: 6px;
    height: 6px;
  }

  .slider-dot.active {
    width: 20px;
  }

  .slide-counter {
    left: 1.5rem;
    bottom: 28px;

    font-size: 10px;
  }

  .counter-line {
    width: 25px;
  }
}

/* Small mobile */
@media (max-width: 480px) {
  .hero-content {
    padding-top: 6.5rem;
  }

  .hero-heading {
    font-size: 34px;
  }

  .hero-description {
    font-size: 14px;
  }

  .hero-features {
    font-size: 11px;
  }
}
</style>
