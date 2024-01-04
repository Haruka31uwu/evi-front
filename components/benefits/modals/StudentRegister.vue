<template>
  <div class="modal-customized">
    <div
      class="modal-customized-body d-flex flex-column  justify-content-start align-items-center"
      style="border-radius: 2em; max-height: 100vh;overflow-y: auto;overflow-x: none;"
    >
      <div
        class="modal-customized-header w-100 d-flex justify-content-between px-3 mt-5" 
      >
        <svg
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
          https://accounts.google.com/b/0/AddMailService
        </svg>
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <span style="color: white">Registro de estudiante</span>
        </div>
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
      <div
        class="row mx-auto d-flex flex-column gap-5 justify-content-center align-items-center modal-customized-body-content"
        style="width: 90%;"
      >
        <span style="color: #0393aa; font-weight: 700" class="text-center"
          >Informacion de Usuario</span
        >
        <div class="row">
          <div class="col col-12 col-md-6">
            <div class="input-container">
              <span for="name" style="color: white">*Nombres</span>
              <input type="text" id="name" class="input-customized" />
            </div>
          </div>
          <div class="col col-12 col-md-6">
            <div class="input-container">
              <span for="name" style="color: white">*Pais</span>
              <select id="name" class="input-customized">
                <option
                  v-for="(option, index) in countryOptions"
                  :key="index"
                  :value="option.value"
                  @click="selectCountry(option.value)"
                >
                  {{ option.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col col-12 col-md-6">
            <div class="input-container">
              <span for="name" style="color: white">*Apellidos</span>
              <input type="text" id="name" class="input-customized" />
            </div>
          </div>
          <div class="col col-12 col-md-6">
            <div class="input-container">
              <span for="name" style="color: white">*Celular</span>
              <input type="text" id="name" class="input-customized" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col col-12 col-md-6">
            <div class="input-container">
              <span for="name" style="color: white">*Alias</span>
              <input type="text" id="name" class="input-customized" />
            </div>
          </div>
          <div class="col col-12 col-md-6">
            <div class="input-container">
              <span for="name" style="color: white">*Correo Electronico</span>
              <input type="text" id="name" class="input-customized" />
            </div>
          </div>
        </div>
        <span style="color: #0393aa; font-weight: 700" class="text-center"
          >Informacion Academica</span
        >
        <div class="row">
          <div class="col col-12 col-md-6">
            <div class="input-container">
              <span for="name" style="color: white">*Grado Academico</span>
              <select id="name" class="input-customized">
                <option
                  v-for="(option, index) in gradeOptions"
                  :key="index"
                  :value="option.value"
                  @click="selectGrade(option.value)"
                >
                  {{ option.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col col-12 col-md-6">
            <div class="input-container">
              <span for="name" style="color: white"
                >*Profesion u Ocupacion</span
              >
              <select id="name" class="input-customized">
                <option
                  v-for="(option, index) in professionOptions"
                  :key="index"
                  :value="option.value"
                  @click="selectProfession(option.value)"
                >
                  {{ option.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col col-12 col-md-6">
            <div class="input-container">
              <span for="name" style="color: white">*Especialidad</span>
              <select id="name" class="input-customized">
                <option
                  v-for="(option, index) in specialityOptions"
                  :key="index"
                  :value="option.value"
                  @click="selectSpeciality(option.value)"
                >
                  {{ option.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col col-12 col-md-6">
            <div class="input-container">
              <span for="name" style="color: white"
                >*Afiliacion/Institucion donde labora</span
              >
              <input type="text" id="name" class="input-customized" />
            </div>
          </div>
        </div>
      </div>
      <span
        style="
          color: white;
          width: 90%;
          margin: 0 auto;
          font-size: 1.1em;
          font-family: Axiforma;
        "
        class="my-3"
        >Foto de Carné</span
      >
      <benefits-drag-drop />
      <div class="btn-blue my-3" @click="openConfirmationModal"><span> Guardar Cambioss </span></div>
      <span style="font-family: Axiforma; color: #575756"
        >Necesitas Ayuda?</span
      >
    </div>
  </div>
</template>
    <script>
export default {
  emits: ["closeModal","openConfirmationModal"],
  setup(props, ctx) {
    const countrySelected = ref("");
    const gradeSelected = ref("");
    const professionSelected = ref("");
    const specialitySelected = ref("");
    const countryOptions = reactive([
      {
        name: "Peru",
        value: "peru",
      },
      {
        name: "Colombia",
        value: "colombia",
      },
      {
        name: "Mexico",
        value: "mexico",
      },
    ]);
    const gradeOptions = reactive([
      {
        name: "Pregrado",
        value: "pregrado",
      },
      {
        name: "Postgrado",
        value: "postgrado",
      },
      {
        name: "Profesional de la Salud",
        value: "profesional",
      },
      {
        name: "Otro",
        value: "otro",
      },
    ]);
    const professionOptions = reactive([
      {
        name: "Medico",
        value: "medico",
      },
      {
        name: "Enfermero",
        value: "enfermero",
      },
      {
        name: "Tecnico",
        value: "tecnico",
      },
      {
        name: "Otro",
        value: "otro",
      },
    ]);
    const specialityOptions = reactive([
      {
        name: "Medico",
        value: "medico",
      },
      {
        name: "Enfermero",
        value: "enfermero",
      },
      {
        name: "Tecnico",
        value: "tecnico",
      },
      {
        name: "Otro",
        value: "otro",
      },
    ]);
    const selectCountry = (option) => {
      countrySelected.value = option;
    };
    const selectGrade = (option) => {
      gradeSelected.value = option;
    };
    const selectProfession = (option) => {
      professionSelected.value = option;
    };
    const selectSpeciality = (option) => {
      specialitySelected.value = option;
    };
    const closeModal = () => {
      ctx.emit("closeModal");
    };
    const openConfirmationModal = () => {
      ctx.emit("openConfirmationModal");
    };
    return {
      closeModal,
      countryOptions,
      selectCountry,
      gradeOptions,
      selectGrade,
      professionOptions,
      selectProfession,
      specialityOptions,
      selectSpeciality,
      openConfirmationModal
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
  width: 80%;
  background-color: #1c1c24;
}
@media (max-width: 768px) {
  .modal-customized-body {
    width: 80%;
  }
}
.modal-customized-body-content {
}
.input-container {
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
  font-family: Axiforma;
}
.input-customized {
  border: 1px solid #515166;
  background: transparent;
  width: 80%;
  border-radius: 2em;
  padding: 0.8em 1em;
  resize: none;
  color: white;
  height: 50px;
}
</style>