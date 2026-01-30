<script setup>

import DefaultTheme from "vitepress/theme-without-fonts";
import ExamplesGrid from "./ExamplesGrid.vue";

const { Layout } = DefaultTheme;

</script>

<template>
  <Layout>
    <template #home-features-before>
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
