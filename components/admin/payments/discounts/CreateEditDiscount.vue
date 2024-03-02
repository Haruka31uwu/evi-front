<template>
  <div class="modal-customized">
    <div
      class="modal-customized-body d-flex flex-column pb-5"
      style="border-radius: 2em"
    >
      <div
        class="modal-customized-header w-100 d-flex justify-content-between px-3 pt-4"
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
        <h3 class="text-center">
          <slot name="modal-title">Modal Title</slot>
        </h3>
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
      <div class="w-100 px-5">
        <div class="row d-flex align-items-start">
          <div
            class="col-12 col-lg-6 d-flex flex-column"
            style="row-gap: 1.2em"
          >
            <template v-for="(field, index) in fields" :key="index">
              <div class="input-container" v-if="(index + 1) % 2 != 0">
                <div
                  @click="activateCodeField()"
                  class="d-flex gap-1 align-items-center"
                >
                  <span for="name" style="color: white">{{ field.label }}</span>
                  <Icon
                    name="ic:round-warning"
                    color="yellow"
                    v-if="field.name == 'last_code' && data"
                  />
                </div>
                <input
                  class="input-customized"
                  :type="field.type"
                  :name="field.name"
                  max="100"
                  min="0"
                  v-model="fieldsValues[field.name]"
                  mode="aggressive"
                  :disabled="field.name == 'last_code' ? disabledCode : false"
                />
              </div>
            </template>
          </div>

          <div
            class="col-12 col-lg-6 d-flex flex-column"
            style="row-gap: 1.2em"
          >
            <template v-for="(field, index) in fields" :key="index">
              <div class="input-container" v-if="(index + 1) % 2 == 0">
                <div
                  @click="activateCodeField()"
                  class="d-flex gap-1 align-items-center"
                >
                  <span for="name" style="color: white">{{ field.label }}</span>
                  <Icon
                    name="ic:round-warning"
                    color="yellow"
                    v-if="field.name == 'last_code' && data"
                  />
                </div>
                <input
                  class="input-customized"
                  :type="field.type"
                  :name="field.name"
                  mode="aggressive"
                  :id="field.name"
                  max="100"
                  min="0"
                  v-model="fieldsValues[field.name]"
                  :disabled="field.name == 'last_code' ? disabledCode : false"
                />
              </div>
            </template>
          </div>
          <button
            type="submit"
            class="btn-blue mt-4 mx-auto"
            style="width: 300px"
            @click="
              () => {
                onSubmit(fieldsValues);
              }
            "
          >
            <span>{{ data ? "Actualizar" : "Guardar" }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useForm } from "vee-validate";
import * as yup from "yup";
import AdminDiscountService from "/services/admin/payments/discount.service.js";
import { useSwall, usePreloader } from "/composables/main-composables";
const { showSuccessSwall, showErrorSwall, showConfirmSwall } = useSwall();
const { showPreloader, hidePreloader } = usePreloader();
export default {
  emits: ["closeModal", "createdDiscount"],
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    fields: {
      type: Array,
      default: () => [],
    },
    selectedDiscount: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, ctx) {
    const fields = props.fields;
    const selectedDiscount = props.selectedDiscount;
    const data = props.data;
    const disabledCode = ref(false);
    const activateCodeField = async () => {
      const confirmed = await showConfirmSwall(
        "¿Desea activar el campo de código?",
        "Al Actualizar este campo se creara un nuevo codigo y el anterior se expirara"
      );
      if (confirmed) {
        disabledCode.value = false;
      }
    };

    const fieldsValues = ref({
      name: null,
      lastName: null,
      creationDate: null,
      last_code: null,
      cuzPercentage:0,
    });

    const formatDate = (inputDate) => {
      console.log("inputDate", inputDate);
      // Dividir la cadena de fecha y hora en partes separadas
      var parts = inputDate.split(" ");

      // Obtener solo la parte de la fecha
      var datePart = parts[0];

      // Dividir la parte de la fecha en partes separadas
      var dateParts = datePart.split("-");

      // Reconstruir la cadena de fecha en el formato "dd/mm/yyyy"
      var formattedDate =
        dateParts[0] + "-" + dateParts[1] + "-" + dateParts[2];
      return formattedDate;
    };
    onMounted(() => {
      if (data) {
        fieldsValues.value.name = data.hasOwnProperty("name") ? data.name : "";
        fieldsValues.value.lastName = data.hasOwnProperty("last_name")
          ? data.last_name
          : "";
        fieldsValues.value.creationDate = data.hasOwnProperty(
          "discount_code_created_at"
        )
          ? formatDate(data.discount_code_created_at)
          : "";

        fieldsValues.value.last_code = data.hasOwnProperty("last_code")
          ? data.last_code
          : "";
        disabledCode.value = true;
      }
    });

    const closeModal = () => {
      ctx.emit("closeModal");
    };
    const createdDiscount = () => {
      ctx.emit("createdDiscount");
    };
    const onSubmit = async (values) => {
      try {
        // showPreloader();
        //check if the form is valid  not null not empty
        let errors = null;
        Object.keys(values).forEach((key) => {
          let valuesNames = {
            name: "Nombre",
            lastName: "Apellido",
            creationDate: "Fecha de Creación",
            last_code: "Código",
          };
          if (values[key] == null || values[key] == "") {
            if (key != "last_code" && (selectedDiscount.value == 4 &&  key=='lastName' &&(values[key] == null ||values[key] == "") )) {
              errors = true;
              showErrorSwall(
                "",
                `El campo ${valuesNames[key]} no puede estar vacio`
              );
            }

            return;
          }
        });
        if (errors) return;
        const params = {
          ...values,
          selectedDiscount: selectedDiscount.value,
          discount_code_id: data ? data.discount_code_id : null,
          origin_id: data ? data.id : null,
        };

        const response = await AdminDiscountService.createDiscount(params);
        if (response.status === 200) {
          showSuccessSwall("", response.data.message);
          hidePreloader();
          createdDiscount();
        }
        closeModal();
      } catch (err) {
        showErrorSwall("", err.response.data.message);
        hidePreloader();
        console.error(err);
      }
      //   resetForm();
    };

    return {
      closeModal,
      fields,
      data,
      fieldsValues,
      onSubmit,
      disabledCode,
      activateCodeField,
    };
  },
};
</script>
<style lang="scss" scoped>
.modal-customized {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-customized-body {
  width: 50%;
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
</style>