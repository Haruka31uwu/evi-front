<template>
  <section class="course-metodology">
    <div class="section-title" style="margin-bottom: 2em">
      <h2>Nuestra Metodologia</h2>
      <div class="section-decorator"></div>
    </div>
    <div class="qualities-list gap-5">
      <div
        class="quality-item"
        v-for="(quality, index) in qualities"
        :key="`quality-${index}`"
      >
        <div
          class="quality-content-2"
          :style="
            index % 2 == 0 ? 'align-self:flex-start' : 'align-self:flex-end'
          "
        >
          <img
            :src="quality.logo"
            width="100"
            height="100"
            alt="quality-logo"
          />
          <div class="quality-content-text-2">
            <ul class="d-flex flex-column gap-2">
              <li
                v-for="(content, index2) in quality.content"
                :key="`content-${index2}`"
              >
                {{ content }}
              </li>
            </ul>
          </div>
        </div>
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
const qualities = ref([
  {
    logo: "/assets/img/courses/access.svg",
    title: "Calidad educativa",
    content: [
      " Tendrás acceso inmediato al contenido de todos los cursos. Sin embargo, para obtener los certificados deberás unirte a los talleres de los cursos en las fechas disponibles.",
      "Los cursos se brindan periódicamente así que puedes iniciar por el curso que quieras.",

      "Completa el programa a tu ritmo. Puedes llevar un curso a la vez, o si tienes el tiempo suficiente puedes llevar dos o más cursos en paralelo.",
    ],
  },
  {
    logo: "/assets/img/courses/modality.svg",
    title: "Hacemos sencillo lo difícil:",
    content: [
      "Todos los cursos tienen una modalidad 100% virtual y están orientados a la aplicación práctica.",
      "Las clases teóricas son asincrónicas. Los talleres son sincrónicos, personalizados en grupos pequeños, y con acompañamiento de un docente.",
      "Foros para discusión, preguntas, y networking.",
    ],
  },
  {
    logo: "/assets/img/courses/certification.svg",
    title: "Aprende haciendo:",
    content: [
      "Para obtener el certificado de haber culminado el programa, deberás publicar al menos un (01) artículo original en una revista científica indizada.",
      "Esta publicación se realizará durante o después de haber llevado los cursos.",
      "¡Todo el aprendizaje se verá reflejado en tu producción científica!",
    ],
  },
]);
</script>