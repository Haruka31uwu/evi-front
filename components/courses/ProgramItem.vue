
<template>
  <div class="program-container">
    <div
      class="program-img-container"
      :style="`background:url(${program.img}) no-repeat;background-size: cover;width:100%;height:200px;border-radius:1em 1em 0 0;position:relative`"
    >
      <div class="program-type d-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="53"
          viewBox="0 0 45 53"
          fill="none"
        >
          <path
            opacity="0.7"
            d="M41.0519 29.4886V21.8251L39.7219 22.343L36.8176 19.4546L34.3159 21.1221C33.0087 19.1777 30.6809 17.6209 27.8104 16.7512C29.8738 15.1415 31.2102 12.626 31.2102 9.7954C31.2096 4.94547 27.3021 1 22.4994 1C17.6967 1 13.7892 4.94547 13.7892 9.79481C13.7892 12.6225 15.1233 15.1356 17.1826 16.7453C14.3034 17.6168 11.9855 19.17 10.6771 21.1168L8.18184 19.454L5.27748 22.3424L3.94755 21.8245V29.488C2.28733 29.7425 1 31.4177 1 33.4452C1 35.4722 2.28733 37.1473 3.94755 37.4019V44.7725L22.4994 52L41.0519 44.7725V37.4019C42.7121 37.1473 44 35.4728 44 33.4452C44 31.4177 42.7121 29.7425 41.0519 29.4886ZM36.7079 20.5865L38.825 22.6918L26.1221 27.6407L36.7079 20.5865ZM14.6646 9.7954C14.6646 5.43276 18.1793 1.88384 22.4994 1.88384C26.8195 1.88384 30.3343 5.43276 30.3343 9.79481C30.3343 14.1569 26.8195 17.7064 22.4994 17.7064C18.1793 17.7064 14.6646 14.1575 14.6646 9.7954ZM8.29096 20.5865L18.8761 27.6407L6.17324 22.6918L8.29096 20.5865ZM1.87534 33.4452C1.87534 31.73 3.00102 30.3347 4.38522 30.3347C5.76941 30.3347 6.89568 31.73 6.89568 33.4452C6.89568 35.1605 5.76941 36.5552 4.38522 36.5552C3.00102 36.5558 1.87534 35.1605 1.87534 33.4452ZM22.0617 50.8822L4.8223 44.1662V37.4066C4.83922 37.4042 4.85498 37.3966 4.87132 37.3936C5.05689 37.3618 5.23838 37.3159 5.41286 37.2499C5.42745 37.2446 5.44145 37.2369 5.45604 37.231C5.63344 37.1609 5.80501 37.0755 5.96782 36.9729C5.97424 36.9688 5.98124 36.9659 5.98825 36.9611C6.15048 36.8574 6.30337 36.7361 6.44867 36.6035C6.4656 36.5876 6.48369 36.5734 6.50061 36.5575C6.63775 36.4273 6.76496 36.2835 6.88342 36.1297C6.9021 36.105 6.92136 36.0814 6.94003 36.0567C7.05324 35.9023 7.15653 35.7373 7.24931 35.5635C7.26507 35.534 7.28024 35.5046 7.29541 35.4745C7.3847 35.2972 7.46348 35.1116 7.52825 34.9183C7.53818 34.8888 7.54693 34.8588 7.55568 34.8293C7.61871 34.629 7.67064 34.4222 7.70624 34.2077C7.70974 34.1859 7.71149 34.1635 7.71499 34.1417C7.74884 33.9154 7.76985 33.6833 7.76985 33.4452C7.76985 33.2072 7.74884 32.9756 7.71499 32.7488C7.71208 32.727 7.70974 32.7046 7.70624 32.6828C7.67064 32.4689 7.61929 32.2621 7.55568 32.0611C7.54635 32.0317 7.53818 32.001 7.52825 31.9722C7.4629 31.7783 7.38412 31.5933 7.29541 31.4159C7.28024 31.3859 7.26507 31.3564 7.24931 31.327C7.15653 31.1531 7.05382 30.9881 6.94003 30.8338C6.92136 30.809 6.90268 30.7849 6.88342 30.7601C6.76496 30.6069 6.63833 30.4626 6.50061 30.3323C6.48369 30.3158 6.4656 30.3017 6.44867 30.2858C6.30337 30.1532 6.15048 30.0318 5.98825 29.9281C5.98124 29.924 5.97424 29.9205 5.96724 29.9163C5.80443 29.8144 5.63286 29.729 5.45604 29.6583C5.44145 29.6524 5.42745 29.6453 5.41286 29.6394C5.23838 29.5734 5.05689 29.528 4.87132 29.4956C4.8544 29.4927 4.83864 29.485 4.8223 29.4827V23.1131L22.0617 29.8291V50.8822ZM11.4188 21.6124C12.7178 19.6826 15.1279 18.1624 18.1408 17.3982C19.4247 18.1512 20.9104 18.5902 22.4994 18.5902C24.0884 18.5902 25.5748 18.1512 26.858 17.3982C29.8557 18.1583 32.2857 19.6821 33.5847 21.6088L22.4994 28.9966L11.4188 21.6124ZM40.1765 44.1662L22.9371 50.8822V29.8291L40.1765 23.1137V29.4886C38.5163 29.7431 37.2284 31.4183 37.2284 33.4458C37.2284 35.4733 38.5163 37.1479 40.1765 37.4025V44.1662ZM40.6142 36.5558C39.23 36.5558 38.1037 35.1605 38.1037 33.4458C38.1037 31.7306 39.23 30.3353 40.6142 30.3353C41.9984 30.3353 43.1247 31.7306 43.1247 33.4458C43.1241 35.1605 41.9984 36.5558 40.6142 36.5558Z"
            fill="#F0F0F0"
            stroke="#F0F0F0"
            stroke-width="1.8"
          />
        </svg>
      </div>
    </div>
    <div class="program-content">
      <h5>
        {{ program.title }}
      </h5>
      <p class="program-description">
        {{ program.hours }}
      </p>
      <ul class="program-course-list">
        <span style="font-family: Axiforma">Cursos que incluye:</span>
        <li
          class="program-courses"
          v-for="(programCourse, index) in program.coursesList"
          :key="`course-${program.id}-${index}`"
        >
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
              fill="#515166"
            />
          </svg>
          {{ programCourse.title }}
        </li>
      </ul>
      <div class="program-footer">
        <span class="program-more-info" @click="redirectTo('/program-detail/' + program.id,'course-hero')">
          <span
            
            style="color: #0393aa; text-decoration: underline;cursor: pointer;"
            >Más información</span
          >
        </span>
        <button class="btn-blue w-100" style="max-width: 200px!important;">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
          >
            <path
              d="M7.57169 10.8528C6.88583 10.8528 6.32766 11.4108 6.32766 12.0967C6.32766 12.7827 6.88566 13.3409 7.57169 13.3409C8.25756 13.3409 8.81557 12.7827 8.81557 12.0967C8.81573 11.4108 8.25773 10.8528 7.57169 10.8528ZM7.57169 12.6877C7.24591 12.6877 6.98087 12.4225 6.98087 12.0967C6.98087 11.7711 7.24591 11.506 7.57169 11.506C7.89732 11.506 8.16236 11.7711 8.16236 12.0967C8.16252 12.4226 7.89748 12.6877 7.57169 12.6877ZM11.656 10.8528C10.9702 10.8528 10.4122 11.4108 10.4122 12.0967C10.4122 12.7827 10.9702 13.3409 11.656 13.3409C12.3419 13.3409 12.9001 12.7827 12.9001 12.0967C12.8999 11.4108 12.3419 10.8528 11.656 10.8528ZM11.656 12.6877C11.3303 12.6877 11.0654 12.4225 11.0654 12.0967C11.0654 11.7711 11.3304 11.506 11.656 11.506C11.9818 11.506 12.2469 11.7711 12.2469 12.0967C12.2467 12.4226 11.9817 12.6877 11.656 12.6877ZM14.6178 3.9115C14.4959 3.76551 14.3118 3.68174 14.1126 3.68174H4.84357C4.80405 3.68174 4.76519 3.685 4.72746 3.69121L4.2988 1.31827C4.23282 0.955249 3.90818 0.672737 3.54238 0.658856C3.53307 0.658366 3.52409 0.658203 3.51462 0.658203H0.560979C0.380694 0.658203 0.234375 0.804522 0.234375 0.984807C0.234375 1.16509 0.380694 1.31141 0.560979 1.31141H3.51266C3.51413 1.31141 3.5156 1.31157 3.51707 1.31157C3.57521 1.31337 3.64543 1.37575 3.65604 1.43487L4.19494 4.4179C4.19673 4.43178 4.19869 4.44534 4.20114 4.45857L5.16348 9.78401C5.22945 10.1478 5.55557 10.431 5.92234 10.4436C5.9328 10.4441 5.94374 10.4442 5.95402 10.4442H13.0087C13.0183 10.4442 13.0273 10.4441 13.0366 10.4436C13.4022 10.4297 13.7269 10.1472 13.7928 9.78384L14.755 4.45857C14.7913 4.25852 14.7411 4.05929 14.6178 3.9115ZM14.1132 4.33511C14.1131 4.33723 14.1128 4.33968 14.1123 4.34229L13.6911 6.67327H5.26505L4.84373 4.3418C4.84341 4.33952 4.84308 4.3374 4.84275 4.33511H14.1132ZM13.0111 9.7907C13.0096 9.7907 13.0082 9.79086 13.0067 9.79086H5.94929C5.94798 9.79086 5.94651 9.7907 5.94521 9.7907C5.88707 9.7889 5.81701 9.72652 5.80624 9.66741L5.38312 7.32582H13.5732L13.1503 9.66708C13.1393 9.72669 13.0691 9.7889 13.0111 9.7907Z"
              fill="#F0F0F0"
              stroke="#F0F0F0"
              stroke-width="0.2"
            />
          </svg>
          <span class="d-flex flex-column" @click="addToCart(program)"
            >Agregar al carrito
            <span>S/.{{ program.pricePen }}(${{ program.priceUsd }}) </span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
  <script>
