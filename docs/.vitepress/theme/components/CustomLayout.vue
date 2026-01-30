<script setup>

import DefaultTheme from "vitepress/theme-without-fonts";
import ExamplesGrid from "./ExamplesGrid.vue";

const { Layout } = DefaultTheme;

</script>

<template>
  <Layout>
    <template #home-hero-before>
      <ExamplesGrid />
    </template>
  </Layout>
</template>

<style>
.VPHome .VPFeature {
  background-color: rgba(246, 246, 247, 0.5);
  backdrop-filter: blur(10px);
}

.dark .VPHome .VPFeature {
  background-color: rgba(37, 37, 41, 0.5);
}

.VPNavBarExtra,
.VPNavBarHamburger {
  display: none !important;
}

.VPHome {
  overflow: hidden;
}

/* Position gallery over hero with more transparency */
.VPHome .examples-grid {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 15 !important;
  opacity: 0.4 !important;
  height: 600px !important;
}

/* Ensure hero stays below gallery with stronger background */
.VPHome .VPHero {
  position: relative;
  z-index: 5;
  background: linear-gradient(to bottom, rgba(255,255,255,0.98), rgba(255,255,255,0.95));
  padding-bottom: 2rem;
}

.dark .VPHome .VPHero {
  background: linear-gradient(to bottom, rgba(15,15,15,0.98), rgba(15,15,15,0.95));
}

/* Ensure features section appears below gallery */
.VPHome .VPFeatures {
  position: relative;
  z-index: 20;
  background: white;
}

.dark .VPHome .VPFeatures {
  background: var(--vp-c-bg);
}

@media (min-width: 768px) {
  .DocSearch-Button {
    border-radius: 1000px;
    padding-right: 0.75rem;
    height: 2rem;
  }
}

.VPHome .VPHero .container {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1000px !important;
}

.VPHome .VPHero .main {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  order: 1;
}

.VPHome .VPHero .name,
.VPHome .VPHero .text,
.VPHome .VPHero .tagline {
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
}

.VPHome .VPHero .actions {
  display: flex;
  justify-content: center;
}

.VPHome .VPHero .image {
  display: none !important;
}
</style>
