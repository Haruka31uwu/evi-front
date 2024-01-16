<template>
  <div class="row d-flex align-items-center">
    <h3 class="text-center" style="font-size: 1.5em; color: #0393aa">
      Datos de Registro
    </h3>
    <p class="text-center my-4" style="font-size: 1.1em">
      Antes de continuar, necesitamos algunos detalles para brindarte la mejor
      experiencia de compra posible. Por favor, tómate un momento para
      proporcionarnos la siguiente información:
    </p>
    <VForm
      :validation-schema="schema"
      @submit="onSubmit"
      class="row d-flex align-items-start"
    >
      <h3
        class="mx-auto text-center mb-4"
        style="font-size: 1.5em; color: #0393aa"
      >
        Información de usuario
      </h3>
      <div
        class="profile-img-selector d-flex align-items-center flex-column"
        @click="openFileInput"
      >
        <div class="profile-img" id="profile-img">
          <img :src="fileUrl ? fileUrl : '/assets/img/profile.png'" alt="" />
          <input type="file" class="d-none" @change="handleFileInputChange" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="170"
            height="170"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle cx="50" cy="50" r="49.5" stroke="#F0F0F0"             id="profile_img__border"
 />
          </svg>
        </div>
        <span
          style="
            color: var(--EVI-DARK-001, #0393aa);
            text-align: center;
            text-decoration-line: underline;
            margin-bottom: 2em;
          "
          >Agregar foto
        </span>
      </div>
      <div class="col-12 col-lg-6 d-flex flex-column" style="row-gap: 1.2em">
        <div class="input-container">
          <span for="name" style="color: white">Nombres</span>
          <AuthInput type="text" name="name" mode="aggressive" />
        </div>
        <!-- <div class="input-container">
          <span for="name" style="color: white">Alias</span>
          <AuthInput type="text" name="alias" mode="aggressive" />
        </div> -->
        <div class="input-container">
          <span for="name" style="color: white"
            >Celular ({{
              countryOptions.find((item) => item.value == countrySelected)
                .prefix
            }})</span
          >
          <AuthInput type="text" name="phone" mode="aggressive" />
        </div>
        <!-- <div class="input-container">
          <span for="name" style="color: white">Tipo de Documento*</span>
          <select
            id="pidType"
            class="input-customized"
            v-model="pidTypeSelected"
          >
            <option
              v-for="(option, index) in pidTypeOptions"
              :key="index"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div> -->
        <!-- <div class="input-container">
          <span for="name" style="color: white">Numero de Documento</span>
          <AuthInput type="text" name="pid" mode="aggressive" />
        </div> -->
        <div class="input-container">
          <span for="name" style="color: white">Sexo</span>
          <select id="gender" class="input-customized" v-model="genderSelected">
            <option
              v-for="(option, index) in gender"
              :key="index"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
        <div class="input-container">
          <span for="name" style="color: white">Correo Electronico</span>
          <AuthInput type="email" name="email" mode="aggressive" />
        </div>
        <div class="input-container">
          <span for="name" style="color: white">Fecha de Nacimiento</span>
          <AuthInput type="date" name="age" mode="aggressive" />
        </div>
      </div>
      <div class="col-12 col-lg-6 d-flex flex-column" style="row-gap: 1.2em">
        <div class="input-container">
          <span for="name" style="color: white">Apellidos</span>
          <AuthInput type="text" name="lastName" mode="aggressive" />
        </div>
        <div class="input-container">
          <span for="name" style="color: white">País en el que vives</span>
          <select
            id="country"
            class="input-customized"
            v-model="countrySelected"
          >
            <option
              v-for="(option, index) in countryOptions"
              :key="index"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
        <div class="input-container" v-if="countrySelected == 'PE'">
          <span for="name" style="color: white">Departamento</span>
          <select
            id="department"
            class="input-customized"
            v-model="deparmentSelected"
          >
            <option
              v-for="(option, index) in departments"
              :key="index"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>

        <div class="input-container">
          <span for="name" style="color: white">Contraseña</span>
          <AuthInput type="password" name="password" mode="aggressive" />
        </div>
        <div class="input-container">
          <span for="name" style="color: white"
            >Vuelve a escribir la Contraseña</span
          >
          <AuthInput type="password" name="replyPassword" mode="aggressive" />
        </div>
      </div>
      <div class="row mt-5">
        <h3
          class="mx-auto text-center mb-4"
          style="font-size: 1.5em; color: #0393aa"
        >
          Información académica
        </h3>
        <div class="col-12 col-lg-6 d-flex flex-column" style="row-gap: 1.2em">
          <div class="input-container">
            <span for="name" style="color: white">Grado Academico</span>
            <select
              id="academicGrade"
              class="input-customized"
              v-model="academicGradeSelected"
            >
              <option
                v-for="(option, index) in academicGrade"
                :key="index"
                :value="option.value"
              >
                {{ option.name }}
              </option>
            </select>
          </div>
          <div class="input-container">
            <span for="name" style="color: white">Especialidad</span>
            <select
              id="speciality"
              class="input-customized"
              v-model="specialitySelected"
            >
              <option
                v-for="(option, index) in speciality"
                :key="index"
                :value="option.value"
              >
                {{ option.name }}
              </option>
            </select>
          </div>
          <!-- <div class="input-container">
            <span for="name" style="color: white"
              >¿Llevaste algún curso previamente en EviSalud?</span
            >
            <select
              id="hasCourse"
              class="input-customized"
              v-model="hasCourseSelected"
            >
              <option
                v-for="(option, index) in hasCourse"
                :key="index"
                :value="option.value"
              >
                {{ option.name }}
              </option>
            </select>
          </div> -->
        </div>
        <div class="col-12 col-lg-6 d-flex flex-column" style="row-gap: 1.2em">
          <div class="input-container">
            <span for="name" style="color: white">Profesion u Ocupacion</span>
            <select
              id="ocupation"
              class="input-customized"
              v-model="ocupationSelected"
            >
              <option
                v-for="(option, index) in ocupation"
                :key="index"
                :value="option.value"
              >
                {{ option.name }}
              </option>
            </select>
          </div>
          <div class="input-container" @click="openFileSelector" v-if="academicGradeSelected=='pregrado'">
            <span for="name" style="color: white">Foto de tu Carnet</span>
            <div class="d-flex flex-row gap-1 align-items-center">
              <span class="btn-gray w-50">Subir foto</span>
              <span>{{ carnetImg.name }}</span>
            </div>
            <input
              type="file"
              class="input-customized"
              id="input-carnet"
              style="display: none"
              @change="selectImage"
            />
          </div>
          <!-- <div class="input-container">
            <span for="name" style="color: white"
              >Afiliacion/Institución donde labora</span
            >
            <AuthInput type="text" name="institution" mode="aggressive" />
          </div> -->
        </div>
      </div>
      <div class="row mt-5">
        <h3
          class="mx-auto text-center mb-4"
          style="font-size: 1.5em; color: #0393aa"
        >
          Solo una cosa mas
        </h3>
        <div class="col-12 col-lg-6 d-flex flex-column" style="row-gap: 1.2em">
          <div class="input-container">
            <span for="name" style="color: white"
              >¿Cómo llegaste a nosotros?</span
            >
            <select
              id="reference"
              class="input-customized"
              v-model="referenceSelected"
            >
              <option
                v-for="(option, index) in references"
                :key="index"
                :value="option.value"
              >
                {{ option.name }}
              </option>
            </select>
          </div>
        </div>
        <div
          class="col-12 col-lg-6 d-flex flex-column"
          style="row-gap: 1.2em"
        ></div>
      </div>
      <div class="payment-condition d-flex flex-row gap-2 mt-5">
        <div
          class="condition-checkbox"
          :style="condition ? 'background:#179bd7' : ''"
          @click="condition = !condition"
        >
          <Icon
            name="mingcute:check-fill"
            color="white"
            size="1.4em"
            v-if="condition"
          />
        </div>
        <span style="width: 90%"
          >He leído y acepto los
          <span class="primary-underline"> Términos y condiciones </span> y
          <span class="primary-underline">Políticas de privacidad </span>
        </span>
      </div>
      <button
        type="submit"
        class="btn-blue mx-auto mt-4"
        style="width: 40%; min-width: 300px"
      >
        <span>Crear Cuenta</span>
      </button>
    </VForm>
    <auth-profile-image-selector
      v-if="showProfileImageSelector"
      @closeModal="showProfileImageSelector = false"
      @selectedAvatarHandler="selectedAvatarHandler"
    />
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import * as yup from "yup";
import AuthService from "/services/auth/auth.service.js";
import { useForm } from "vee-validate";
import { authStore } from "../../store/auth/auth.store";
import { usePreloader, useSwall } from "/composables/main-composables.js";
import { useRoute } from "vue-router";
export default defineComponent({
  emits: ["openProfileImageSelector"],
  setup(props, ctx) {
    const route = useRoute();
    const { showPreloader, hidePreloader } = usePreloader();
    const { showSuccessSwall, showErrorSwall, showConfirmEmailSwall } =
      useSwall();
    const schema = yup.object().shape({
      email: yup.string().email("El email no es valido").required(),
      password: yup.string().required("La constraseña es obligatoria").min(8),
      name: yup.string().required("El nombre es obligatorio"),
      // alias: yup.string().required("El alias es obligatorio"),
      lastName: yup.string().required("El apellido es obligatorio"),
      phone: yup.string().required("El numero de telefono es obligatorio"),
      // pid: yup
      //   .number()
      //   .required("El numero de documento es obligatorio")
      //   .min(10000000),
      age: yup.date().required("La fecha de nacimiento es obligatoria"),
      // institution: yup.string().required("La institucion es obligatoria"),
      replyPassword:yup.string().required('La contraseña es obligatoria').oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')
    });
    const openFileSelector = () => {
      const input = document.querySelector("#input-carnet");
      input.click();
    };
    const store = authStore();
    const { handleSubmit, errors, resetForm } = useForm({
      validationSchema: schema,
    });

    const countryOptions = [
      { name: "Perú", value: "PE", prefix: "+51" },
      { name: "Bolivia", value: "BO", prefix: "+591" },
      { name: "México", value: "MX", prefix: "+52" },
      { name: "Argentina", value: "AR", prefix: "+54" },
      { name: "Ecuador", value: "EC", prefix: "+593" },
      { name: "Colombia", value: "CO", prefix: "+57" },
      { name: "Chile", value: "CL", prefix: "+56" },
      { name: "España", value: "ES", prefix: "+34" },
      { name: "Venezuela", value: "VE", prefix: "+58" },
      { name: "Guatemala", value: "GT", prefix: "+502" },
      { name: "Cuba", value: "CU", prefix: "+53" },
      { name: "República Dominicana", value: "DO", prefix: "+1" },
      { name: "El Salvador", value: "SV", prefix: "+503" },
      { name: "Honduras", value: "HN", prefix: "+504" },
      { name: "Paraguay", value: "PY", prefix: "+595" },
      { name: "Costa Rica", value: "CR", prefix: "+506" },
      { name: "Puerto Rico", value: "PR", prefix: "+1" },
      { name: "Panamá", value: "PA", prefix: "+507" },
      { name: "Uruguay", value: "UY", prefix: "+598" },
      { name: "Otro", value: "OT", prefix: "+00" },
    ];

    const pidTypeOptions = [
      { name: "DNI", value: "dni" },
      { name: "Carnet de Extranjería", value: "ce" },
      { name: "Pasaporte", value: "pasaporte" },
    ];
    const gender = [
      { name: "Masculino", value: "masculino" },
      { name: "Femenino", value: "femenino" },
      { name: "Prefiero no especificarlo", value: "other" },
    ];
    const academicGrade = [
      {
        name: "Estudiante de pregrado",
        value: "pregrado",
      },
      {
        name: "Bachiller",
        value: "bachiller",
      },
      {
        name: "Magister",
        value: "magister",
      },
      {
        name: "Doctor(a)",
        value: "doctor",
      },
    ];
    const ocupation = [
      { name: "Médico general", value: "médico_general" },
      { name: "Médico residente", value: "médico_residente" },
      { name: "Médico especialista", value: "médico_especialista" },
      { name: "Enfermero(a)", value: "enfermero_a" },
      { name: "Odontólogo(a)", value: "odontólogo_a" },
      { name: "Nutricionista", value: "nutricionista" },
      { name: "Psicólogo(a)", value: "psicólogo_a" },
      { name: "Obstetra", value: "obstetra" },
      { name: "Biologo(a)", value: "biologo_a" },
      { name: "Químico farmaceutico(a)", value: "químico_farmaceutico_a" },
      { name: "Tecnólogo(a) médico(a)", value: "tecnólogo_a_médico_a" },
      { name: "Otra profesión", value: "otra_profesión" },
    ];
    const speciality = [
      { name: "No aplica", value: "no_aplica" },
      { name: "Medicina Familiar", value: "medicina_familiar" },
      { name: "Medicina Interna", value: "medicina_interna" },
      { name: "Endocrinología", value: "endocrinología" },
      { name: "Pediatría", value: "pediatría" },
      { name: "Gineco obstetricia", value: "gineco_obstetricia" },
      { name: "Cirugía", value: "cirugía" },
      { name: "Psiquiatría", value: "psiquiatría" },
      { name: "Cardiología", value: "cardiología" },
      { name: "Dermatología", value: "dermatología" },
      { name: "Gastroenterología", value: "gastroenterología" },
      { name: "Infectología", value: "infectología" },
      { name: "Nefrología", value: "nefrología" },
      { name: "Oftalmología", value: "oftalmología" },
      { name: "Otorrinolaringología", value: "otorrinolaringología" },
      { name: "Neumología", value: "neumología" },
      { name: "Neurología", value: "neurología" },
      { name: "Radiología", value: "radiología" },
      { name: "Anestesiología", value: "anestesiología" },
      { name: "Oncología", value: "oncología" },
      { name: "Patología", value: "patología" },
      { name: "Urología", value: "urología" },
      {
        name: "Medicina física y rehabilitación",
        value: "medicina_física_rehabilitación",
      },
      { name: "Medicina Intensiva", value: "medicina_intensiva" },
    ];

    const references = [
      {
        name: "Me lo recomendó un(a) conocido(a)",
        value: "recomendacion_conocido",
      },
      { name: "Por Facebook", value: "facebook" },
      { name: "Por Instagram", value: "instagram" },
      { name: "Por Tik Tok", value: "tiktok" },
      { name: "Por YouTube", value: "youtube" },
      { name: "Buscando en Google", value: "busqueda_google" },
      { name: "Por un correo que enviaron", value: "correo_electronico" },
    ];

    const hasCourse = [
      {
        name: "Si",
        value: "si",
      },
      {
        name: "No",
        value: "no",
      },
    ];
    const departments = [
      { name: "Amazonas", value: "amazonas" },
      { name: "Ancash", value: "ancash" },
      { name: "Apurímac", value: "apurímac" },
      { name: "Arequipa", value: "arequipa" },
      { name: "Ayacucho", value: "ayacucho" },
      { name: "Cajamarca", value: "cajamarca" },
      { name: "Cusco", value: "cusco" },
      { name: "Huancavelica", value: "huancavelica" },
      { name: "Huánuco", value: "huánuco" },
      { name: "Ica", value: "ica" },
      { name: "Junín", value: "junín" },
      { name: "La Libertad", value: "la_libertad" },
      { name: "Lambayeque", value: "lambayeque" },
      { name: "Lima Metropolitana/Callao", value: "lima_metropolitana_callao" },
      { name: "Lima Provincias", value: "lima_provincias" },
      { name: "Loreto", value: "loreto" },
      { name: "Madre de Dios", value: "madre_de_dios" },
      { name: "Moquegua", value: "moquegua" },
      { name: "Pasco", value: "pasco" },
      { name: "Piura", value: "piura" },
      { name: "Puno", value: "puno" },
      { name: "San Martín", value: "san_martín" },
      { name: "Tacna", value: "tacna" },
      { name: "Tumbes", value: "tumbes" },
      { name: "Ucayali", value: "ucayali" },
    ];
    const condition = ref(false);
    const countrySelected = ref("PE");
    const pidTypeSelected = ref("dni");
    const academicGradeSelected = ref("bachiller");
    const ocupationSelected = ref("biologo_a");
    const specialitySelected = ref("no_aplica");
    const genderSelected = ref("masculino");
    const hasCourseSelected = ref("si");
    const deparmentSelected = ref("lima_metropolitana_callao");
    const profileImg = ref({});
    const fileUrl = ref(null);
    const referenceSelected = ref("recomendacion_conocido");
    const carnetImg = ref({});
    const handleFileInputChange = (e) => {
      // profileImg.value = e.target.files[0];
      // console.log(profileImg.value, e.target.files[0]);
      // fileUrl.value = URL.createObjectURL(profileImg.value);
    };
    const openFileInput = () => {
      // const input = document.querySelector('input[type="file"]');
      // input.click();
      openProfileImageSelector();
    };
    const showProfileImageSelector = ref(false);
    const openProfileImageSelector = () => {
      showProfileImageSelector.value = true;
    };
    const selectedAvatarHandler = (avatar) => {
      console.log(avatar, typeof avatar, "avatar");
      fileUrl.value = avatar.hasOwnProperty("url")
        ? avatar.url
        : URL.createObjectURL(avatar);
      fetch(avatar.url)
        .then((res) => res.blob())
        .then((blob) => {
          profileImg.value = new File([blob], "profile.png", {
            type: "image/png",
          });
        });
    };
    const selectImage = (e) => {
      const file = e.target.files[0];
      carnetImg.value = file;
      console.log(carnetImg.value);
    };
    const onSubmit = async (values) => {
      const profileImgBorder= document.querySelector("#profile_img__border");
      console.log(fileUrl,'fileurl')
      if (!fileUrl.value) {
        profileImgBorder.style.stroke = "#CB4335";
        const profileImgDiv= document.querySelector("#profile-img");
        profileImgDiv.scrollIntoView(
          { behavior: 'smooth', block: 'center'}
        );
        return;
      }
      if (!condition.value) {
        return;
      }
      
      profileImgBorder.style.stroke = "#F0F0F0";
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("name", values.name);
      formData.append("lastName", values.lastName);
      formData.append("phone", values.phone);
      // formData.append("alias", values.alias);
      formData.append("country", countrySelected.value);
      // formData.append("pidType", pidTypeSelected.value);
      // formData.append("pid", values.pid);
      formData.append("age", values.age);
      formData.append("gender", genderSelected.value);
      formData.append("academicGrade", academicGradeSelected.value);
      formData.append("ocupation", ocupationSelected.value);
      formData.append("speciality", specialitySelected.value);
      // formData.append("hasCourse", hasCourseSelected.value);
      // formData.append("institution", values.institution);
      formData.append("file", profileImg.value);
      formData.append("carnet", carnetImg.value);
      formData.append("originRoute", route.name);
      formData.append(
        "deparment",
        countrySelected.value == "PE" ? deparmentSelected.value : null
      );
      formData.append("reference", referenceSelected.value);
      try {
        showPreloader();
        const res = await AuthService.register(formData);
        if (res.status === 200) {
          // store.addToken(res.data.access_token);
          // store.addUserData(res.data.user);
          showConfirmEmailSwall(
            "Exito",
            "Por favor, completa tu registro revisando tu bandeja de entrada o de correos no deseados y sigue las instrucciones para activar tu usuario."
          );
        }
        hidePreloader();
      } catch (e) {
        hidePreloader();
        if (e.hasOwnProperty("response")) {
          showErrorSwall("Error", e.response.data.message);
          return;
        }
        showErrorSwall("Error", e.message);
        return;
      }
    };
    return {
      countryOptions,
      countrySelected,
      condition,
      schema,
      onSubmit,
      pidTypeOptions,
      pidTypeSelected,
      openFileInput,
      handleFileInputChange,
      fileUrl,
      academicGrade,
      academicGradeSelected,
      ocupation,
      ocupationSelected,
      speciality,
      specialitySelected,
      gender,
      genderSelected,
      hasCourse,
      hasCourseSelected,
      departments,
      deparmentSelected,
      referenceSelected,
      references,
      showProfileImageSelector,
      openProfileImageSelector,
      selectedAvatarHandler,
      openFileSelector,
      selectImage,
      carnetImg,
    };
  },
});
</script>

<style lang="scss" scoped>
span,
p {
  font-family: "Axiforma";
}
.input-customized {
  border: 1px solid #515166;
  background: transparent;
  width: 100%;
  border-radius: 2em;
  padding: 0.8em 1em;
  resize: none;
  color: white;
  option {
    background: #1c1c24;
  }
}
.input-container {
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
  font-family: Axiforma;
  width: 100%;
}
.condition-checkbox {
  width: 2em;
  height: 2em;
  border-radius: 20%;
  border: 1px solid #515166;
  background: #1c1c24;
  color: #1c1c24;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;
}
.primary-underline {
  text-decoration: underline;
  color: #179bd7;
  cursor: pointer;
}
.profile-img {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 1em;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  svg {
    position: absolute;
    &:hover {
      cursor: pointer;
      circle {
        stroke: #179bd7;
      }
    }
  }
}
</style>