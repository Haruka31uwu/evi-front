<template>
  <section v-if="courseInfo.value" class="py-2">
    <article
      class="d-flex mx-0 justify-content-center align-items-center gap-4 course-copy text-center py-5 mx-auto flex-column"
      :style="`color:${courseInfo.value.color}`"
    >
      <span> "{{ courseInfo.value.description }}"</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="253"
        height="30"
        viewBox="0 0 253 30"
        fill="none"
      >
        <path
          d="M7.45105 9.52734C17.9442 9.53142 101.09 9.52734 101.09 9.52734C98.5716 12.1994 98.1132 14.6274 98.7199 20.3103C98.7199 20.3103 16.8118 20.3079 7.45105 20.3103C-1.90972 20.3128 -3.0421 9.52327 7.45105 9.52734Z"
          :fill="courseInfo.value.color"
        />
        <path
          d="M245.549 9.39844C235.056 9.40251 151.91 9.39843 151.91 9.39843C154.428 12.0705 154.887 14.4984 154.28 20.1814C154.28 20.1814 236.188 20.179 245.549 20.1814C254.91 20.1839 256.042 9.39436 245.549 9.39844Z"
          :fill="courseInfo.value.color"
        />
        <circle
          cx="124.752"
          cy="14.9959"
          r="10.109"
          transform="rotate(-39.4187 124.752 14.9959)"
          :fill="courseInfo.value.color"
        />
      </svg>
    </article>
    <div class="row ms-xl-5 w-100">
      <div class="col col-sm-12 col-md-12 col-xl-8">
        <div style="width: 80%" class="ms-5 d-flex gap-2 flex-column">
          <h4>
            Accede de inmediato al contenido y únete a la siguiente cohorte de
            este curso
          </h4>
          <ul class="d-flex flex-column gap-1">
            <li v-for="(item,key,index) in courseInfo.value.info" :key="`detail-${index}`" >
              <strong>{{key}}: </strong>
              <span>{{ item }}</span>
            </li>
          </ul>
          <div class="more-info-course d-flex flex-column gap-3">
            <small
              >¿Quieres saber mas sobre el curso? revisa nuestro Brochure</small
            >
            <div
              @click="
                forceFileDownload(courseInfo.value.brochureUrl, 'Brochure')
              "
              :style="{
                background: courseInfo.value.color,
                borderRadius: '1.5em',
                width: '450px',
                margin: '1.5em 0',
                cursor: 'pointer',
              }"
              class="px-2 py-2 d-flex gap-2 align-items-center justify-content-center w-100"
            >
              <img src="/assets/img/courses/download.svg" alt="downlaod icon" />
              <span > Descargar Brochure </span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col col-sm-12 col-md-12 col-xl-4 py-4 d-flex course-detail-inversion align-self-end"
      >
        <div
          style="width: 100%"
          class="d-flex flex-column gap-4 ms-4 course-price-container"
          :style="{
            background: courseInfo.value.color,
            borderRadius: '10px',
            borderTopRigthRadius: '0px',
            borderBottomRigthRadius: '0px',
            padding: '2em',
          }"
        >
          <div class="course-detail-price d-flex flex-column gap-2">
            <span class="course-detail-price-title">Inversión</span>
            <span
              >${{ courseInfo.value.priceUsd }} (Peru:S/{{
                courseInfo.value.pricePen
              }})</span
            >
            <small class="pb-1">!Pregunta por nuestros descuentos</small>
            <div class="btn-white d-flex flex-row w-100" style="column-gap: 1em" @click="addToCart(courseInfo.value)">
              <img src="/assets/img/courses/car.svg" alt="cart-icon"/><span
                >Agregar al carrito</span
              >
            </div>
          </div>
          <div class="course-detail-contact d-flex flex-column gap-2">
            <small
              >Si tienes dudas o necesitas mas información,contactanos</small
            >
            <div class="btn-white d-flex flex-row w-100" style="column-gap: 1em">
              <img src="/assets/img/courses/whats.svg" alt="whats" />
              <span
                ><a target="_blank" href="https://wa.me//+51950876703"
                  >Ir a Whatsapp (+51 950 876 703)</a
                ></span
              >
            </div>
            <div
              class="btn-gray-outline d-flex flex-row w-100"
              style="column-gap: 1em"
            >
              <img src="/assets/img/courses/info.svg" alt="info.svg" />
              <span @click="redirectTo('/commons','frequent-questions')">Ir a Preguntas Frecuentes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      style="width: 80%; height: 1px; background: #515166"
      class="my-5 mx-auto"
    ></div>
    <div class="row mx-auto" style="width: 80%">
      <div class="col-sm-12 col-xl-6 " v-if="currentWindowWidth>1200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="212"
          height="228"
          viewBox="0 0 212 228"
          fill="none"
        >
          <path
            d="M62.2449 31.9206L41.0409 53.5553L34.0236 46.386C32.0729 44.3846 28.8556 44.3593 26.8542 46.31C24.8529 48.286 24.8276 51.478 26.7782 53.4793L37.4182 64.3473C38.3809 65.31 39.6729 65.8673 41.0409 65.8673C42.4089 65.8673 43.7009 65.31 44.6636 64.3473L69.4902 39.014C71.4409 37.0126 71.4156 33.7953 69.4142 31.8446C67.4129 29.894 64.2209 29.9193 62.2449 31.9206Z"
            :fill="courseInfo.value.color"
          />
          <path
            d="M62.2449 92.7214L41.0409 114.356L34.0236 107.187C32.0729 105.185 28.8556 105.16 26.8542 107.111C24.8529 109.087 24.8276 112.279 26.7782 114.28L37.4182 125.148C38.3809 126.111 39.6729 126.668 41.0409 126.668C42.4089 126.668 43.7009 126.111 44.6636 125.148L69.4902 99.8148C71.4409 97.8134 71.4156 94.5961 69.4142 92.6454C67.4129 90.6948 64.2209 90.7201 62.2449 92.7214Z"
            :fill="courseInfo.value.color"
          />
          <path
            d="M91.1995 40.5337H157.066C159.878 40.5337 162.133 38.2537 162.133 35.4671C162.133 32.6551 159.878 30.4004 157.066 30.4004H91.1995C88.4128 30.4004 86.1328 32.6551 86.1328 35.4671C86.1328 38.2537 88.4128 40.5337 91.1995 40.5337Z"
            :fill="courseInfo.value.color"
          />
          <path
            d="M91.1995 65.8677H157.066C159.878 65.8677 162.133 63.5877 162.133 60.801C162.133 57.989 159.878 55.7344 157.066 55.7344H91.1995C88.4128 55.7344 86.1328 57.989 86.1328 60.801C86.1328 63.5877 88.4128 65.8677 91.1995 65.8677Z"
            :fill="courseInfo.value.color"
          />
          <path
            d="M55.734 157.066H40.534C32.1487 157.066 25.334 163.881 25.334 172.266V187.466C25.334 195.852 32.1487 202.666 40.534 202.666H55.734C64.1193 202.666 70.934 195.852 70.934 187.466V172.266C70.934 163.881 64.1193 157.066 55.734 157.066ZM60.8007 187.466C60.8007 190.253 58.5207 192.533 55.734 192.533H40.534C37.7473 192.533 35.4673 190.253 35.4673 187.466V172.266C35.4673 169.48 37.7473 167.2 40.534 167.2H55.734C58.5207 167.2 60.8007 169.48 60.8007 172.266V187.466Z"
            :fill="courseInfo.value.color"
          />
          <path
            d="M205.681 76.2533L189.721 63.7893C188.987 63.232 188.252 62.7507 187.467 62.3453V15.2C187.467 6.81467 180.652 0 172.267 0H15.2C6.81467 0 0 6.81467 0 15.2V212.8C0 221.185 6.81467 228 15.2 228H172.267C180.652 228 187.467 221.185 187.467 212.8V124.285L198.968 109.592C198.968 109.567 198.968 109.567 198.968 109.567L208.316 97.584C213.459 90.9973 212.293 81.4213 205.681 76.2533ZM177.333 212.8C177.333 215.587 175.053 217.867 172.267 217.867H15.2C12.4133 217.867 10.1333 215.587 10.1333 212.8V15.2C10.1333 12.4133 12.4133 10.1333 15.2 10.1333H172.267C175.053 10.1333 177.333 12.4133 177.333 15.2V60.9013C173.913 61.5853 170.696 63.46 168.391 66.424L149.036 91.2H91.2C88.4133 91.2 86.1333 93.4547 86.1333 96.2667C86.1333 99.0533 88.4133 101.333 91.2 101.333H141.132L129.251 116.533H91.2C88.4133 116.533 86.1333 118.788 86.1333 121.6C86.1333 124.387 88.4133 126.667 91.2 126.667H121.347L95.7347 159.473C93.6067 162.184 92.4667 165.553 92.5173 168.999L92.8467 197.879C92.872 199.424 93.5813 200.868 94.7973 201.805C95.7093 202.515 96.7987 202.895 97.9133 202.895C98.3187 202.895 98.6987 202.844 99.104 202.743L127.199 196.08C130.543 195.269 133.557 193.344 135.66 190.633L177.333 137.281V212.8ZM127.68 184.401C126.971 185.313 125.983 185.947 124.868 186.225L102.904 191.419L102.651 168.872C102.625 167.732 103.005 166.592 103.715 165.705L163.881 88.616L187.847 107.337L127.68 184.401ZM200.336 91.352L194.079 99.3573L170.139 80.636L176.371 72.656C177.207 71.592 178.397 70.908 179.74 70.7307C179.943 70.7053 180.171 70.7053 180.373 70.7053C181.488 70.7053 182.577 71.0853 183.489 71.7693L199.449 84.2587C201.653 85.956 202.059 89.148 200.336 91.352Z"
            :fill="courseInfo.value.color"
          />
        </svg>
      </div>
      <div class="col-sm-12 col-md-12 col-xl-6 d-flex  flex-column justify-content-center align-items-center">
        <div style="position: relative; margin-bottom: 1em" >
          <span class="title-decorated" style="z-index: 2">Contenido</span>
          <div
          
            style="
              width: 150px;
              border-radius: 1em;
              height: 20px;
              position: absolute;
              top: 1.2em;
              opacity: 0.7;
              left: 1em;
            "
            :style="{
              background: courseInfo.value.color,
            }"
          ></div>
        </div>
        <ul style="list-style: none" class="d-flex flex-column gap-1 mx-0 px-0">
          <li class="d-flex gap-1 align-items-center" v-for="(item,index) in courseInfo.value.contenido" :key="`content-${index}`">
            <svg 
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7.07031"
                width="10"
                height="10"
                rx="1"
                transform="rotate(-45 0 7.07031)"
                :fill="courseInfo.value.color"
              />
            </svg>
            <span>{{ item }}</span>
            </li>
        </ul>
      </div>
    </div>
    <div
      style="width: 80%; height: 1px; background: #515166"
      class="my-5 mx-auto"
    ></div>
    <div
      class="d-flex mx-auto justify-content-center flex-column align-items-center gap-4"
    >
      <h4 style="text-align: center;">¿Qué aprenderé en este curso de {{ courseInfo.value.title }}?</h4>
      <!-- <video
        style="width: 70%; height: 50%"
        controls
        :src="courseInfo.value.videoUrl"
        type="video/mp4"
      ></video> -->
      <iframe width="80%" height="615" :src="courseInfo.value.videoUrl" frameborder="0" allowfullscreen></iframe>

    </div>
  </section>
