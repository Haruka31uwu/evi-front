<template>
  <section>
    <div class="qualities-list">
      <div
        class="quality-item"
        v-for="(quality, index) in qualities"
        :key="`quality-${index}`"
      >
        <div
          v-if="index < 3 ||currentWindowWidth>768"
          class="quality-content"
          :style="
            index % 2 == 0 ? 'align-self:flex-start' : 'align-self:flex-end'
          "
        >
          <img :src="quality.logo" width="100" height="100" />
          <div class="quality-content-text">
            <h4 class="mb-1">{{ quality.title }}</h4>
            <p>{{ quality.content }}</p>
          </div>
        </div>
        <div
            v-if="index < 3||currentWindowWidth>768"
            style="
              width:75%;
              background-color: #515166;
              color: white;
              height: 0.5px;
              margin: 2em 0;
            "
          ></div>
        <div
          v-if="index > 3 && currentWindowWidth<=768"
          class="quality-more"
          :style="
            !showMore ? 'display:none' : 'display:flex;flex-direction:column'
          "
        >
          <div
            v-if="index > 3 && currentWindowWidth<=768"
            class="quality-content"
            :style="
              index % 2 == 0 ? 'align-self:flex-start' : 'align-self:flex-end'
            "
          >
            <img :src="quality.logo" width="100" height="100" />
            <div class="quality-content-text">
              <h4>{{ quality.title }}</h4>
              <p>{{ quality.content }}</p>
            </div>
          </div>
          <div
            v-if="index > 3 && currentWindowWidth<=768"
            style="
              width: 80%;
              background-color: #515166;
              color: white;
              height: 0.5 px;
              margin: 2em 0;
            "
          ></div>
        </div>
        <div
          class="view-more"
          @click="showMore = !showMore"
          v-if="currentWindowWidth < 768 && ( (index == 3 && !showMore)||(index == 6 && showMore))"
        >
          <span>{{  !showMore?'Ver más':'Ver menos'}}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            :style="showMore?'transform:rotate(180deg)':''"
          >
            <path
              d="M0.999999 1L7 7L13 1"
              stroke="#0393AA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
let currentWindowWidth = ref(null);
let showMore = ref(false);
onMounted(() => {
  currentWindowWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    currentWindowWidth.value = window.innerWidth;
  });
});
const qualities = ref([
  {
    logo: "/assets/img/class-quality.svg",
    title: "Calidad educativa",
    content:
      "Los cursos han sido diseñados por docentes con amplia experiencia, han pasado por diversas validaciones y actualizaciones para ofrecerte un curso práctico, articulado, basado en literatura científica y en constante actualización.",
  },
  {
    logo: "/assets/img/hard-to-easy.svg",
    title: "Hacemos sencillo lo difícil:",
    content:
      "Traducimos contenidos complejos para explicarlos de manera sencilla, didáctica, e intuitiva. ¡Nada de esto es complicado cuando te enseñan los conceptos correctos en el orden correcto!",
  },
  {
    logo: "/assets/img/learning.svg",
    title: "Aprende haciendo:",
    content:
      "Cada curso está enfocado en adquirir competencias prácticas que utilizarás en talleres para resolver problemas de escenarios reales. Con esto estarás en la capacidad de aplicar lo aprendido en el día a día de forma inmediata.",
  },
  {
    logo: "/assets/img/dinamyc.svg",
    title: "Metodología dinámica:",
    content:
      "Las clases y actividades están diseñadas para que te diviertas y aprendas de manera dinámica  ¡No más clases aburridas! Además, en nuestra aula virtual encontrarás retos que podrás resolver para acceder a beneficios especiales. ¡Obtén todas las insignias y llega al nivel más alto de aprendizaje!",
  },
  {
    logo: "/assets/img/customized.svg",
    title: "Aprendizaje personalizado:",
    content:
      "Participa de las reuniones sincrónicas en grupos pequeños, en los que un docente facilitará tu aprendizaje y resolverá todas tus dudas. ¡Te acompañamos en todo el proceso de aprendizaje!",
  },
  {
    logo: "/assets/img/anyplace.svg",
    title: "Aprende desde cualquier parte, a cualquier hora y a tu ritmo:",
    content:
      "Accede inmediatamente a todo el contenido, los cursos son virtuales y todo el material educativo está disponible las 24 horas.",
  },
  {
    logo: "/assets/img/networking.svg",
    title:
      "Realiza networking y se parte de la comunidad basada en evidencias:",
    content:
      "Conoce participantes de diversos perfiles, interactúa en el foro y en los talleres sincrónicos. ¡Grandes proyectos interdisciplinarios pueden surgir de ello! !La pasión por la evidencia nos une!",
  },
]);
</script>