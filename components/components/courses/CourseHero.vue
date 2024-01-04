<template>
    <div v-if="courseInfo.value" class="hero-container">
      <div class="hero" :style="{ backgroundImage: `url(${courseInfo.value.img})`}"></div>
      <div class="hero-content" :style="{
        background:`linear-gradient(239deg, ${courseInfo.value.color} -11.4%, ${courseInfo.value.color2} 77.6%)`,

      }">
       <div class="hero-content-text">
          <h1>
            Curso: "{{ courseInfo.value.title  }}"
          </h1>
          <div class="btn-white">
              <span>Inicia ahora</span>
          </div>
       </div>
      </div>
    </div>
  </template>
  <script>
  export default{
    props:{
        courseInfo:{
            type: Object,
            required: true,
            default: () => ({}),
        },
    },
    setup(props){
        const getBackgroundImage = () => {
            return `background:url(${props.courseInfo.value.img})`;
        };
        return{
            courseInfo: props.courseInfo,
            getBackgroundImage
        }
    },
  }
</script>
  <style lang="scss" scoped>
  .hero-container {
    position: relative;
    min-height: 800px;
    height: 50vh;
    .hero {
      height: 100%;
      width: auto;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: 1;
    }
    .hero-content {
      position: absolute;
      width:60%;
      height: 100%;
      top:0;
      border-radius: 0px 50% 50% 0px;
      display: flex;
      align-items: center;
    }
    @media (max-width: 1250px) {
      .hero-content {
        width: 100%;
      }
    }
  }
  </style>