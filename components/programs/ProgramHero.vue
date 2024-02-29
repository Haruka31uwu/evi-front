<template>
    <div v-if="programInfo.value" class="hero-container" id="course-hero">
      <div class="hero" :style="{ backgroundImage: `url(${programInfo.value.img})`}"></div>
      <div class="hero-content">
       <div class="hero-content-text">
          <h1>
            Programa de formación en  "{{ programInfo.value.title  }}"
          </h1>
          <div class="btn-white w-100">
              <span>Inicia ahora</span>
          </div>
       </div>
      </div>
    </div>
  </template>
  <script>
  export default{
    props:{
        programInfo:{
            type: Object,
            required: true,
            default: () => ({}),
        },
    },
    setup(props){
        const getBackgroundImage = () => {
            return `background:url(${props.programInfo.value.img})`;
        };
        return{
            courseInfo: props.programInfo,
            getBackgroundImage
        }
    },
  }
</script>
  <style lang="scss" scoped>
  .hero-container {
    position: relative;
    min-height: 800px;
    height: 100vh;
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
      background: linear-gradient(90deg, #1F3C90 0%, #00A9C396 100%);
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