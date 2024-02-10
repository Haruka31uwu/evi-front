<template>
  <div class="navbar">
    <div
      class="navbar-logo"
      @click="
        () => {
          getClaimForm = false;
        }
      "
    >
      <nuxt-link to="/">
        <img src="/assets/img/logo-evisalud.png" />
      </nuxt-link>
    </div>
    <svg
      v-if="currentWindowWidth < 768"
      @click="isCollapsedOpen = !isCollapsedOpen"
      width="39"
      height="28"
      viewBox="0 0 39 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2H37"
        stroke="#F0F0F0"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M2 14H37"
        stroke="#F0F0F0"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M2 26H37"
        stroke="#F0F0F0"
        stroke-width="4"
        stroke-linecap="round"
      />
    </svg>

    <div
      :class="
        currentWindowWidth > 768 ? 'navbar-options' : 'navbar-options-collapsed'
      "
      v-if="currentWindowWidth > 768 ? true : isCollapsedOpen"
    >
      <nuxt-link
        v-for="(option, index) in navOptions"
        :key="`navbar-option-${index}`"
        :to="getRoute(option.path)"
        class="d-flex align-items-center flex-row gap-1"
        
      >
        <component
          v-if="option.type != 'svg' && option.path != '/'"
          :is="getNavbarComponent(option)"
          :style="
            selectedOption == option.name ? 'color: white;' : 'color:#515166'
          "
                    @click="
            (e) => {
              if(option.path==='/login' && isLogged){
                e.preventDefault();
              }
              getClaimForm = false;
              isCollapsedOpen = false;
              selectedOption = option.name;
              openCourses = false;
            }
          "
        >
        <lazy-auth-account-block v-if="option.path==='/login'" id="account-block"/>
          <span v-if="option.path!='/login'">{{ option.name }}</span>
        </component>
        <div
          v-if="option.mode == 'multi' && option.path == '/courses'"
          style="position: relative"
          class="d-flex flex-column"
        >
          <svg
            @click="openCourses = !openCourses"
            :style="
              openCourses
                ? 'color: white; transform: rotate(180deg);'
                : 'color:#515166'
            "
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="6"
            viewBox="0 0 11 6"
            fill="none"
          >
            <path
              d="M1 1L5.5 5L10 1"
              stroke="#515166"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div
            class="d-flex flex-column gap-2"
            v-if="openCourses"
            style="position: absolute;color:white;font-weight:400;font-family:'Axiforma';top: 1em;background: black;#1C1C24;width: 350px;z-index: 3;padding: 1em;border-bottom-left-radius: 1em;border-bottom-right-radius: 1em;"
          >
            <span
              @click="
                () => {
                  openCourses = false;
                  getClaimForm = false;
                  isCollapsedOpen = false;
                  selectedOption = option.name;
                  openCourses = false;
                  redirectTo('/courses', 'investigation-courses');
                }
              "
              >Cursos de Investigacion
            </span>
            <div style="background: #515166; width: 95%; height: 1px" />
            <span
              @click="
                () => {
                  openCourses = false;
                  redirectTo('/courses', 'evidences-courses');
                }
              "
              >Cursos de medicina basada en evidencias
            </span>
          </div>
        </div>
        <div
          v-else-if="option.path == '/'"
          style="position: relative"
          class="d-flex flex-column"
        >
          <div
            style="
              width: 4.907px;
              height: 4.907px;
              transform: rotate(45.621deg);
              flex-shrink: 0;
              background: #00a9c3;
              border-radius: 1px;
              position: absolute;
              top: -0.5em;
              right: 0;
            "
          ></div>
          <span style="color: #00a9c3">{{ option.name }}</span>
          <svg
            width="37"
            height="6"
            viewBox="0 0 37 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.11366 1C2.68202 1.00113 15.1094 1 15.1094 1C14.7354 1.7434 14.6691 2.4189 14.7651 3.99998C14.7651 3.99998 2.52274 3.99929 1.12365 3.99998C-0.275449 4.00067 -0.454689 0.998866 1.11366 1Z"
              fill="#00A9C3"
            />
            <path
              d="M35.8938 1C34.3469 1.00113 22.0898 1 22.0898 1C22.4635 1.74341 22.5333 2.4189 22.449 3.99998C22.449 3.99998 34.5235 3.9993 35.9035 3.99998C37.2834 4.00067 37.4406 0.998866 35.8938 1Z"
              fill="#00A9C3"
            />
            <ellipse
              cx="2.3925"
              cy="2.50283"
              rx="2.3925"
              ry="2.50283"
              transform="matrix(0.999982 0.00598748 -0.00210909 0.999998 16.8125 -0.00976562)"
              fill="#00A9C3"
            />
          </svg>
        </div>
        <div v-else v-html="option.content" />
      </nuxt-link>
      <shop-car-side-car-item @openCarSideBar="openSidebarCart" />
    </div>
  </div>
