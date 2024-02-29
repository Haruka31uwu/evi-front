<template>
  <div class="hero-container" style="position: relative">
    <div
      class="hero"
      :style="currentWindowWidth < 1550 ? '' : 'background-size: cover;'"
    ></div>
    <div class="hero-content">
      <div class="hero-content-text">
        <h1>
          Aprende de forma dinámica y aplicada a realizar investigación en salud
          y tomar decisiones basadas en evidencias
        </h1>
        <div class="btn-white w-100" @click="redirectTo('/courses')">
          <span>Inicia ahora</span>
        </div>
      </div>
    </div>
    <div
      :style="
        currentWindowWidth > 768
          ? 'position: absolute;bottom: -8em;right: 0;'
          : 'position: absolute;bottom: -2em;right: 0;'
      "
    >
      <svg
        width="100%"
        :height="currentWindowWidth > 768 ? '300' : '200'"
        opacity="0.7"
        viewBox="0 0 375 499"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.8343 380.504C37.8369 373.115 109.127 314.507 109.127 314.507C110.29 320.326 112.917 324.323 120.506 332.495C120.506 332.495 50.2693 390.22 42.2458 396.821C34.2223 403.422 19.8317 387.894 28.8343 380.504Z"
          fill="#192855"
        />
        <path
          d="M7.55599 272.408C23.439 259.364 149.249 155.943 149.249 155.943C148.761 163.119 151.087 167.363 159.073 175.208C159.073 175.208 35.1289 277.079 20.9675 288.725C6.80606 300.371 -8.32705 285.453 7.55599 272.408Z"
          fill="#192855"
        />
        <path
          d="M129.155 481.737C135.617 476.436 186.777 434.375 186.777 434.375C188.55 439.692 191.288 443.598 198.73 451.89C198.73 451.89 148.324 493.315 142.567 498.054C136.81 502.792 122.693 487.038 129.155 481.737Z"
          fill="#192855"
        />
        <path
          d="M131.378 394.474C143.98 384.126 243.788 302.078 243.788 302.078C244.087 308.607 246.557 312.733 254.353 320.734C254.353 320.734 156.024 401.55 144.79 410.791C133.556 420.031 118.777 404.822 131.378 394.474Z"
          fill="#192855"
        />
        <path
          d="M231.589 183.953C222.566 191.38 151.023 250.175 151.023 250.175C156.513 252.437 159.928 255.787 166.474 264.815C166.474 264.815 236.944 206.886 245.001 200.27C253.058 193.653 240.612 176.526 231.589 183.953Z"
          fill="#192855"
        />
        <path
          d="M332.534 5.29077C316.661 18.3479 190.841 121.756 190.841 121.756C197.976 122.666 201.689 125.77 207.84 135.124C207.84 135.124 331.778 33.2461 345.945 21.6073C360.113 9.96848 348.407 -7.76638 332.534 5.29077Z"
          fill="#192855"
        />
        <path
          d="M284.323 354.196C278.083 359.335 228.591 400.006 228.591 400.006C233.413 402.817 236.706 406.266 243.413 415.162C243.413 415.162 292.16 375.088 297.735 370.512C303.309 365.937 290.563 349.056 284.323 354.196Z"
          fill="#192855"
        />
        <path
          d="M398.005 146.274C385.413 156.634 285.595 238.67 285.595 238.67C291.942 240.228 295.512 243.449 301.852 252.647C301.852 252.647 400.176 171.823 411.416 162.591C422.656 153.358 410.596 135.914 398.005 146.274Z"
          fill="#192855"
        />
        <circle
          cx="138.284"
          cy="277.733"
          r="19.8007"
          transform="rotate(-39.4187 138.284 277.733)"
          fill="#192855"
        />
        <circle
          cx="178.827"
          cy="148.72"
          r="19.8007"
          transform="rotate(-39.4187 178.827 148.72)"
          fill="#192855"
        />
        <circle
          cx="213.002"
          cy="423.071"
          r="19.8007"
          transform="rotate(-39.4187 213.002 423.071)"
          fill="#192855"
        />
        <circle
          cx="273.362"
          cy="265.813"
          r="19.8007"
          transform="rotate(-39.4187 273.362 265.813)"
          fill="#192855"
        />
      </svg>
    </div>
  </div>
</template>


<script setup>
import { redirectTo } from "/composables/main-composables.js";

let currentWindowWidth = ref(null);
onMounted(() => {
  currentWindowWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    currentWindowWidth.value = window.innerWidth;
  });
});
</script>
<style lang="scss" scoped>
.hero-container {
  position: relative;
  min-height: 700px;
  height: 100vh;
  .hero {
    height: 100%;
    width: auto;
    background: url("/assets/img/hero.jpg") no-repeat;
    background-position-y: -12em;
    transform: scaleX(-1);
    z-index: 1;
  }
  @media (max-width: 768px) {
    .hero {
      background-position-y: -2em;
      background-position-x:-15em!important;
      background: url("/assets/img/hero-mobile.jpg") no-repeat;
      background-size: cover;
      width: 100%;
    }
  }
  .hero-content {
    position: absolute;
    width: 60%;
    height: 100%;
    top: 0;
    background: linear-gradient(90deg, #1f3c90 0%, #00a9c396 100%);
    border-radius: 0px 50% 50% 0px;
    display: flex;
    align-items: center;
  }
  @media (max-width: 1250px) {
    .hero-content {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .hero-content {
      border-radius: 0px 50% 50% 0px;
      .hero-content-text {
        h1{
          font-size: 2.2em;
        }
      }
    }
  }
}
</style>