<template>
    <div class="dude-section" v-if="currentWindowWidth>855">
        <div class="dude-container">
            <img src="/assets/img/evi.png" alt="Evi Owl" class="evi" height="360" width="360">
            <div class="dude-options">
                <h4>¿Tienes dudas? escríbenos </h4>
                <span>Escríbenos al Whatsapp y te ayudamos. </span>
                <button class="btn-blue"><img src="/assets/img/whatsapp.svg" alt="whas"><a target="_blank" href="https://wa.me//+51950876703" style="text-decoration: none;"><span>Ir a Whatsapp (+51 950 876 703)</span></a></button>
                <button class="btn-blue-outline" @click="redirectTo('/commons', 'frequent-questions')"><img src="/assets/img/info.svg" alt="info"><span 
                >Ir a Preguntas Frecuentes</span
              ></button>

            </div>
        </div>
    </div>
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