</template>
<script setup>
import { getClaimForm, redirectTo } from "/composables/main-composables.js";
import { authStore } from "../../store/auth/auth.store";
const storeAuth=authStore();
const isLogged =computed(()=> storeAuth.isLogged); 

// const userData = computed(()=> storeAuth.getUserData);
const getRoute = (path) => {
  if (path === "/classroom/home") {
    if (isLogged) {
      return path;
    }
    return "/login";
  }
  return path;
};
const selectedOption = ref("Inicio");
const navOptions = [
  {
    name: "Inicio",
    path: "/",
    type: "link",
    mode: "single",
  },
  {
    name: "Cursos",
    path: "/courses",
    type: "link",
    mode: "multi",
  },
  {
    name: "Para Instituciones",
    path: "/institutions",
    type: "link",
    mode: "single",
  },
  {
    name: "Nosotros",
    path: "/about",
    type: "link",
    mode: "single",
  },
  {
    name: "Beneficios",
    path: "/benefits",
    type: "link",
    mode: "single",
  },
  {
    name: "Recursos",
    path: "/resources",
    type: "link",
    mode: "single",
  },
  {
    name: "Iniciar Sesion",
    path: "/login",
    type: "link",

  },
  {
    name: "Preguntas Frecuentes",
    path: "/commons",
    type: "svg",
    content: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9889 1C5.47398 1 1 5.47398 1 10.9889C1 16.5039 5.47398 21 10.9889 21C16.5039 21 21 16.5039 21 10.9889C21 5.47398 16.5039 1 10.9889 1ZM10.9889 19.4053C6.35991 19.4053 2.59468 15.6401 2.59468 10.9668C2.59468 6.33776 6.35991 2.57254 10.9889 2.57254C15.6401 2.57254 19.4275 6.33776 19.4275 10.9668C19.4053 15.6401 15.6401 19.4053 10.9889 19.4053Z" fill="#515166" stroke="#515166" stroke-width="0.5"/>
<path d="M10.878 5.87305C9.9921 5.87305 9.28336 6.09453 8.72965 6.55965C8.15379 7.00261 7.91016 7.64492 7.91016 8.39796L7.9323 8.46441H9.3055C9.3055 7.99929 9.46054 7.64492 9.74847 7.42343C10.0586 7.1798 10.4351 7.04691 10.9002 7.04691C11.3653 7.04691 11.7861 7.20195 12.0519 7.46773C12.3398 7.75566 12.4727 8.13218 12.4727 8.6416C12.4727 9.08456 12.3841 9.43894 12.1626 9.74902C11.9633 10.0369 11.6311 10.4799 11.1438 11.0558C10.6787 11.4987 10.3465 11.8531 10.2579 12.0967C10.125 12.3847 10.0586 12.8498 10.0586 13.5585H11.476C11.476 13.1156 11.4982 12.8055 11.5646 12.6062C11.5868 12.3847 11.764 12.1632 12.0076 11.9196C12.5835 11.388 13.0264 10.8343 13.3808 10.3249C13.6909 9.81546 13.8902 9.2396 13.8902 8.61945C13.8902 7.75566 13.6466 7.09121 13.0929 6.5818C12.5392 6.09453 11.8083 5.87305 10.878 5.87305Z" fill="#515166" stroke="#515166" stroke-width="0.5"/>
<path d="M11.4989 14.998H10.0371V16.482H11.4989V14.998Z" fill="#515166" stroke="#515166" stroke-width="0.5"/>
</svg>
`,
  },
];
const getNavbarComponent = (option) => {
  if (option.type === "link") {
    return "div";
  }
  if (option.type === "button") {
    return "button";
  }
  if (option.type == "icon") {
    return "svg";
  }

};
let currentWindowWidth = ref(null);
onMounted(() => {
  currentWindowWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    currentWindowWidth.value = window.innerWidth;
  });
});
const emit = defineEmits(["openSidebarCart"]);
const openSidebarCart = () => {
  emit("openSidebarCart");
};

const isCollapsedOpen = ref(false);
const openCourses = ref(false);
</script>
<style scoped lang="scss">
.button-navbar{
 background: transparent;
 border:1px solid #515166;
  border-radius: 1em;
  padding: 0.2em 0.8em;
  &:hover{
    color: white;
  }
}</style>