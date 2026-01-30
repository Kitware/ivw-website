<script setup>
import { ref, onMounted, onUnmounted } from "vue";

let pointerframe;
let clientX;

const thumbnails = Array.from({ length: 16 }, (_, i) => `image_${i + 1}.jpg`);
const xn = ref(6); // number of columns
const yn = ref(5); // number of rows
const x = ref(0.5); // normalized horizontal pointer position

function onpointermove(event) {
  if (!pointerframe) pointerframe = requestAnimationFrame(afterpointermove);
  clientX = event.clientX;
}

function afterpointermove() {
  pointerframe = null;
  x.value = clientX / document.body.clientWidth;
}

onMounted(() => {
  addEventListener("pointermove", onpointermove);
});

onUnmounted(() => {
  removeEventListener("pointermove", onpointermove);
});
</script>

<template>
  <div :class="$style.examples" :style="{ transform: `translate(${55 - x * 10}vw, 50%)` }">
    <div v-for="(image, i) in thumbnails" :key="i" :class="$style.item">
      <a :class="$style.link" :href="`/ivw-website/examples/${image.replace('.jpg', '.html')}`" :style="{
        '--x': (i % xn) - xn / 2 + (Math.floor(i / xn) % 2) * 0.5,
        '--y': Math.floor(i / xn) - yn / 2,
      }">
        <img :src="`/ivw-website/${image}`" width="480" height="300" alt="" />
      </a>
    </div>
  </div>
</template>

<style module>
.examples {
  position: relative;
  height: 480px;
  transition: transform 150ms ease-out;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  --grid-width: 140px;
}

@media (min-width: 640px) {
  .examples {
    --grid-width: 160px;
  }
}

@media (min-width: 960px) {
  .examples {
    --grid-width: 200px;
  }
}

.item {
  position: relative;
  transition: filter 250ms ease-out;
  animation: fade-in 350ms cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s backwards;
}

.item:hover {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
  z-index: 3;
}

.link {
  position: absolute;
  --transform: perspective(75em) rotateX(30deg) rotateZ(-2deg) translate(calc(var(--x) * 100%), calc(var(--y) * 86.67%)) scale(1.145);
  transform: var(--transform);
  animation: drop-in 350ms cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s backwards;
  transition: transform 250ms ease-out;
  clip-path: polygon(50% 100%, 93.3% 75%, 93.3% 25%, 50% 0%, 6.7% 25%, 6.7% 75%);
}

.link:hover {
  transform: var(--transform) translateZ(10px) scale(1.1);
}

.examples img {
  aspect-ratio: 1;
  object-fit: cover;
  width: var(--grid-width);
}

@keyframes fade-in {
  from {
    filter: blur(20px);
    opacity: 0;
  }
}

@keyframes drop-in {
  from {
    transform: var(--transform) translateY(-100px) translateZ(400px);
  }
}
</style>