</template>
<script>
import { redirectTo,useSwall } from '/composables/main-composables';
import { carStore } from "../../store/car/car.store";
import { useShopCar } from "/composables/shop-car/shop-car.composables.js";

export default {
  props: {
    courseInfo: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  setup(props) {
    let currentWindowWidth = ref(null);
    const store = carStore();
    const { showSuccessSwall, showErrorSwall } = useSwall();
    const getCarItems = computed(() => store.getCarItems);

    onMounted(() => {
      currentWindowWidth.value = window.innerWidth;
      window.addEventListener("resize", () => {
        currentWindowWidth.value = window.innerWidth;
      });
    });
    const addToCart = (course) => {
      const { addCarItem } = useShopCar();
      const courseInCar = getCarItems.value.find(
        (item) => {
          if(item.type===3){
            return item.coursesList.find(
              (courseItem) => courseItem.id === course.id
            );
          }
          return item.id === course.id;
        }
      );
      
      if (courseInCar) {
        showErrorSwall("","El curso ya se encuentra en el carrito o pertenece a un programa de cursos");
        return;
      }
      addCarItem(course);
      showSuccessSwall("","Curso agregado al carrito");
    };
    return {
      courseInfo: props.courseInfo,
      currentWindowWidth,
      addToCart,
      redirectTo
    };
  },
};
</script>
<style  lang="scss" scoped>
</style>
