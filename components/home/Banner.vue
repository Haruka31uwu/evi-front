<template>
  <section class="banner w-100">
    <div
      class="d-flex flex-column justify-content-center align-items-center"
      style="position: relative;width: 100%!important;"
    >
      <div
        style="
          position: absolute;
          left: 33%;
          opacity: 0.15;
          background: linear-gradient(
            180deg,
            #00a9c3 0%,
            rgba(0, 169, 195, 0.6) 100%
          );
          z-index: 2;

          filter: blur(100px);
        "
        :style="
          currentWindowWidth > 991
            ? 'border-radius:50%;height:500px;width:500px'
            : 'border-radius:50%;height:250px;width:250px'
        "
      ></div>
      <div
        class="banner-content"
        style="background: #13131a; width: 100%;z-index: 3;box-shadow: 0px 4px 80px 0px #000000;position: relative;
"
        :style="currentWindowWidth > 991 ? 'padding: 5em;' : 'padding: 2em 0;'"
      >
        <h2 style="width: 100%">
          NO TE CONFORMES CON OPINIONES, BUSCA LA MEJOR EVIDENCIA
        </h2>
        <p class="text-center mt-4 w-75">
          SEAMOS AGENTES DEL CAMBIO EN EL ÁMBITO DE LA SALUD
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
let currentWindowWidth = ref(null);
onMounted(() => {
  currentWindowWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    currentWindowWidth.value = window.innerWidth;
  });
});
</script>