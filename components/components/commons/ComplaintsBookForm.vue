<template>
  <section
    class="d-flex flex-column justify-content-center align-items-center w-100 p-5"
    style="position: relative"
  >
    <a href="/">
      <svg
        style="position: absolute; top: 1em; left: 2em"
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
    </a>
    <div class="section-title">
      <h2 id="title">Libro de reclamaciones</h2>
      <div class="section-decorator"></div>
    </div>
    <span class="w-50 text-center mt-3"
      >De acuerdo con lo establecido en el Código de Protección y Defensa del
      Consumidor, esta entidad dispone de un Libro de Reclamaciones en línea a
      su disposición.</span
    >
    <div class="row w-75 mt-4">
      <div class="col-12 d-flex flex-column">
        <span>
          EVISALUD CONSULTORIAS S.A.C.
          <br />
          RUC: 20606437031
        </span>
        <span class="mt-3">* Campos obligatorios</span>
      </div>
    </div>
    <div class="row w-75 mt-4">
      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Tipo de Reclamante </span>
          <select
            id="name"
            class="input-customized"
            v-model="claimantTypeSelected"
            @change="selectClaimantType"
          >
            <option
              v-for="(option, index) in claimantTypes"
              :key="index"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Apellido Paterno*</span>
          <input
            type="text"
            id="name"
            class="input-customized"
            v-model="fatherLastName"
          />
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Apellido Materno*</span>
          <input
            type="text"
            id="name"
            class="input-customized"
            v-model="motherLastName"
          />
        </div>
      </div>
    </div>
    <div class="row w-75 mt-4">
      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Nombres*</span>
          <input
            type="text"
            id="name"
            class="input-customized"
            v-model="name"
          />
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Tipo de Documento </span>
          <select
            id="name"
            class="input-customized"
            v-model="typeDocumentSelected"
          >
            <option
              v-for="(option, index) in typeDocumentOptions"
              :key="index"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Número de documento*</span>
          <input
            type="text"
            id="name"
            class="input-customized"
            v-model="documentNumber"
          />
        </div>
      </div>
    </div>
    <div class="row w-75 mt-4">
      <div class="col-12 col-md-12 col-lg-8 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Domicilio*</span>
          <input
            type="text"
            id="name"
            class="input-customized"
            v-model="home"
          />
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Pais*</span>
          <input
            type="text"
            id="name"
            class="input-customized"
            v-model="country"
          />
        </div>
      </div>
    </div>
    <div class="row w-75 mt-4">
      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Departamento*</span>
          <select
            id="name"
            class="input-customized"
            v-model="claimTypeSelected"
          >
            <option
              v-for="(option, index) in claimMotiveOptions"
              :key="index"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Provincia* </span>
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

      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Distrito* </span>
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
    <div class="row w-75 mt-4">
      <div class="col-12 col-md-12 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Telefono*</span>
          <input
            type="text"
            id="name"
            class="input-customized"
            v-model="phone"
          />
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Correo electronico*</span>
          <input
            type="text"
            id="name"
            class="input-customized"
            v-model="email"
          />
        </div>
      </div>
      <!-- <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Numero de documento*</span>
          <input
            type="text"
            id="name"
            class="input-customized"
            v-model="documentNumber"
          />
        </div>
      </div> -->
    </div>
    <div class="row w-75 mt-4">
      <div class="col-12 d-flex flex-column justify-content-center">
        <span class="text-center" style="color: #0393aa; font-weight: 700"
          >Identificación del bien contratado</span
        >
      </div>
    </div>
    <div class="row w-75 mt-4">
      <div class="col-12 col-md-12 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Tipo de Atencion* </span>
          <select
            id="name"
            class="input-customized"
            v-model="typeAttentionSelected"
          >
            <option
              v-for="(option, index) in typeAttentionOptions"
              :key="index"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Programa* </span>
          <select id="name" class="input-customized" v-model="programSelected">
            <option
              v-for="(option, index) in programOptions"
              :key="index"
              :value="option.value"
              @click="selectProgram(option.value)"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Fecha del Evento* </span>
          <input
            type="date"
            id="name"
            class="input-customized"
            v-model="eventDate"
          />
        </div>
      </div>
    </div>
    <div class="row w-75 mt-4">
      <div class="col-12 col-md-12 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Tipo de Moneda* </span>
          <select
            id="name"
            class="input-customized"
            v-model="moneyTypeSelected"
          >
            <option
              v-for="(option, index) in moneyTypeOptions"
              :key="index"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Monto a Reclamar*</span>
          <input
            type="text"
            id="name"
            class="input-customized"
            v-model="amount"
          />
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column"></div>
    </div>
    <div class="row w-75 mt-4">
      <div class="col-12 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Descripcion*</span>
          <textarea
            class="input-customized"
            style="width: 95%"
            v-model="description"
          />
        </div>
      </div>
    </div>
    <div class="row w-75 mt-4">
      <div class="col-12 d-flex flex-column justify-content-center">
        <span class="text-center" style="color: #0393aa; font-weight: 700"
          >Detalle de la reclamación o pedido del consumidor
        </span>
      </div>
    </div>
    <div class="row w-75 mt-4">
      <div class="col-12 col-md-12 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Tipo de Reclamacion* </span>
          <select
            id="name"
            class="input-customized"
            v-model="claimTypeSelected"
          >
            <option
              v-for="(option, index) in claimTypeOptions"
              :key="index"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="col-12 col-md-12 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Motivo de Reclamacion* </span>
          <select
            id="name"
            class="input-customized"
            v-model="claimMotiveSelected"
          >
            <option
              v-for="(option, index) in claimMotiveOptions"
              :key="index"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Lugar de Ocurrencia* </span>
          <select
            id="name"
            class="input-customized"
            v-model="ocurrencyPlaceSelected"
          >
            <option
              v-for="(option, index) in ocurrencyPlaceOptions"
              :key="index"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="row w-75 mt-4">
      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Unidad prestadora* </span>
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
      <div class="col-12 col-md-12 col-lg-8 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Otros </span>
          <input
            type="text"
            class="input-customized"
            style="width: 95%"
            v-model="others"
          />
        </div>
      </div>
    </div>
    <div class="row w-75 mt-4">
      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Tipo* </span>
          <select
            id="name"
            class="input-customized"
            v-model="claimSubtypesSelected"
          >
            <option
              v-for="(option, index) in claimSubtypesOptions"
              :key="index"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Subtipo* </span>
          <select
            id="name"
            class="input-customized"
            v-model="claimSubtypesSelected2"
          >
            <option
              v-for="(option, index) in claimSubtypesOptions2"
              :key="index"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column"></div>
    </div>
    <div class="row w-75 mt-4">
      <div class="col-12 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Detalle*</span>
          <textarea
            class="input-customized"
            style="width: 95%"
            v-model="details"
          />
        </div>
      </div>
    </div>
    <div class="row w-75 mt-4">
      <div class="col-12 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Pedido*</span>
          <textarea
            class="input-customized"
            style="width: 95%"
            v-model="order"
          />
        </div>
      </div>
    </div>
    <div class="row w-75 mt-4">
      <div class="col-12 d-flex flex-column justify-content-center">
        <span class="text-center" style="color: #0393aa; font-weight: 700"
          >Observaciones y acciones adoptadas por el proveedor
        </span>
      </div>
    </div>
    <div class="row w-75 mt-4">
      <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
        <div class="input-container">
          <span for="name" style="color: white">Fecha de respuesta </span>
          <input type="text" class="input-customized" v-model="responseDate" />
        </div>
      </div>
    </div>
    <div class="row w-75 mt-4">
      <div class="col-12 d-flex flex-column">
        <div class="input-container">
          <textarea
            class="input-customized"
            style="width: 95%"
            v-model="respondeDateDescription"
          />
        </div>
      </div>
    </div>
    <div class="btn btn-blue mt-4" @click="closeComplaintsBookForm">
      <span>Enviar</span>
    </div>
  </section>
