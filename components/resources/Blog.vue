<template>
  <section class="d-flex justify-content-center flex-column align-items-center">
    <div class="section-title d-flex my-5">
      <h2>EviBlog</h2>
      <div class="section-decorator" style="right: -1em"></div>
    </div>
   <!-- <div class="row d-flex flex-row justify-content-between" style="width: 90%">
      <div class="col-12 col-md-5 mb-5 d-none">
        <div class="blog-item d-flex flex-column">
          <img
            :src="blogItems.main.img"
            alt="x"
            style="width: 70%; height: 100%; border-radius: 1rem"
            :style="
              currentWindowWidth < 768
                ? 'width:95%;height:300px;margin:0 auto'
                : 'width: 100%; height: 100%'
            "
            class="mb-3"
          />
          <span class="blog-title">
            {{ blogItems.main.title }}
          </span>
          <p>
            {{ blogItems.main.description }}
          </p>
          <span>
            {{ blogItems.main.date }}
          </span>
        </div>
      </div>
      
      <div class="col-12 col-md-6">
        <ul
          style="
            list-style: none;
            padding: 0;
            margin: 0%;
            display: flex;
            flex-direction: column;
            row-gap: 1em;
          "
        >
          <div
            v-for="(item, index) in blogItems.items"
            :key="index"
            class="blog-item d-flex gap-1 flex-column"
          >
            <li class="d-flex  gap-4 align-items-center flex-column flex-md-row"> 
              <img
                :src="item.img"
                alt=""
                style="
                  width: 100%;
                  min-width: 180px;
                  max-width: 250px;
                  height: 160px;
                  border-radius: 0.5rem;
                "
                class="mb-3"
              />
              <div style="width: 70%">
                <span class="blog-title">
                  {{ item.title }}
                </span>
                <p>
                  {{ item.description }}
                </p>
                <span style="font-style: italic">
                  {{ item.date }}
                </span>
              </div>
            </li>
            <div
              class="blog-item__divider"
              v-if="index != blogItems.items.length"
            ></div>
          </div>
        </ul>
      </div>
    </div>-->
    <div class="row d-flex flex-row justify-content-between" style="width: 90%" v-for="(index) in Math.floor(blogItems.items.length/2)" :key="index">
      <div class="col-12 col-md-6 mb-5 blog-item-container"  v-for="(item, index) in blogItems.items"
      @click="redirectTo('/blog-detail/' + item.id,'blog-content')" 
      :key="`item-${index}`">
        <div class="blog-item d-flex flex-column flex-md-row gap-4">
          <img
            :src="item.img"
            alt="x"
            style="width: 250px;height: 300px; border-radius: 1rem"
            :style="
              currentWindowWidth < 768
                ? 'width:95%;height:300px;margin:0 auto'
                : 'width: 250px; '
            "
          />
          <div class="d-flex flex-column justify-content-between">
            <span class="blog-title">
            {{ item.title }}
          </span>
          <p>
            {{ item.description }}
          </p>
          <span>
            {{ item.date }}
          </span>
          </div>
        </div>
        <div class="blog-item__divider"></div>
      </div>
    </div> 
  </section>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import { redirectTo } from "/composables/main-composables.js";

export default defineComponent({
  setup() {
    let currentWindowWidth = ref(null);
    onMounted(() => {
      currentWindowWidth.value = window.innerWidth;
      window.addEventListener("resize", () => {
        currentWindowWidth.value = window.innerWidth;
      });
    });
    const blogItems = reactive({
      main: {
        img: "/assets/img/resources/blog/Blog1.webp",
        title:
          "Medicina Basada en Evidencias: Innovación en el Cuidado de la Salud",
        description:
          "La Medicina Basada en Evidencias (MBE) ha emergido como un enfoque revolucionario en el campo de la salud, transformando la toma de decisiones clínicas mediante el análisis crítico de la mejor evidencia científica disponible. En este artículo, exploraremos los fundamentos de la MBE, su importancia en la práctica médica y cómo ha impactado positivamente la calidad del cuidado de los pacientes.",
        date: "Marzo 09, 2024",
      },
      items: [
        {
          id:2,
          img: "/assets/img/resources/blog/Blog2.webp",
          title: "Argumento ad ignoratiam y toma de decisiones en salud",
          description:
            'En investigación clínica, el "argumento ad ignorantiam" es creer que si no hay evidencia de que cierto fármaco tenga beneficios, significa que no tiene beneficios. Para no caer en esta falacia, debemos tener en cuenta que "la ausencia de prueba no es prueba de ausencia.',
          date: "Marzo 09, 2024",
        },
        { 
          id:3,
          img: "/assets/img/resources/blog/Blog3.webp",
          title:
            "¿Por qué lo más lógico es no brindar fármacos solo por plausibilidad fisiopatológica, sino hasta tener estudios bien diseñados?",
          description:
            "Primero, entender que existen intervenciones que debemos brindar debido a que su beneficio es muy obvio (ya tienen evidencia indirecta contundentes), como el uso de oxígeno en hipoxia, de antibióticos si el paciente presenta una infección sobreagredada, etc.",
          date: "Marzo 09, 2024",
        },
        {
          id:1, 
          img: "/assets/img/resources/blog/Blog1.webp",
          title:
            "Medicina Basada en Evidencias: Innovación en el Cuidado de la Salud",
          description:
            "La Medicina Basada en Evidencias (MBE) ha emergido como un enfoque revolucionario en el campo de la salud, transformando la toma de decisiones clínicas mediante el análisis crítico de la mejor evidencia científica disponible. En este artículo, exploraremos los fundamentos de la MBE, su importancia en la práctica médica y cómo ha impactado positivamente la calidad del cuidado de los pacientes.",
          date: "Marzo 09, 2024",
        },
      ],
    });
    return {
      blogItems,
      currentWindowWidth,
    };
  },
});
</script>
<style  lang="scss" scoped >
.blog-item {
  padding: 1em;
  height: auto;

  span {
    font-weight: 600;
    color: #00a9c3;
  }
  .blog-title {
    font-size: 1.3rem;
  }
  .blog-item__divider {
    width: 100%;
    height: 1px;
    background-color: white;
    margin: 1rem 0;
  }
  

}.blog-item__divider{
  width: 100%;
  height: 1px;
  background-color: white;
  margin: 1rem 0;
}.blog-item-container{
  &:hover {
    cursor: pointer;
    .blog-item{
      background-color: #515166;
    border-radius: 1rem;
    }
    .blog-item__divider {
      background-color: #00a9c3;
    }
  }
}
</style>