import { addMethod } from "yup";
import { useShopCar } from "/composables/shop-car/shop-car.composables";
import { carStore } from "../../store/car/car.store";
import { getProgramCourses } from "/composables/courses-composables";
import { useSwall } from "/composables/main-composables.js";

export default {
  name: "CourseItem",
  props: {
    program: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = carStore();
    const getCarItems = computed(() => store.getCarItems);
    const { showSuccessSwall, showErrorSwall, showConfirmSwall } = useSwall();
    const addToCart = async (program) => {
      const { addCarItem, removeCarItem } = useShopCar();
      const existsProgram = getCarItems.value.find(
        (item) => item.id == program.id
      );
      //check if program is alredy in cart
      if (existsProgram) {
        showErrorSwall("", "El programa ya se encuentra en el carrito");
        return;
      }
      
      //check if subcourses are in cart
      const courseList = getProgramCourses(program.coursesList);
      const programInCar= getCarItems.value.find((item) => item.type==3);
      const  getAllSubCoursesInProgram = getCarItems.value.map((item) => {
        if (item.type == 3) {
        
          return item.coursesList.map((course) => {
            return course.id;
          });
        }
        return item.id;
      }).flat();
     
      if (getAllSubCoursesInProgram.length !== 0 && typeof programInCar !== "undefined") {
        const uniqueSubCoursesInProgram = getAllSubCoursesInProgram.filter(
          (item, index, self) =>
            index ===
            self.findIndex((t) => t.id === item.id && t.type === item.type)
        );

        const coursesIdsInProgram = courseList.map((course) => course.id);
        const remainingCourses = coursesIdsInProgram.filter((courseId) => {
          if (!uniqueSubCoursesInProgram.includes(courseId)) {
            return courseId;
          }
        });
        if (remainingCourses.length > 0) {
          const isConfirmed = await showConfirmSwall(
            "",
            `Hay cursos del programa que ya se encuentran en el carrito.\nDesea Agregar los cursos que no se encuentran en el carrito?`,
            "Si.Agregalo",
            "No"
          );
          if (isConfirmed) {
            remainingCourses.forEach((courseId) => {
              const course = courseList.find((course) => course.id == courseId);
              addCarItem(course);
            });
            showSuccessSwall("", "Curso agregado al carrito");
          }
          return;
        }
      }
      const existSubCourses = getCarItems.value.filter((item) => {
        return courseList.find((course) => course.id == item.id);
      });
      //if not, add program to cart
      if (existSubCourses.length == 0) {
        program.coursesList = courseList;
        addCarItem(program);
        showSuccessSwall("", "Programa agregado al carrito");
      }
      //if yes, ask if user wants to replace them
      else {
        const coursesTitlesConcat = existSubCourses
          .map((course) => course.title)
          .join(", ");
        const isConfirmed = await showConfirmSwall(
          "",
          `El curso/Los cursos ${coursesTitlesConcat} ya se encuentra(n) en el carrito.\nDesea Agregar el programa en su lugar?`,
          "Si.Agregalo",
          "No"
        );
        if (isConfirmed) {
          courseList.forEach((course) => {
            removeCarItem(course);
            courseList.pricePen
          });
          program.coursesList = courseList;
          addCarItem(program);
          showSuccessSwall("", "Programa agregado al carrito");
        }
      }
    };
    return {
      program: props.program,
      addToCart,
    };
  },
};
</script>