
<template>
  <div class="item-divider" v-if="docente.id != 1"></div>
  <div class="item" :class="index % 2 == 0 ? 'item-right' : 'item-left'">
    <div class="item-img-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="169"
        height="169"
        viewBox="0 0 149 149"
        fill="none"
      >
        <circle
          cx="74.5"
          cy="74.5"
          r="73.5"
          :class="
            (docenteDescriptionOpen.includes(docente.id) &&
              currentWindowWidth < 768) ||
            (currentWindowWidth > 768 &&
              !docenteDescriptionOpen.includes(docente.id))
              ? 'circle-active'
              : 'circle'
          "
          stroke-width="2"
        />
      </svg>
      <img class="item-img" :src="docente.image"  />
    </div>
    <div class="item-info">
      <span class="item-name">{{ docente.name }}</span>
      <span class="item-job">{{ docente.job }}</span>
      <div
        class="item-view-more"
        @click="docenteDescriptionOpenHandler(docente.id)"
      >
        Ver más
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
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
      <div
        v-if="currentWindowWidth > 768"
        class="item-description"
        v-show="
          (docenteDescriptionOpen.includes(docente.id) &&
            currentWindowWidth < 768) ||
          (currentWindowWidth > 768 &&
            !docenteDescriptionOpen.includes(docente.id))
        "
      >
        <p style="color: white; font-weight: 400">{{ docente.description }}</p>
        <div class="item-description-links">
          <button class="button-cuz">
            <span><a :href="docente.linkedin" target="_blank">Linkedn</a></span>
          </button>
          <button class="button-cuz">
            <span
              ><a :href="docente.posts" target="_blank"
                >Mira aqui sus publicaciones</a
              ></span
            >
          </button>
        </div>
      </div>
    </div>
   
  </div>
  <div
      v-if="currentWindowWidth <= 768"
      class="item-description"
      v-show="
        (docenteDescriptionOpen.includes(docente.id) &&
          currentWindowWidth < 768) ||
        (currentWindowWidth > 768 &&
          !docenteDescriptionOpen.includes(docente.id))
      "
    >
      <p style="color: white; font-weight: 400">{{ docente.description }}</p>
      <div class="item-description-links">
        <button class="button-cuz">
          <span><a :href="docente.linkedin" target="_blank">Linkedin</a></span>
        </button>
        <button class="button-cuz">
          <span
            ><a :href="docente.posts" target="_blank"
              >Mira aqui sus publicaciones</a
            ></span
          >
        </button>
      </div>
    </div>
</template>
  <script>
import { ref } from "vue";

export default {
  props: {
    docente: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: false,
      default: 1,
    },
  },

  setup(props) {
    let currentWindowWidth = ref(null);
    onMounted(() => {
      currentWindowWidth.value = window.innerWidth;
      window.addEventListener("resize", () => {
        currentWindowWidth.value = window.innerWidth;
      });
    });
    const docenteDescriptionOpen = ref([]);
    const docenteDescriptionOpenHandler = (index) => {
      if (docenteDescriptionOpen.value.includes(index)) {
        docenteDescriptionOpen.value = docenteDescriptionOpen.value.filter(
          (item) => item !== index
        );
      } else {
        docenteDescriptionOpen.value.push(index);
      }
    };

    return {
      docenteDescriptionOpenHandler,
      docenteDescriptionOpen,
      currentWindowWidth,
    };
  },
};
</script>
  
  <style scoped lang="scss">
.item {
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 1em;
  gap: 1em;
}
.item-divider {
  width: 90%;
  height: 2px;
  background: var(--EVI-DARK-004, #515166);
  margin: 1em 0;
}

@keyframes move-bottom {
  from {
    transform: translateY(10em);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframes move-left {
  /**from 100 to 0*/
  from {
    transform: translateX(10em);
  }
  to {
    transform: translateX(0px);
  }
}

@keyframes move-right {
  to {
    transform: translateX(10em);
  }
}
@keyframes move-top {
  to {
    transform: translateY(10em);
  }
}
.item-left {
  /** if is changing from item-right to item-left  return to initial position*/
  animation: move-bottom 0.5s ease-in-out forwards;
  transition: all 1s ease-in-out;
}
.item-right {
  animation: move-bottom 0.5s ease-in-out forwards;
  transition: all 0.3s ease-in-out;
}
@media (min-width: 768px) {
  .item-left {
    animation: move-left 0.5s ease-in-out forwards;
    transition: all 0.3s ease-in-out;
  }
  .item-right {
    animation: move-right 0.5s ease-in-out forwards;
    transition: all 0.3s ease-in-out;
  }
}

.item .item-img-container {
  position: relative;
}
.item-info {
  display: flex;
  flex-direction: column;
  width: 70%;
}
.item-name {
  color: var(--EVI400, #f0f0f0);
  font-family: Axiforma;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.item-job {
  color: var(--EVI-DARK-004, #515166);
  font-family: Axiforma;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.item-view-more {
  margin-top: 0.7em;
  color: #0193c1;
  font-family: Axiforma;
  font-size: 15px;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  text-decoration-line: underline;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.item-view-more:hover {
  cursor: pointer;
}
.item-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 1em;
  position: absolute;
  left: 10px;
  top: 10px;
}
.item-description {
  color: var(--EVI-DARK-004, #515166);
  font-family: Axiforma;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  transition: all 0.3s ease-in-out;
  animation: fade-in 0.8s ease-in-out;
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.circle {
  stroke: var(--EVI-DARK-004, #515166);
  /** animate using stroke dash */
  animation: dash-reverse 1s linear forwards;
  stroke-dasharray: 460;
  stroke-dashoffset: 460;
  transition: all 0.3s ease-in-out;
}
@keyframes dash-reverse {
  to {
    stroke-dashoffset: 0;
  }
}
.circle-active {
  stroke: var(--EVI500, #0193c1);
  /** animate using stroke dash */
  stroke-dasharray: 460;
  stroke-dashoffset: 460;
  animation: dash 0.5s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
.item-description-links {
  display: flex;
  flex-direction: row;
  gap: 0.8em;
}
.button-cuz {
  border-radius: 30px;
  border: none;
  background: #515166;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.06);
  color: var(--EVI400, #f0f0f0);
  padding: 0.5em 2em;
  &:hover {
    cursor: pointer;
    background: #0193c1;
  }
}
</style>