</template>
<script>
import { scrollIntoView } from "/composables/main-composables.js";
export default {
  emits: ["closeComplaintsBookForm"],
  setup(props, ctx) {
    const fatherLastName = ref("");
    const motherLastName = ref("");
    const name = ref("");
    const documentNumber = ref("");
    const home = ref("");
    const country = ref("");
    const phone = ref("");
    const email = ref("");
    const eventDate = ref("");
    const amount = ref("");
    const description = ref("");
    const others = ref("");
    const details = ref("");
    const order = ref("");
    const responseDate = ref("");
    const respondeDateDescription = ref("");

    const loadFromLocalStorage = () => {
      claimantTypeSelected.value = localStorage.getItem("claimantTypeSelected");
      typeDocumentSelected.value = localStorage.getItem("typeDocumentSelected");
      typeAttentionSelected.value = localStorage.getItem(
        "typeAttentionSelected"
      );
      moneyTypeSelected.value = localStorage.getItem("moneyTypeSelected");
      programSelected.value = localStorage.getItem("programSelected");
      claimTypeSelected.value = localStorage.getItem("claimTypeSelected");
      claimMotiveSelected.value = localStorage.getItem("claimMotiveSelected");
      claimSubtypesSelected.value = localStorage.getItem(
        "claimSubtypesSelected"
      );
      claimSubtypesSelected2.value = localStorage.getItem(
        "claimSubtypesSelected2"
      );
      ocurrencyPlaceSelected.value = localStorage.getItem(
        "ocurrencyPlaceSelected"
      );
      fatherLastName.value = localStorage.getItem("fatherLastName") ?? "";
      motherLastName.value = localStorage.getItem("motherLastName") ?? "";
      name.value = localStorage.getItem("name") ?? "";
      documentNumber.value = localStorage.getItem("documentNumber") ?? "";
      home.value = localStorage.getItem("home") ?? "";
      country.value = localStorage.getItem("country") ?? "";
      phone.value = localStorage.getItem("phone") ?? "";
      email.value = localStorage.getItem("email") ?? "";
      eventDate.value = localStorage.getItem("eventDate") ?? "";
      amount.value = localStorage.getItem("amount") ?? "";
      description.value = localStorage.getItem("description") ?? "";
      others.value = localStorage.getItem("others") ?? "";
      details.value = localStorage.getItem("details") ?? "";
      order.value = localStorage.getItem("order") ?? "";
      responseDate.value = localStorage.getItem("responseDate") ?? "";
      respondeDateDescription.value =
        localStorage.getItem("respondeDateDescription") ?? "";
    };
    const deleteFromLocalStorage = () => {
      localStorage.removeItem("claimantTypeSelected");
      localStorage.removeItem("typeDocumentSelected");
      localStorage.removeItem("typeAttentionSelected");
      localStorage.removeItem("moneyTypeSelected");
      localStorage.removeItem("programSelected");
      localStorage.removeItem("claimTypeSelected");
      localStorage.removeItem("claimMotiveSelected");
      localStorage.removeItem("claimSubtypesSelected");
      localStorage.removeItem("claimSubtypesSelected2");
      localStorage.removeItem("ocurrencyPlaceSelected");
      localStorage.removeItem("fatherLastName");
      localStorage.removeItem("motherLastName");
      localStorage.removeItem("name");
      localStorage.removeItem("documentNumber");
      localStorage.removeItem("home");
      localStorage.removeItem("country");
      localStorage.removeItem("phone");
      localStorage.removeItem("email");
      localStorage.removeItem("eventDate");
      localStorage.removeItem("amount");
      localStorage.removeItem("description");
      localStorage.removeItem("others");
      localStorage.removeItem("details");
      localStorage.removeItem("order");
      localStorage.removeItem("responseDate");
      localStorage.removeItem("respondeDateDescription");
    };
    const saveOnLocalStorage = () => {
      localStorage.setItem("claimantTypeSelected", claimantTypeSelected.value);
      localStorage.setItem("typeDocumentSelected", typeDocumentSelected.value);
      localStorage.setItem(
        "typeAttentionSelected",
        typeAttentionSelected.value
      );
      localStorage.setItem("moneyTypeSelected", moneyTypeSelected.value);
      localStorage.setItem("programSelected", programSelected.value);
      localStorage.setItem("claimTypeSelected", claimTypeSelected.value);
      localStorage.setItem("claimMotiveSelected", claimMotiveSelected.value);
      localStorage.setItem(
        "claimSubtypesSelected",
        claimSubtypesSelected.value
      );
      localStorage.setItem(
        "claimSubtypesSelected2",
        claimSubtypesSelected2.value
      );
      localStorage.setItem(
        "ocurrencyPlaceSelected",
        ocurrencyPlaceSelected.value
      );
      localStorage.setItem("fatherLastName", fatherLastName.value ?? "");
      localStorage.setItem("motherLastName", motherLastName.value ?? "");
      localStorage.setItem("name", name.value ?? "");
      localStorage.setItem("documentNumber", documentNumber.value ?? "");
      localStorage.setItem("home", home.value ?? "");
      localStorage.setItem("country", country.value ?? "");
      localStorage.setItem("phone", phone.value ?? "");
      localStorage.setItem("email", email.value ?? "");
      localStorage.setItem("eventDate", eventDate.value ?? "");
      localStorage.setItem("amount", amount.value ?? "");
      localStorage.setItem("description", description.value ?? "");
      localStorage.setItem("others", others.value ?? "");
      localStorage.setItem("details", details.value ?? "");
      localStorage.setItem("order", order.value ?? "");
      localStorage.setItem("responseDate", responseDate.value ?? "");
      localStorage.setItem(
        "respondeDateDescription",
        respondeDateDescription.value ?? ""
      );
    };
    onUnmounted(() => {
      saveOnLocalStorage();
    });
    const closeComplaintsBookForm = () => {
      fatherLastName.value = "";
      motherLastName.value = "";
      name.value = "";
      documentNumber.value = "";
      home.value = "";
      country.value = "";
      phone.value = "";
      email.value = "";
      eventDate.value = "";
      amount.value = "";
      description.value = "";
      others.value = "";
      details.value = "";
      order.value = "";
      responseDate.value = "";
      respondeDateDescription.value = "";
      typeDocumentSelected.value = null;
      typeAttentionSelected.value = null;
      moneyTypeSelected.value = null;
      programSelected.value = null;
      claimTypeSelected.value = null;
      claimMotiveSelected.value = null;
      claimSubtypesSelected.value = null;
      claimSubtypesSelected2.value = null;
      ocurrencyPlaceSelected.value = null;
      claimantTypeSelected.value = null;
      deleteFromLocalStorage();
      ctx.emit("closeComplaintsBookForm");
    };
    onMounted(() => {
      loadFromLocalStorage();
      scrollIntoView("title");
    });
    const claimantTypes = reactive([
      {
        name: "Padre",
        value: "padre",
      },
      {
        name: "Tutor",
        value: "tutor",
      },
      {
        name: "Visitante",
        value: "visitante",
      },
    ]);
    const claimantTypeSelected = ref(null);
    const selectClaimantType = (value) => {
      // claimantTypeSelected.value = value;
    };
    const typeDocumentOptions = reactive([
      {
        name: "DNI",
        value: "dni",
      },
      {
        name: "Carnet de Extranjeria",
        value: "carnet",
      },
      {
        name: "Pasaporte",
        value: "pasaporte",
      },
    ]);
    const typeDocumentSelected = ref(null);
    const selectTypeDocument = (value) => {
      typeDocumentSelected.value = value;
    };
    const typeAttentionOptions = reactive([
      {
        name: "Bien",
        value: "bien",
      },
      {
        name: "Servicio",
        value: "servicio ",
      },
    ]);
    const typeAttentionSelected = ref(null);
    const selectTypeAttention = (value) => {
      typeAttentionSelected.value = value;
    };
    const moneyTypeOptions = reactive([
      {
        name: "Soles",
        value: "soles",
      },
      {
        name: "Dolares",
        value: "dolares",
      },
    ]);
    const moneyTypeSelected = ref(null);
    const selectMoneyType = (value) => {
      moneyTypeSelected.value = value;
    };
    const programOptions = reactive([
      {
        name: "Pregrado",
        value: "pregrado",
      },
      {
        name: "Postgrado",
        value: "postgrado",
      },
      {
        name: "Educacion Continua",
        value: "educacion-continua",
      },
      {
        name: "Otros",
        value: "otros",
      },
    ]);
    const programSelected = ref(null);
    const selectProgram = (value) => {
      programSelected.value = value;
    };

    const claimTypeOptions = reactive([
      {
        name: "Reclamo",
        value: "reclamo",
      },
      {
        name: "Queja",
        value: "queja",
      },
    ]);
    const claimTypeSelected = ref(null);
    const selectClaimType = (value) => {
      claimTypeSelected.value = value;
    };
    const claimMotiveOptions = reactive([
      {
        name: "Problemas de admision",
        value: "admision",
      },
      {
        name: "Problemas con la matricula",
        value: "matricula",
      },
      {
        name: "Problemas con clases/profesores",
        value: "clases-profesores",
      },
      {
        name: "Problemas con el sistema",
        value: "sistema",
      },
      {
        name: "Problemas con pago/cobranzas",
        value: "pago-cobranzas",
      },
      {
        name: "Problemas con trámites documentarios",
        value: "tramites-documentarios",
      },
      {
        name: "Problemas con translado",
        value: "translado",
      },
      {
        name: "Fallo/demora de respuesta al cliente",
        value: "fallo-demora",
      },
      {
        name: "Mala Atencion",
        value: "mala-atencion",
      },
      {
        name: "Robos/Extravios/Daños de objetos",
        value: "robos-extravios-danos",
      },
      {
        name: "Discriminacion y/o acoso",
        value: "discriminacion-acoso",
      },
      {
        name: "Problema con el servicio medico",
        value: "servicio-medico",
      },
      {
        name: "Problema con el servicio veterinario",
        value: "servicio-veterinario",
      },
      {
        name: "Problema con el servicio educativo",
        value: "servicio-educativo",
      },
      {
        name: "Mala informacion",
        value: "mala-informacion",
      },
      {
        name: "Otros",
        value: "otros",
      },
    ]);
    const claimMotiveSelected = ref(null);
    const selectClaimMotive = (value) => {
      claimMotiveSelected.value = value;
    };
    const claimSubtypesOptions = reactive([
      {
        name: "Academico",
        value: "academico",
      },
      {
        name: "Administrativo",
        value: "administrativo",
      },
    ]);
    const claimSubtypesSelected = ref(null);
    const selectClaimSubtypes = (value) => {
      claimSubtypesSelected.value = value;
    };
    const claimSubtypesOptions2 = reactive([
      {
        name: "Cursos",
        value: "cursos",
      },
      {
        name: "Matricula",
        value: "matricula",
      },
      {
        name: "Sistema",
        value: "sistema",
      },
      {
        name: "Redes",
        value: "redes",
      },
    ]);
    const claimSubtypesSelected2 = ref(null);
    const selectClaimSubtypes2 = (value) => {
      claimSubtypesSelected2.value = value;
    };
    const ocurrencyPlaceOptions = reactive([
      {
        name: "Presencial",
        value: "presencial",
      },
      {
        name: "Virtual",
        value: "virtual",
      },
    ]);
    const ocurrencyPlaceSelected = ref(null);
    const selectOcurrencyPlace = (value) => {
      ocurrencyPlaceSelected.value = value;
    };
    return {
      claimantTypes,
      claimantTypeSelected,
      selectClaimantType,
      typeDocumentOptions,
      typeDocumentSelected,
      selectTypeDocument,
      typeAttentionOptions,
      typeAttentionSelected,
      selectTypeAttention,
      moneyTypeOptions,
      moneyTypeSelected,
      selectMoneyType,
      programOptions,
      programSelected,
      selectProgram,
      claimTypeOptions,
      claimTypeSelected,
      selectClaimType,
      claimMotiveOptions,
      claimMotiveSelected,
      selectClaimMotive,
      claimSubtypesOptions,
      claimSubtypesSelected,
      selectClaimSubtypes,
      claimSubtypesOptions2,
      claimSubtypesSelected2,
      selectClaimSubtypes2,
      ocurrencyPlaceOptions,
      ocurrencyPlaceSelected,
      selectOcurrencyPlace,
      closeComplaintsBookForm,
      fatherLastName,
      motherLastName,
      name,
      documentNumber,
      home,
      country,
      phone,
      email,
      eventDate,
      amount,
      description,
      others,
      details,
      order,
      responseDate,
      respondeDateDescription,
    };
  },
};
</script>

<style scoped lang="scss">
.input-container {
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
  font-family: Axiforma;
}
.input-customized {
  border: 1px solid #515166;
  background: transparent;
  width: 90%;
  border-radius: 2em;
  padding: 0.8em 1em;
  resize: none;
  color: white;
  height: 50px;
  resize: none;
  option {
    background: #1c1c24;
  }
}

p,
span {
  font-family: "Axiforma", sans-serif;
}
</style>