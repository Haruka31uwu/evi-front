<template>
  <section
    class="d-flex justify-content-center d-flex flex-column justify-content-center align-items-center"
  >
    <div class="section-title">
      <h2>¿Qué es el Programa de referidos?</h2>
      <div class="section-decorator" style="left:4.5em;width: 95%;"></div>
    </div>
    <div class="row section-container mt-5" style="width: 80%">
      <div class="col col-12 col-lg-6">
        <div
          style="width: 80%"
          class="d-flex flex-column justify-content-center align-items-center m-auto"
        >
          <h3
            style="
              color: #0393aa;
              font-weight: 700;
              font-style: italic;
              font-size: 2.3em;
            "
          >
          ¡REFIERE Y GANA!
          </h3>
          <p class="text-center text-md-start">
            El programa de referidos es un programa de recompensas para todos
            los miembros de la comunidad de Evialumnos. El cual te permite
            acumular descuentos por cada persona nueva que llegue con tu código;
            es decir,
            <span style="color: #0393aa"
              >a más personas que recomiendes, más descuentos obtendrás
            </span>
            en nuestros cursos.
          </p>
        </div>
      </div>
      <div class="col col-12 col-lg-6">
        <div
          class="d-flex flex-column gap-2"
          style="
            background: #1c1c24;
            box-shadow: 0px -4px 50px 0px rgba(0, 0, 0, 0.2);
            border-radius: 2em;
            padding: 1.5em;
          "
        >
          <span
            > Al registrarte dentro del programa de referidos, podrás obtener
            los siguientes beneficios:</span
          >
          <ul>
            <li>
              Gana 20 soles de crédito por cada persona nueva que refieras y se matricule a un curso de EviSalud.
            </li>
            <li>
              Canjea los 20 soles de crédito como descuentos en los cursos de EviSalud y estos créditos son acumulables.
            </li>
            <!-- <li>Obtén material exclusivo vía mailing.</li> -->
          </ul>
        </div>
      </div>
    </div>
    <div
      class="row section-container mt-5 pt-4"
      style="
        width: 80%;
        background: #0393aa;
        box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.5);
        padding-bottom: 1em;
      "
      :style="currentWindowWidth < 991 ? '' : 'border-radius: 1em'"
    >
      <h3 class="text-center">
        ¿CÓMO SER PARTE DEL PROGRAMA DE REFERIDOS Y GANAR BENEFICIOS?
      </h3>
      <div
        class="row mt-3 d-flex"
        :class="currentWindowWidth > 991 ? 'flex-row' : 'flex-column-reverse'"
      >
        <div class="col col-12 col-lg-4 d-flex justify-content-start" style="position: relative;">
          <img
            src="/assets/img/benefits/evi-referido.png"

            :style="
              currentWindowWidth > 991
                ? 'width: 80%; height: 100%'
                : 'width: 50%; height: 100%;margin-top:1em'"
          />
          <svg
          v-if="currentWindowWidth <991"
          opacity="0.7"
            width="50%"
            height="157"
            viewBox="0 0 247 157"
            fill="none"
            style="position: absolute; bottom: 0; right: 0em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-90.7625 5.95312C-73.8685 5.95969 59.9977 5.95312 59.9977 5.95312C55.9422 10.2552 55.2042 14.1642 56.181 23.3138C56.181 23.3138 -75.6916 23.3098 -90.7625 23.3138C-105.833 23.3178 -107.657 5.94656 -90.7625 5.95312Z"
              fill="#515166"
            />
            <path
              d="M-60.066 129.563C-46.6634 129.57 59.5371 129.563 59.5371 129.563C56.3198 133.866 55.7343 137.775 56.5092 146.924C56.5092 146.924 -48.1097 146.92 -60.066 146.924C-72.0222 146.928 -73.4686 129.557 -60.066 129.563Z"
              fill="#515166"
            />
            <path
              d="M19.0662 83.6719C28.6721 83.6653 104.788 83.6719 104.788 83.6719C102.483 79.3698 102.063 75.4608 102.618 66.3112C102.618 66.3112 27.6355 66.3152 19.0662 66.3112C10.4969 66.3072 9.46022 83.6784 19.0662 83.6719Z"
              fill="#515166"
            />
            <path
              d="M116.239 22.2617C133.133 22.2552 267 22.2617 267 22.2617C262.944 17.9597 262.206 14.0507 263.183 4.90103C263.183 4.90103 131.31 4.905 116.239 4.90103C101.169 4.89705 99.3454 22.2683 116.239 22.2617Z"
              fill="#515166"
            />
            <path
              d="M113.539 146.043C126.942 146.036 233.143 146.043 233.143 146.043C229.925 141.741 229.34 137.832 230.115 128.682C230.115 128.682 125.496 128.686 113.539 128.682C101.583 128.678 100.137 146.05 113.539 146.043Z"
              fill="#515166"
            />
            <circle cx="-10.2165" cy="77.511" r="16.2757" fill="#515166" />
            <circle cx="82.5569" cy="16.2757" r="16.2757" fill="#515166" />
            <circle cx="82.0999" cy="139.975" r="16.2757" fill="#515166" />
          </svg>
        </div>
        <div
          class="col col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center"
        >
          <div class="time-line d-flex flex-column flex-lg-row">
            <div
              class="time-line-item d-flex flex-row flex-lg-column"
              v-for="item in proccess"
              :key="item"
            >
              <div
                class="time-line-item-number d-flex align-items-center align-items-lg-center"
                :class="currentWindowWidth > 991 ? 'flex-row' : 'flex-column'"
                :style="
                  currentWindowWidth > 991
                    ? 'min-width: 200px'
                    : 'min-width: 100px'
                "
              >
                <span
                  class="d-flex justify-content-center align-items-center"
                  style="
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: white;
                    color: black;
                    font-weight: 700;
                    font-size: 1.5em;
                  "
                  >{{ item.step }}</span
                >
                <div
                  :style="
                    currentWindowWidth > 991
                      ? 'width: 100% ;height: 1px;background: white;'
                      : 'width: 1px ;height:110px;background: white;'
                  "
                  v-if="item.step != proccess.length"
                ></div>
              </div>
              <div class="time-line-item-content mt-2" style="width: 60%">
                <p class="text-center" style="color: black; font-weight: 700">
                  {{ item.title }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="btn-white mt-2"
            style="width: 50%"
            @click="openRefersModal"
          >
            <span>Llenar Formulario</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
const proccess = reactive([
  {
    step: "1",
    title:
      "Ser miembro de la comunidad de Evialumnos; es decir, haber llevado al menos un curso de EviSalud.",
  },
  {
    step: "2",
    title: "Llena el formulario.",
  },
  {
    step: "3",
    title:
      "Disfruta de tus beneficios, brindando tu código de referido a tus amigos.",
  },
]);
export default {
  emits: ["openRefersModal"],
  setup(props, ctx) {
    let currentWindowWidth = ref(null);
    onMounted(() => {
      currentWindowWidth.value = window.innerWidth;
      window.addEventListener("resize", () => {
        currentWindowWidth.value = window.innerWidth;
      });
    });
    const openRefersModal = () => {
      ctx.emit("openRefersModal");
    };
    return {
      proccess,
      openRefersModal,
      currentWindowWidth,
    };
  },
};
</script>
<style scoped>
p,
ul,
span {
  font-family: "Axiforma", sans-serif;
}
.time-line-item-number-container {
  min-width: calc(100%-40px);
}
</style>