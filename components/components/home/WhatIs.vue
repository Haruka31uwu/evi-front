<template>
  <section class="whatsits-section">
    <div class="section-title">
      <h2>¿Qué es EviSalud?</h2>
      <div class="section-decorator" style="width:77%;"></div>
    </div>
    <p class="mt-3" style="width: 75%;">
      Somos una Startup de e-learning que tiene por objetivo desarrollar
      competencias para la investigación y toma de decisiones basadas en
      evidencia en profesionales y estudiantes de distintas áreas de la salud.
    </p>
    <div class="whatsits-indicators">
      <div
        class="indicator-item"
        v-for="(indicator, index) in indicators"
        :key="`indicator-${index}`"
      >
        <div class="indicator-item-text" @load="startCounter(index)">
          <span>
            <span v-if="index == 0"> + </span>
            {{ counters[index] }}
            <span v-if="index == 1"> /5 </span>
          </span>
          <span>{{ indicator.title }}</span>
        </div>
        <div
          class="indicator-item-divider"
          v-if="index != indicators.length - 1"
        ></div>
      </div>
    </div>
    <div class="whatsits-students">
      <span>Estudiantes de 12  países</span>
      <div class="country-flags">
        <div  
          v-for="(country, index2) in countrys"
          :key="`country-${index2}`"
        >
        <img :src="country.src"/>
      </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const indicators = ref([
      {
        title: "Alumnos egresados",
        value: 4000,
        initialVal: 0,
      },
      {
        title: "Nuestros Alumnos nos califican",
        value: 4.7,
        initialVal: 0,
      },
      {
        title: "Cursos Online",
        value: 10,
        initialVal: 0,
      },
      {
        title: "Programas de formación",
        value: 2,
        initialVal: 0,
      },
      {
        title: "Alianzas Estratégicas",
        value: 3,
        initialVal: 0,
      },
    ]);
    const counters = ref(Array(indicators.length).fill(0));
    const countrys = ref([
      {
        alt: "Bolivia",
        src: "/assets/img/bolivia.svg",
      },
      {
        alt: "Perú",
        src: "/assets/img/peru.svg",
      },
      {
        alt: "Ecuador",
        src: "/assets/img/ecuador.svg",
      },
      {
        alt: "Chile",
        src: "/assets/img/chile.svg",
      },
      
      {
        alt: "Colombia",
        src: "/assets/img/colombia.svg",
      },
      {
        alt: "España",
        src: "/assets/img/españa.svg",
      },
      {
        alt: "México",
        src: "/assets/img/mexico.svg",
      },
      {
        alt: "Costa Rica",
        src: "/assets/img/costa-rica.svg",
      },
      {
        alt: "Paraguay",
        src: "/assets/img/paraguay.svg",
      },
      {
        alt: "República Dominicana",
        src: "/assets/img/rep-dominicana.svg",
      },
      {
        alt: "Venezuela",
        src: "/assets/img/venezuela.svg",
      },
      {
        alt: "Guatemala",
        src: "/assets/img/guatemala.svg",
      },
    ]);
    onMounted(() => {
      indicators.value.forEach((_, index) => {
        startCounter(index);
      });
    });
    function startCounter(index) {
      const targetNumber = indicators.value[index].value;
      const duration = 2000; // Duración en milisegundos
      const step = targetNumber / (duration / 10); // Intervalo de tiempo en milisegundos

      let currentNumber = 0;

      const interval = setInterval(() => {
        if (currentNumber < targetNumber) {
          currentNumber += step;
          counters.value[index] = Math.round(currentNumber);
        } else {
          clearInterval(interval);
        }
      }, 10);
    }

    return {
      indicators,
      counters,
      startCounter,
      countrys,
    };
  },
};
</script>
