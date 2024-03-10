<template>
    <section >
      <div  class="section-title d-flex flex-column justify-content-center align-items-center">
       <div style="position: relative;">
        <h2>Plana Docente</h2>
        <img src="/assets/img/courses/docentes-item.svg" style="bottom:0;right: -1em;position: absolute;"  alt="docente-i" />
       </div>
      </div>
      <div class="section-items">
        <courses-courses-details-docente-item
          v-for="(docente,index) in docentes"
          :key="docente.id"
          :docente="docente"
          :index="index+1"
        />
      </div>
    </section>
  </template>
  <script>
  import { onBeforeMount, ref } from 'vue';
  import { getDocentesCourse } from '/composables/docentes-composables.js'
  export default {
    props:{
      docenteIds:{
        type:Array,
        default:()=>[]
      }	
    },
    setup(props) {
      const params = ref({
        docenteIds: props.docenteIds
      });
      const docentes = ref([]);
      onBeforeMount(async () => {
        try {
           docentes.value=getDocentesCourse(params.value.docenteIds);
        } catch (error) {
          console.error(error);
        }
      });
  
      return {
        docentes
      };
    }
  }
  </script>
  
  <style scoped>
  section {
    background: var(--EVI-DARK-005, #1c1c24);
    box-shadow: 0px -4px 50px 0px rgba(0, 0, 0, 0.2);
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 2em 0;
  }
  
  
  img {
    margin-top: -2.2em;
  }.section-items{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 auto;
      width: 90%;
      margin-top: 2em;
      height: auto;
  }
  </style>