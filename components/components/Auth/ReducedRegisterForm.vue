<template>
  <div class="row d-flex align-items-center">
    <span class="text-center" style="font-size: 1.5em">Crear tu cuenta</span>
    <VForm
      :validation-schema="schema"
      @submit="onSubmit"
      class="row d-flex align-items-start"
    >
      <div class="col-12 col-lg-6 d-flex flex-column" style="row-gap: 1.2em">
        <div class="input-container">
          <span for="name" style="color: white">Nombre</span>
          <AuthInput type="text" name="name" mode="aggressive" />
        </div>
        <div class="input-container">
          <span for="name" style="color: white">Apellidos</span>
          <AuthInput type="text" name="lastName" mode="aggressive" />
        </div>
        <div class="input-container">
          <span for="name" style="color: white">Pais*</span>
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
      </div>
      <div class="col-12 col-lg-6 d-flex flex-column" style="row-gap: 1.2em">
        <div class="input-container">
          <span for="name" style="color: white">Celular</span>
          <AuthInput type="text" name="phone" mode="aggressive" />
        </div>
        <div class="input-container">
          <span for="name" style="color: white">Correo Electronico</span>
          <AuthInput type="email" name="email" mode="aggressive" />
        </div>
        <div class="input-container">
          <span for="name" style="color: white">Contraseña</span>
          <AuthInput type="password" name="password" mode="aggressive" />
        </div>
      </div>
      <div class="payment-condition d-flex flex-row gap-2 mt-5">
        <div
          class="condition-checkbox"
          :style="condition ? 'background:#179bd7' : ''"
          @click="condition = !condition"
        ></div>
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
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import * as yup from "yup";
import AuthService from "/services/auth/auth.service.js";
import { useForm } from "vee-validate";
import { authStore } from "../../store/auth/auth.store";
import { usePreloader, useSwall } from "/composables/main-composables.js";

export default defineComponent({
  setup() {
    const { showPreloader, hidePreloader } = usePreloader();
    const { showSuccessSwall, showErrorSwall } = useSwall();
    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required().min(8),
      name: yup.string().required(),
      lastName: yup.string().required(),
      phone: yup.string().required(),
    });
    const store = authStore();

    const { handleSubmit, errors, resetForm } = useForm({
      validationSchema: schema,
    });
    const condition = ref(false);
    const onSubmit = async (values) => {
      if (!condition.value) {
        return;
      }
      const authParams = {
        email: values.email,
        password: values.password,
        name: values.name,
        lastName: values.lastName,
        phone: values.phone,
        country: countrySelected.value,
      };
      try {
        showPreloader();
        const res = await AuthService.register(authParams);
        if (res.status === 200) {
          store.addToken(res.data.access_token);
          store.addUserData(res.data.user);
          showSuccessSwall("Exito", "Usuario creado correctamente");
          location.reload();
          // const router = useRouter();
          // router.push("/classroom/home");
        }
        hidePreloader();
      } catch (e) {
        console.log(e.response.data);
        hidePreloader();
        showErrorSwall("Error", e.response.data.message);
        return;
      }
    };
    const countryOptions = [
      { name: "Perú", value: "peru" },
      { name: "Colombia", value: "colombia" },
      { name: "Chile", value: "chile" },
      { name: "Argentina", value: "argentina" },
      { name: "Ecuador", value: "ecuador" },
      { name: "Bolivia", value: "bolivia" },
      { name: "Paraguay", value: "paraguay" },
      { name: "Uruguay", value: "uruguay" },
      { name: "Venezuela", value: "venezuela" },
      { name: "Panamá", value: "panama" },
      { name: "Costa Rica", value: "costa_rica" },
      { name: "México", value: "mexico" },
      { name: "Guatemala", value: "guatemala" },
    ];
    const countrySelected = ref("peru");
    return {
      countryOptions,
      countrySelected,
      condition,
      schema,
      onSubmit,
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
}
.condition-checkbox {
  width: 2em;
  height: 2em;
  border-radius: 20%;
  border: 1px solid #515166;
  background: #1c1c24;
  color: #1c1c24;
  cursor: pointer;
}
.primary-underline {
  text-decoration: underline;
  color: #179bd7;
  cursor: pointer;
}
</style>