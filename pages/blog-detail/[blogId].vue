<template>
  <section
    class="blog-content px-5 pt-5"
    v-if="blogData.value"
    id="blog-content"
  >
    <div class="d-flex flex-column mx-auto" style="width: 90%">
      <div class="blog-options">
        <span @click="redirectTo('/resources')">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 0.999998L1 7L7 13"
              stroke="#0393AA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Atrás</span
        >
        <span>|</span>
        <span>Recursos/Blog/{{ blogData.value.id }}</span>
      </div>
      <div class="blog-header">
        <h2>{{ blogData.value.title }}</h2>
        <div class="gap-2 d-flex flex-row align-items-center">
          <span>Por haruka</span>
          <small> {{ blogData.value.date }}</small>
        </div>
        <div class="contenedor-imagen my-4">
          <img :src="blogData.value.mainImg" alt="Tu imagen" />
        </div>
      </div>
      <div
        class="blog-share d-flex flex-column flex-md-row align-items-center gap-2 gap-md-5 mt-4"
      >
        <span style="color: #00a9c3; font-weight: normal">Compartir en: </span>
        <div class="share-icons">
          <a href="https://www.whatsapp.com/" target="_blank">
            <Icon name="mdi:whatsapp" size="2em" color="#515166"></Icon
          ></a>
          <a href="https://www.instagram.com/" target="_blank">
            <Icon name="mdi:instagram" size="2em" color="#515166"></Icon
          ></a>
          <a href="https://www.facebook.com/" target="_blank">
            <Icon name="mdi:facebook" size="2em" color="#515166"></Icon
          ></a>
          <a href="https://www.instagram.com/" target="_blank">
            <Icon name="mdi:instagram" size="2em" color="#515166"></Icon
          ></a>
          <a href="https://www.twitter.com/" target="_blank">
            <Icon name="mdi:twitter" size="2em" color="#515166"></Icon
          ></a>
          <a href="https://www.linkedin.com/" target="_blank">
            <Icon name="mdi:linkedin" size="2em" color="#515166"></Icon
          ></a>
        </div>
      </div>
      <div class="blog-body d-flex flex-column gap-2">
        <div
          class="blog-body-item 4"
          v-for="(item, index) in blogData.value.content"
          :key="index"
        >
          <div v-if="item.type == 'text'">
            <h4>{{ item.title }}</h4>
            <p>{{ item.value }}</p>
          </div>
          <div v-else-if="item.type == 'list'">
            <ol v-if="item.order == 'ordered'">
              <li v-for="(listItem, index) in item.value" :key="index">
                <span>
                  {{ listItem.title }}
                </span>
                <p>
                  {{ listItem.value }}
                </p>
              </li>
            </ol>
            <ul v-else>
              <li v-for="(listItem, index) in item.value" :key="index">
                <span>
                  {{ listItem.title }}
                </span>
                <p>
                  {{ listItem.value }}
                </p>
              </li>
            </ul>
          </div>
          <div v-else-if="item.type == 'img'">
            <img :src="item.value" alt="Tu imagen" style="width: 100%" />
          </div>
        </div>
        <div>
          <h4>Fuentes</h4>
          <ul>
            <li
              v-for="(source, index) in blogData.value.references"
              :key="index"
            >
              <span>{{ source }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getBlog } from "/composables/blog-composables.js";
import { redirectTo } from "/composables/main-composables.js";

const blogId = ref(null);
const blogData = reactive({});
const route = useRoute();
onMounted(() => {
  const params = route.params;

  if (params.blogId) {
    blogId.value = params.blogId;
    blogData.value = getBlog(blogId.value);
  }
});
</script>
<style scoped lang="scss">
.contenedor-imagen {
  height: 50%;
  max-height: 600px; /* Establece la altura máxima que quieres mostrar */
  overflow: hidden; /* Oculta cualquier parte de la imagen que esté fuera del contenedor */
  border-radius: 2rem;
}

.contenedor-imagen img {
  width: 100%;
  height: auto;
  border-radius: 2rem;
  object-position: 0 -50%;
}
.share-icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
  svg {
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      path {
        fill: #00a9c3 !important;
        stroke: #00a9c3 !important;
      }
    }
  }
}
.blog-body {
  height: auto;
  padding: 2em 0;
  .blog-body-item {
    height: auto;
  }
}
h2,
small {
  color: #00a9c3;
}
h2,
h4 {
  font-weight: 600;
}.blog-options{
    display: flex !important;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0em;
    width: 80%;
    max-width: 350px;
    span {
      color: gray;
      font-weight: 400;
      font-size: 1em;
      font-family: "Axiforma";
    }
    span:nth-child(1) {
      color: #0393aa;
      font-weight: 700;
      &:hover {
        cursor: pointer;
        color: gray;
        svg {
          path {
            stroke: gray;
          }
        }
      }
    }
  }
</style>
