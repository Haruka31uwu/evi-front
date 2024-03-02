<template>
  <section class="py-5">
    <div class="row d-flex align-items-center mx-auto" id="edit-container">
      <h3 class="text-center" style="font-size: 1.5em; color: #0393aa">
        Editar Perfil
      </h3>
      <!-- <p
        class="text-center my-4 mx-auto"
        style="font-size: 1.15em; width: 50%; min-width: 300px"
      >
        Crea una cuenta y empieza tu aventura para realizar investigación de
        calidad y tomar mejores decisiones en salud
      </p> -->
      <div class="row d-flex align-items-start" v-if="user">
        <div
          class="profile-img-selector d-flex align-items-center flex-column"
          @click="openFileInput"
        >
          <div class="profile-img" id="profile-img">
            <img
              :src="fileUrl ? fileUrl : '/assets/img/profile.png'"
              alt="profile-selected"
            />
            <input type="file" class="d-none" @change="handleFileInputChange" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="170"
              height="170"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle
                cx="50"
                cy="50"
                r="49.5"
                stroke="#F0F0F0"
                id="profile_img__border"
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
        <h3
          class="mx-auto text-center mb-4"
          style="font-size: 1.5em; color: #0393aa"
        >
          Información de usuario
        </h3>
        <div class="col-12 col-lg-6 d-flex flex-column" style="row-gap: 1.2em">
          <div class="input-container">
            <span for="name" style="color: white">Nombres</span>
            <input
              class="input-customized"
              type="text"
              name="name"
              mode="aggressive"
              v-model="user.name"
            />
          </div>
          <!-- <div class="input-container">
            <span for="name" style="color: white">Alias</span>
            <input class="input-customized" type="text" name="alias" mode="aggressive" />
          </div> -->
          <div class="input-container">
            <span for="name" style="color: white"
              >Celular ({{
                countryOptions.find((item) => item.value == countrySelected)
                  .prefix
              }})</span
            >
            <input
              class="input-customized"
              type="text"
              name="phone"
              mode="aggressive"
              v-model="user.phone_number"
            />
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
            <input class="input-customized" type="text" name="pid" mode="aggressive" />
          </div> -->
          <div class="input-container">
            <span for="name" style="color: white">Sexo</span>
            <select id="gender" class="input-customized" v-model="user.gender">
              <option
                v-for="(option, index) in gender"
                :key="index"
                :value="option.value"
              >
                {{ option.name }}
              </option>
            </select>
          </div>
          <!-- <div class="input-container">
            <span for="name" style="color: white">Correo Electronico</span>
            <input class="input-customized" type="email" name="email" mode="aggressive" />
          </div> -->
          <div class="input-container">
            <span for="name" style="color: white">Fecha de Nacimiento</span>
            <input
              class="input-customized"
              type="date"
              name="age"
              mode="aggressive"
              v-model="user.age"
            />
          </div>
        </div>
        <div class="col-12 col-lg-6 d-flex flex-column" style="row-gap: 1.2em">
          <div class="input-container">
            <span for="name" style="color: white">Apellidos</span>
            <input
              class="input-customized"
              type="text"
              name="lastName"
              mode="aggressive"
              v-model="user.last_name"
            />
          </div>
          <div class="input-container">
            <span for="name" style="color: white">País en el que vives</span>
            <select
              id="country"
              class="input-customized"
              v-model="user.country"
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
          <div class="input-container" v-if="user.country == 'PE'">
            <span for="name" style="color: white">Departamento</span>
            <select
              id="department"
              class="input-customized"
              v-model="user.department"
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

          <!-- <div class="input-container">
            <span for="name" style="color: white">Contraseña</span>
            <input class="input-customized" type="password" name="password" mode="aggressive" />
          </div> -->
          <!-- <div class="input-container">
            <span for="name" style="color: white"
              >Vuelve a escribir la Contraseña</span
            >
            <input class="input-customized" type="password" name="replyPassword" mode="aggressive" />
          </div> -->
        </div>
        <div class="row mt-5">
          <h3
            class="mx-auto text-center mb-4"
            style="font-size: 1.5em; color: #0393aa"
          >
            Información académica
          </h3>
          <div
            class="col-12 col-lg-6 d-flex flex-column"
            style="row-gap: 1.2em"
          >
            <div class="input-container">
              <span for="name" style="color: white">Grado Academico</span>
              <select
                id="academicGrade"
                class="input-customized"
                v-model="user.academic_grade"
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
                v-model="user.speciality"
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
          <div
            class="col-12 col-lg-6 d-flex flex-column"
            style="row-gap: 1.2em"
          >
            <div class="input-container">
              <span for="name" style="color: white">Profesion u Ocupacion</span>
              <select
                id="ocupation"
                class="input-customized"
                v-model="user.ocupation"
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
            <div
              class="input-container"
              @click="openFileSelector"
              v-if="academicGradeSelected == 'pregrado'"
            >
              <span for="name" style="color: white">Foto de tu Carnet</span>
              <div class="d-flex flex-row gap-1 align-items-center">
                <span class="btn-gray w-50">Subir foto</span>
                <span>{{ carnetImg.name }}</span>
              </div>
              <input
                class="input-customized"
                type="file"
                id="input-carnet"
                style="display: none"
                @change="selectImage"
              />
            </div>
            <!-- <div class="input-container">
              <span for="name" style="color: white"
                >Afiliacion/Institución donde labora</span
              >
              <input class="input-customized" type="text" name="institution" mode="aggressive" />
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
          <div
            class="col-12 col-lg-6 d-flex flex-column"
            style="row-gap: 1.2em"
          >
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
        <!-- <div class="payment-condition d-flex flex-row gap-2 mt-5">
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
          <span style="width: 80%"
            >He leído y acepto los
            <span class="primary-underline"> Términos y condiciones </span> y
            <span class="primary-underline">Políticas de privacidad </span>
          </span>
        </div> -->
        <button
          @click="updateAccount"
          type="submit"
          class="btn-blue mx-auto mt-4"
          style="width: 40%; min-width: 300px"
        >
          <span>Actualizar Datos</span>
        </button>
      </div>
      <div v-else style="height: 100vh">
        <!--Loader!-->
        <div class="loader-container">
          <div class="loader"></div>
        </div>
      </div>
      <auth-profile-image-selector
        v-if="showProfileImageSelector"
        @closeModal="showProfileImageSelector = false"
        @selectedAvatarHandler="selectedAvatarHandler"
      />
    </div>
  </section>
