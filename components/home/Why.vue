<template>
  <section class="banner">
    <div class="d-flex flex-column justify-content-center align-items-center mb-5" style="position: relative;width: 100%;">
    
      <div
        style="
          position: absolute;
          bottom: 0;
          right: 0 ;
          border-radius: 50%;
          opacity: 0.15;
          background: linear-gradient(
            180deg,
            #00a9c3 0%,
            rgba(0, 169, 195, 0.6) 100%
          );
            width: 444px;
            height: 44px;
          filter: blur(100px);
        "
      ></div>
      <div
        class="banner-content"
        style="
          position: relative;
          background: #13131a;
          width: 100%; 
          box-shadow: 0px 4px 80px 0px #000;
          padding: 2em 0;
        "
      >
      <div class="section-title" style="margin-bottom: 2em;">
      <h2 style="color: white;font-style: normal;" :style="currentWindowWidth>768?'font-size:36px':'font-size:26px'">¿Por qué estudiar en EviSalud?</h2>
      <div class="section-decorator" :style="currentWindowWidth>768?'':'margin-top:0.3em;'"></div>
      </div> 
        <h2 style="width: 70%;">MÁS QUE CURSOS, LA EXPERIENCIA EDUCATIVA QUE BUSCABAS</h2>
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