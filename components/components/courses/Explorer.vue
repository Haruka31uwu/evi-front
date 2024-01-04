<template>
  <section class="section-explorer">
    <div class="section-content" style="position: relative">
      <div style="align-self: flex-end">
        <input
          type="text"
          :style="
            currentWindowWidth < 1024
              ? 'width: 90%;margin:0 auto;margin-bottom:1em'
              : 'width:300px'
          "
          class="search-input"
          placeholder="Buscar curso o programa"
          v-model="courseInput"
        />
        <svg
        v-if="courseInput==''"
          style="position: absolute;right: 1em;top:0.6em"
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M16.832 15.8483L12.3659 11.3821C13.4938 9.99558 14.0466 8.2292 13.9106 6.44696C13.7745 4.66484 12.9598 3.00294 11.6344 1.80373C10.3091 0.604641 8.5742 -0.0402426 6.78742 0.00194683C5.0006 0.0443157 3.29809 0.770488 2.03098 2.03099C0.770525 3.29815 0.0443375 5.00072 0.001949 6.78747C-0.0402641 8.5743 0.604599 10.3092 1.80372 11.6345C3.00296 12.9599 4.66485 13.7746 6.44692 13.9107C8.22903 14.0467 9.99543 13.4939 11.382 12.366L15.8482 16.8321C16.0279 16.986 16.2732 17.0384 16.5001 16.9714C16.7269 16.9043 16.9043 16.7268 16.9714 16.5001C17.0384 16.2733 16.986 16.0279 16.8321 15.8482L16.832 15.8483ZM3.01488 10.9147C1.96749 9.86797 1.37888 8.44785 1.37856 6.96711C1.37825 5.48621 1.96626 4.06593 3.01317 3.01869C4.06024 1.97145 5.48036 1.38311 6.96124 1.38311C8.44197 1.38311 9.86225 1.97145 10.9092 3.01869C11.9562 4.06593 12.5442 5.48621 12.5439 6.96711C12.5436 8.44785 11.9548 9.86797 10.9074 10.9147C9.8652 11.9694 8.444 12.5631 6.96124 12.5631C5.47832 12.5631 4.05713 11.9694 3.01488 10.9147Z"
            fill="#515166"
          />
        </svg>
      </div>

      <div
        class="courses-list-container"
        v-for="(programtype, index) in courses.coursesTypes"
        :key="`typeProgram-${index}`"
      >
        <h4
          :id="
            programtype.id == 1 ? 'investigation-courses' : 'evidences-courses'
          "
          class="ms-5"
        >
          {{ programtype.title }}
        </h4>
        <hr />
        <div
          class="courses-items-container"
          :id="`courses-container-${programtype.id}`"
        >
          <courses-course-item
            v-for="(course, index2) in courses.coursesList.filter(
              (course) =>
                course.type == programtype.id &&
                course.title.toLowerCase().includes(courseInput.toLowerCase())
            )"
            :key="`course-${index2}`"
            :course="course"
          />
        </div>
        <div v-if="currentWindowWidth < 1024" class="courses-pages">
          <div
            class="page"
            :class="pages[programtype.id] == i2 + 1 ? 'active' : ''"
            @click="changePage(i2 + 1, programtype.id)"
            v-for="(i1, i2) in courses.coursesList.filter(
              (course) =>
                course.type == programtype.id &&
                course.title.toLowerCase().includes(courseInput.toLowerCase())
            )"
            :key="i2"
          ></div>
        </div>
        <div
          class="d-flex justify-content-center my-5"
          v-if="
            courses.coursesList.filter(
              (course) =>
                course.type == programtype.id &&
                course.title.toLowerCase().includes(courseInput.toLowerCase())
            ).length == 0
          "
        >
          <span style="font-size: 2em">No Se encuentran Resultados</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import coursesData from "/src/data/courses.json";
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {
    let currentWindowWidth = ref(null);
    let pages = ref([1, 1, 1]);
    const changePage = (pagev, programId) => {
      const element = document.getElementById(`courses-container-${programId}`);
      element.scrollLeft = (pagev - 1) * element.offsetWidth*0.95;
      pages.value[programId] = pagev;
    };
    onMounted(() => {
      currentWindowWidth.value = window.innerWidth;
      window.addEventListener("resize", () => {
        currentWindowWidth.value = window.innerWidth;
      });
    });
    const courses = ref(coursesData);
    const courseInput = ref("");
    return {
      courses,
      courseInput,
      currentWindowWidth,
      pages,
      changePage,
    };
  },
});
</script>
<style scoped>
.courses-pages {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
}
.page {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #515166;
  margin: 0 5px;
  cursor: pointer;
}
.active {
  background: #00a9c3;
}
</style>