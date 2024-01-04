<template>
  <section
    class="d-flex justify-content-center pt-5 flex-column align-items-center"
  >
    <div class="section-title" style="margin-bottom: 2em">
      <h2>Precios diferenciados</h2>
      <div class="section-decorator"></div>
    </div>
    <div class="section-container row ">
      <div class="col col col-sm-12 col-md-12 col-xl-5 py-4 d-flex align-items-end" >
       <div style="width: 80%;" class="d-flex flex-column justify-content-center ms-5 align-items-center gap-3">
        <svg
          width="106"
          height="100"
          viewBox="0 0 106 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.2454 35.5195C43.2798 34.2109 47.5135 39.4738 44.8825 43.8894C43.2595 46.614 39.6351 47.5521 36.8206 45.9794C32.2959 43.4521 33.1759 36.8369 38.2454 35.5195ZM52.0586 64.1582C51.5399 64.1582 51.0223 64.224 50.5217 64.3533C45.4578 65.6695 44.5563 72.2738 49.1003 74.8143C51.9137 76.387 55.5369 75.4466 57.161 72.7243C59.4421 68.8993 56.5551 64.1582 52.0586 64.1582ZM94.0227 46.9132L66.4042 93.2002C62.5228 99.7058 53.9014 101.926 47.1975 98.1803L7.02635 75.7393C0.297553 71.9801 -1.98691 63.6321 1.8798 57.1517L29.4972 10.8647C31.7307 7.12087 35.2553 4.81167 39.6782 4.19793L68.8755 0.149432C73.389 -0.476364 77.6192 0.873866 80.8789 4.00285L80.8777 4.00394C82.1972 5.30924 83.2188 6.86003 83.921 8.55439L94.896 35.0461C96.5575 39.0573 96.2551 43.1727 94.0227 46.9132ZM39.7574 48.5725C44.8995 48.5703 48.6235 43.8664 47.2994 39.0836C46.1838 35.0527 41.9094 32.6733 37.755 33.7495C35.7435 34.2712 34.0627 35.5184 33.0219 37.2632C30.0261 42.2849 33.8056 48.5758 39.7574 48.5725ZM59.5791 67.9185C58.4635 63.8886 54.1891 61.5082 50.0324 62.5844C45.869 63.6628 43.4101 67.799 44.5234 71.8201C45.4397 75.1299 48.5317 77.4106 52.0394 77.4095C57.1746 77.4073 60.9031 72.7067 59.5791 67.9185ZM61.2735 45.8095L29.6003 63.5061C28.513 64.1133 29.4723 65.6926 30.5471 65.092L62.2204 47.3954C63.2986 46.7937 62.3529 45.2079 61.2735 45.8095ZM73.1647 9.77311C69.4486 7.69625 64.6555 8.94894 62.5171 12.5338C60.3731 16.1297 61.6541 20.7602 65.3701 22.8359C69.0873 24.9128 73.8579 23.6973 76.0177 20.0752C78.1606 16.4793 76.8808 11.85 73.1647 9.77311ZM100.95 19.2379L85.5305 7.51322L96.6526 34.3666C98.5384 38.9192 98.1964 43.5815 95.6616 47.8294L68.9967 92.5207H92.7837C100.071 92.5207 106 86.7833 106 79.7319V29.2922C106 25.2295 104.25 21.7476 100.95 19.2379Z"
            fill="#0393AA"
          />
        </svg>
        <p class="text-center">
          En EviSalud, estamos comprometidos en establecer alianzas que
          fortalezcan la capacitación en profesionales y estudiantes de la
          salud; por ello, tenemos convenios con instituciones que comparten
          nuestra misma visión en educación.
        </p>
       </div>
      </div>
      <div
        class="col col-sm-12 col-md-12 col-xl-7 py-4 d-flex course-detail-inversion align-self-end"
      >
        <div
          style="width: 100%"
          class="d-flex flex-column gap-4 ms-4 justify-content-center align-items-center align-items-lg-start"
          :style="{
            background: '#0393AA',
            borderRadius: '10px',
            borderTopRigthRadius: '0px',
            borderBottomRigthRadius: '0px',
            padding: '2em',
          }"
        >
          <ul class="py-0 m-0">
            <li v-for="(discount,index) in discounts" :key="index">
            <p>
                <span class="discount">{{discount.discount}} de descuento </span>
                <span class="description">{{discount.description}}</span>
            </p>
            </li>
          </ul>
          <div style="width: 80%;background: white;height: 1px;margin: 0;"></div>
          <p>Además, si eres estudiante de pregrado, sólo envíanos la foto de tu carné y obtén un precio diferenciado para que puedas capacitarte desde tu etapa universitaria.</p>
          <div class="btn-white" @click="openStudentRegisterModal()"><span>Registrarme como estudiante</span></div>
        </div>
      </div>
    </div>
    <div style="width: 80%;background: #515166;height: 1px;margin: 0;margin-top: 3em;"></div>

  </section>
</template>
<script >
export default {
    emits: ['openStudentRegisterModal'],
    setup(props,ctx){
        const discounts = [
            {
                discount: '20%',
                description: 'para integrantes de la Sociedad Peruana de Medicina Interna (SPMI).'
            },
            {
                discount: '10%',
                description: 'para integrantes de la Sociedad Científica Médico Estudiantil Peruana (SOCIMEP).'
            },
            {
                discount: '10%',
                description: 'para la comunidad de USAMEDIC'
            },
        ]
        const openStudentRegisterModal = () => {
          ctx.emit('openStudentRegisterModal');
        };
        return {
            discounts,
            openStudentRegisterModal
        }
    }
}
</script>
<style scoped>
p{
    font-family: 'Axiforma', sans-serif;
}
.discount{
    font-size: 1em;
    font-weight: 700;
    color: #192855;
}.description{
    font-size: 1 em;
    font-weight: 400;
    ;
}
</style>