</template>
  <script>
import { defineComponent } from "@vue/composition-api";
import AuthService from "/services/auth/auth.service.js";
import { useForm } from "vee-validate";
import { authStore } from "../../store/auth/auth.store";
import { usePreloader, useSwall } from "/composables/main-composables.js";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  emits: ["openProfileImageSelector", "closeModal"],
  setup(props, ctx) {
    const route = useRoute();
    const storeAuth = authStore();
    const userData = computed(() => storeAuth.getUserData);

    const user = ref(null);
    const { showPreloader, hidePreloader } = usePreloader();
    const { showSuccessSwall, showErrorSwall, showConfirmEmailSwall } =
      useSwall();
    const openFileSelector = () => {
      const input = document.querySelector("#input-carnet");
      input.click();
    };
    onMounted(async () => {
      try {
        const params = {
          userId: userData.value.id,
        };
        const res = await AuthService.getUser(params);
        user.value = res.data.user;
        fileUrl.value = res.data.user.profile_img;
        fetch(fileUrl.value)
          .then((res) => res.blob())
          .then((blob) => {
            profileImg.value = new File([blob], "profile.png", {
              type: "image/png",
            });
          });
      } catch (e) {
        if (e.hasOwnProperty("response")) {
          showErrorSwall("Error", e.response.data.message);
          return;
        }
        showErrorSwall("Error", e.message);
      }
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
    // const condition = ref(false);
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
    const openFileInput = () => {
      openProfileImageSelector();
    };
    const showProfileImageSelector = ref(false);
    const openProfileImageSelector = () => {
      showProfileImageSelector.value = true;
    };
    const selectedAvatarHandler = (avatar) => {
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
    };
    // const onSubmit = async (values) => {
    //   const profileImgBorder = document.querySelector("#profile_img__border");
    //   if (!fileUrl.value) {
    //     profileImgBorder.style.stroke = "#CB4335";
    //     const profileImgDiv = document.querySelector("#profile-img");
    //     profileImgDiv.scrollIntoView({ behavior: "smooth", block: "center" });
    //     return;
    //   }
    //   if (!condition.value) {
    //     return;
    //   }

    //   profileImgBorder.style.stroke = "#F0F0F0";
    //   const formData = new FormData();
    //   formData.append("email", values.email);
    //   formData.append("password", values.password);
    //   formData.append("name", values.name);
    //   formData.append("lastName", values.lastName);
    //   formData.append("phone", values.phone);
    //   // formData.append("alias", values.alias);
    //   formData.append("country", countrySelected.value);
    //   // formData.append("pidType", pidTypeSelected.value);
    //   // formData.append("pid", values.pid);
    //   formData.append("age", values.age);
    //   formData.append("gender", genderSelected.value);
    //   formData.append("academicGrade", academicGradeSelected.value);
    //   formData.append("ocupation", ocupationSelected.value);
    //   formData.append("speciality", specialitySelected.value);
    //   // formData.append("hasCourse", hasCourseSelected.value);
    //   // formData.append("institution", values.institution);
    //   formData.append("file", profileImg.value);
    //   formData.append("carnet", carnetImg.value);
    //   formData.append("originRoute", route.name);
    //   formData.append(
    //     "deparment",
    //     countrySelected.value == "PE" ? deparmentSelected.value : null
    //   );
    //   formData.append("reference", referenceSelected.value);
    //   try {
    //     showPreloader();
    //     const res = await AuthService.register(formData);
    //     if (res.status === 200) {
    //       // store.addToken(res.data.access_token);
    //       // store.addUserData(res.data.user);
    //       showConfirmEmailSwall(
    //         "Éxito",
    //         "Por favor, completa tu registro revisando tu bandeja de entrada o de correos no deseados y sigue las instrucciones para activar tu usuario."
    //       );
    //     }
    //     hidePreloader();
    //   } catch (e) {
    //     hidePreloader();
    //     if (e.hasOwnProperty("response")) {
    //       showErrorSwall("Error", e.response.data.message);
    //       return;
    //     }
    //     showErrorSwall("Error", e.message);
    //     return;
    //   }
    // };
    const validateFields = () => {
      //validate email
      let errors = 0;
      if (!user.value.email) {
        errors++;
        showErrorSwall("Error", "El campo email es requerido");
        return false;
      }
      //validate email regex
      if (
        !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
          user.value.email
        )
      ) {
        errors++;
        showErrorSwall("Error", "El campo email no es valido");
        return false;
      }
      //validate name lastname not null and not empty
      if (!user.value.name || user.value.name.trim() == "") {
        errors++;
        showErrorSwall("Error", "El campo nombre es requerido");
        return false;
      }
      if (!user.value.last_name || user.value.last_name.trim() == "") {
        errors++;
        showErrorSwall("Error", "El campo apellido es requerido");
        return false;
      }
      //validate phone number not empty and not number and max length 12
      if (!user.value.phone_number || user.value.phone_number.trim() == "") {
        errors++;
        showErrorSwall("Error", "El campo celular es requerido");
        return false;
      }
      if (isNaN(user.value.phone_number)) {
        errors++;
        showErrorSwall("Error", "El campo celular debe ser numerico");
        return false;
      }
      if (user.value.phone_number.length > 12) {
        errors++;
        showErrorSwall(
          "Error",
          "El campo celular debe tener maximo 12 caracteres"
        );
        return false;
      }
      //validate age not empty
      if (!user.value.age || user.value.age.trim() == "") {
        errors++;
        showErrorSwall("Error", "El campo fecha de nacimiento es requerido");
        return false;
      }
      return true;
    };
    const updateAccount = async () => {
      const profileImgBorder = document.querySelector("#profile_img__border");
      let interval;
      if (!fileUrl.value) {
        profileImgBorder.style.stroke = "#CB4335";
        const profileImgDiv = document.querySelector("#profile-img");
        profileImgDiv.scrollIntoView({ behavior: "smooth", block: "center" });
        interval=setTimeout(() => {
          profileImgBorder.style.stroke = "#F0F0F0";
        }, 3000);
        return;
      }
      if (!validateFields()) return;
      clearInterval(interval);
      const formData = new FormData();
      formData.append("userId", user.value.id);
      formData.append("email", user.value.email);
      formData.append("name", user.value.name);
      formData.append("lastName", user.value.last_name);
      formData.append("phone", user.value.phone_number);
      // formData.append("alias", user.value.alias);
      formData.append("country", user.value.country);
      // formData.append("pidType", pidTypeSelected.value);
      // formData.append("pid", user.value.pid);
      formData.append("age", user.value.age);
      formData.append("gender", user.value.gender);
      formData.append("academicGrade", user.value.academic_grade);
      formData.append("ocupation", user.value.ocupation);
      formData.append("speciality", user.value.speciality);
      // formData.append("hasCourse", hasCourseSelected.value);
      // formData.append("institution", user.value.institution);
      formData.append("file", profileImg.value);
      formData.append("carnet", carnetImg.value);
      formData.append(
        "department",
        user.value.country == "PE" ? user.value.department : null
      );
      formData.append("reference", user.value.reference);

      try {
        showPreloader();
        const response = await AuthService.updateUserData(formData);
        hidePreloader();
        if (response.status == 200) {
          showSuccessSwall("Exito", "Datos actualizados correctamente");
          storeAuth.updateUserData(response.data.user);
        }
      } catch (e) {
        hidePreloader();
        showErrorSwall("Error", e.response.data.message);
      }
      ctx.emit("closeModal");
    };
    return {
      countryOptions,
      countrySelected,
      pidTypeOptions,
      pidTypeSelected,
      openFileInput,
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
      updateAccount,
      user,
    };
  },
});
</script>
  
  <style lang="scss" scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.loader {
  border: 1em solid #f3f3f3;
  border-top: 1em solid #3498db;
  border-radius: 50%;
  width: 350px;
  height: 350px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
span,
p {
  font-family: "Axiforma";
}
#edit-container {
  width: 80%;
  @media (max-width: 468px) {
    width: 100%;
  }
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