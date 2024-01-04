<template>
  <section class="d-flex justify-content-center flex-column align-items-center">
    <div class="section-title d-flex mb-5">
      <h2>EviBlog</h2>
      <div class="section-decorator" style="right: -1em"></div>
    </div>
    <div class="row d-flex gap-4 flex-row" style="width: 90%">
      <div class="col-12 col-md-5">
        <div class="blog-item d-flex flex-column">
          <img
            :src="blogItems.main.img"
            alt=""
            style="width: 50%; height: 100%; border-radius: 1rem"
            :style="
              currentWindowWidth < 768
                ? 'width:95%;height:300px;margin:0 auto'
                : ''
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
            <li class="d-flex flex-row gap-4"> 
              <img
                :src="item.img"
                alt=""
                style="
                  width: 30%;
                  min-width: 180px;
                  height: 160px;
                  border-radius: 0.5rem;
                "
                class="mb-3"
              />
              <div style="width: 50%">
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
    </div>
  </section>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

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
        img: "/assets/img/resources/blog-main.jpg",
        title: "Medicina al dia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        date: "Marzo 15, 2023",
      },
      items: [
        {
          img: "/assets/img/resources/blog1.jpg",
          title: "Medicina al dia",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          date: "Marzo 15, 2023",
        },
        {
          img: "/assets/img/resources/blog2.jpg",
          title: "Medicina al dia",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          date: "Marzo 15, 2023",
        },
        {
          img: "/assets/img/resources/blog3.jpg",
          title: "Medicina al dia",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          date: "Marzo 15, 2023",
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
}
</style>
