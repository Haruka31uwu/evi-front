<template>
  <div class="modal-customized">
    <div
      class="modal-customized-body d-flex flex-column pb-5"
      style="border-radius: 2em"
    >
      <div
        class="modal-customized-header w-100 d-flex justify-content-between px-3 pt-4 w-100"
      >
        <svg
          class=""
          width="36"
          height="20"
          viewBox="0 0 36 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-4.37102e-07 9.99972C-4.47741e-07 10.2431 0.167831 10.5666 0.338169 10.7237L9.93811 19.6715C10.3864 20.078 11.1125 20.1249 11.6348 19.7127C12.1019 19.3437 12.1137 18.6245 11.6817 18.2239L3.97567 11.0526L34.8001 11.0526C35.463 11.0526 36 10.5812 36 10.0001C36 9.41851 35.4626 8.9475 34.8001 8.9475L3.97567 8.9475L11.6817 1.7762C12.1136 1.37566 12.0831 0.67402 11.6348 0.287828C11.1619 -0.120057 10.3792 -0.0837119 9.93811 0.328947L0.338169 9.2764C0.0560794 9.51908 0.00459628 9.75294 -4.37115e-07 10L-4.37102e-07 9.99972Z"
            fill="#F0F0F0"
          />
        </svg>
        <svg
          @click="closeModal"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.3474 9.99739L0.347368 1.99527C-0.115791 1.53199 -0.115791 0.794876 0.347368 0.352728C0.789551 -0.110552 1.52628 -0.110552 1.98948 0.331723L9.98951 8.33384L17.9895 0.331723C18.4527 -0.110574 19.1895 -0.110574 19.6526 0.331723C20.0948 0.795004 20.0948 1.53197 19.6526 1.99525L11.6526 9.99737L19.6526 17.9995C20.1158 18.4628 20.1158 19.1999 19.6526 19.642C19.421 19.8947 19.1263 20 18.8316 20C18.5368 20 18.2421 19.8947 18.0105 19.663L10.0105 11.6609L2.01046 19.663C1.77887 19.8947 1.48414 20 1.1894 20C0.894672 20 0.599926 19.8947 0.368345 19.663C-0.0948143 19.1998 -0.0948143 18.4626 0.368345 18.0205L8.3474 9.99739Z"
            fill="#F0F0F0"
          />
        </svg>
      </div>
      <div class="row mx-auto d-flex flex-column gap-5 mt-4" style="width: 80%">
        <div
          class="d-flex flex-column justify-content-center align-items-center gap-2"
        >
          <h3 style="font-style: italic; color: #0393aa; margin: 0">
            ¡REFIERE Y GANA!!
          </h3>
          <span style="color: #0393aa"
            >Comparte lo bueno, comparte conocimiento</span
          >
          <span style="color: white"
            >Rellena el formulario y recibe tu código de referencia en tu
            correo.</span
          >
          <div class="row w-100">
            <div class="col col-12 col-md-6">
              <div class="input-container">
                <span for="name" style="color: white">Nombres*</span>
                <input type="text" id="name" class="input-customized" />
              </div>
            </div>
            <div class="col col-12 col-md-6">
              <div class="input-container">
                <span for="name" style="color: white">Apellido*</span>
                <input type="text" id="name" class="input-customized" />
              </div>
            </div>
          </div>
          <div class="row w-100">
            <div class="col col-12 col-md-6">
              <div class="input-container">
                <span for="name" style="color: white">Correo Electronico*</span>
                <input type="text" id="name" class="input-customized" />
              </div>
            </div>
            <div class="col col-12 col-md-6">
              <div class="input-container">
                <span for="name" style="color: white">Celular*</span>
                <input type="text" id="name" class="input-customized" />
              </div>
            </div>
          </div>
          <div class="align-self-start d-flex flex-column gap-3 mt-3">
            <div class="d-flex gap-2">
              <div class="option-check" @click="selectPromotion" :class="selectedPromotion?'option-checked':''"></div>
              <span style="color: white"
                >Acepto recibir promociones en mi correo</span
              >
            </div>
            <div class="d-flex gap-2">
              <div class="option-check" @click="selectEmail"  :class="selectedEmail?'option-checked':''"></div>
              <span style="color: white"
                >Acepto recibir correos informativos sobre webinars y material
                educativo.</span
              >
            </div>
          </div>
          <div class="btn-blue" @click="closeModal">
            <span @click="openConfirmationModal2">Enviar</span>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
      <script>
export default {
  emits: ["closeModal","openConfirmationModal2"],
  setup(props, ctx) {
    const selectedPromotion = ref(false);
    const selectedEmail = ref(false);
    const closeModal = () => {
      ctx.emit("closeModal");
    };
    const openConfirmationModal2 = () => {
      ctx.emit("openConfirmationModal2");
    };
    return {
      closeModal,
      selectedPromotion,
        selectedEmail,
        selectPromotion(){
            selectedPromotion.value = !selectedPromotion.value
        },
        selectEmail(){
            selectedEmail.value = !selectedEmail.value
        },
        openConfirmationModal2
    };
  },
};
</script>
      <style lang="scss" scoped>
.modal-customized {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-customized-body {
  width: 90%;
  background-color: #1c1c24;
}
@media (max-width: 768px) {
  .modal-customized-body {
    width: 80%;
  }
}
.input-customized {
  border: 1px solid #515166;
  background: transparent;
  width: 85%;
  border-radius: 2em;
  padding: 0.8em 1em;
  resize: none;
}
.input-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}.option-check{
    width: 1.5em;
    height: 1.5em;
    border-radius: 25%;
    border: 1px solid #515166;
    cursor: pointer;
}.option-checked{
    background: #0393aa

}
</style>