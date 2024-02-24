<template>
  <div style="width: 40%;min-width: 350px" class="mt-5">
    <VForm :validation-schema="schema" @submit="onSubmit">
      <div class="input-container">
        <span for="name" style="color: white">Correo Electronico</span>
        <AuthInput
          type="text"
          name="email"
          placeholder="Correo Electronico"
          mode="aggressive"
        />
      </div>
      <div class="input-container" style="position: relative">
        <span for="name" style="color: white">Contraseña</span>
        <AuthInput
          type="password"
          name="password"
          placeholder="Contraseña"
          mode="aggressive"
        />
        <svg
          class="password-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="15"
          viewBox="0 0 24 15"
          fill="none"
        >
          <path
            d="M22.8773 6.90399C21.7451 4.94693 20.1167 3.30588 18.169 2.15721C16.1611 0.973653 13.8615 0.347656 11.5187 0.347656C9.17563 0.347656 6.87628 0.973672 4.86793 2.15721C2.92026 3.30521 1.29186 4.94693 0.160065 6.90399C-0.0533549 7.27242 -0.0533549 7.72658 0.160065 8.09579C1.29196 10.0529 2.92026 11.6939 4.86793 12.8426C6.87628 14.0261 9.17553 14.6521 11.5187 14.6521C13.8614 14.6521 16.1611 14.0269 18.169 12.8426C20.1167 11.6946 21.7451 10.0529 22.8773 8.09579C23.0903 7.72736 23.0903 7.27321 22.8773 6.90399ZM16.9608 10.7926C15.3182 11.7609 13.4367 12.2724 11.5187 12.2724C9.60015 12.2724 7.71842 11.7605 6.0766 10.7926C4.68304 9.97079 3.48865 8.84122 2.59082 7.4997C3.48867 6.15857 4.68304 5.02859 6.0766 4.20677C7.71842 3.23849 9.60024 2.72742 11.5187 2.72742C13.4368 2.72742 15.3189 3.23924 16.9608 4.20677C18.3543 5.02861 19.5483 6.15857 20.4462 7.4997C19.5483 8.84122 18.3543 9.97081 16.9608 10.7926ZM11.5187 3.45789C9.28979 3.45789 7.47611 5.27157 7.47611 7.50047C7.47611 9.72936 9.28979 11.543 11.5187 11.543C13.7476 11.543 15.5613 9.72936 15.5613 7.50047C15.5613 5.27157 13.7476 3.45789 11.5187 3.45789ZM11.5187 9.16356C10.6014 9.16356 9.8552 8.41773 9.8552 7.50037C9.8552 6.58306 10.6014 5.83718 11.5187 5.83718C12.4356 5.83718 13.1819 6.58301 13.1819 7.50037C13.1819 8.41768 12.4357 9.16356 11.5187 9.16356Z"
            fill="#00A9C3"
          />
        </svg>
      </div>
      <div class="mt-5 d-flex flex-column align-items-center">
        <button class="btn-blue w-100" type="submit">
          <span>Iniciar Sesion</span>
        </button>
        <div class="dont-have-account mt-5">
          ¿No tienes una cuenta?
          <span class="register-now" @click="openRegisterForm()"
            >Registrate aquí</span
          >
        </div>
      </div>
    </VForm>
  </div>
</template>
<script>
import * as yup from "yup";
import AuthService from "/services/auth/auth.service.js";
import { useForm } from "vee-validate";
import { authStore } from "../../store/auth/auth.store";
import { usePreloader, useSwall } from "/composables/main-composables.js";
import { useSocket } from "/composables/socket-composables.js";
export default {
  emits: ["openRegisterForm"],
  setup(props, ctx) {
    const { showPreloader, hidePreloader } = usePreloader();
    const { showSuccessSwall, showErrorSwall } = useSwall();
    const { subscribeUsersChannel } = useSocket();

    const openRegisterForm = () => {
      //   const store = authStore();
      //   store.showRegisterForm();
      ctx.emit("openRegisterForm");
    };
    const store = authStore();
    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required().min(8),
    });
    const { handleSubmit, errors, resetForm } = useForm({
      validationSchema: schema,
    });
    const onSubmit = async (values) => {
      const loginParams = {
        email: values.email,
        password: values.password,
      };
      try {
        showPreloader();
        const res = await AuthService.login(loginParams);

        if (res.status === 200) {
          hidePreloader();
          showSuccessSwall("Inicio de sesión exitoso");
          store.addToken(res.data.access_token);
          store.addUserData(res.data.user);
          subscribeUsersChannel();
          // const router = useRouter();
        }
      } catch (e) {
        hidePreloader();
        if (e.hasOwnProperty("response")) {
          showErrorSwall("Error", e.response.data.message);
          return;
        }
        showErrorSwall("Error", e);
      }
    };
    return {
      onSubmit,
      schema,
      openRegisterForm,
      isLogged,
    };
  },
};
</script>
<style lang="scss" scoped>
span {
  font-family: "Axiforma";
}
.password-icon {
  position: absolute;
  right: 2.5em;
  top: 3.2em;
}
.register-now {
  background: #0393aa;
  color: white;
  padding: 0.7em 1em;
  border-radius: 2em;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
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
}
</style>