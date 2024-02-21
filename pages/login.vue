<template>
  <section>
    <div class="row" style="height: 90vh;">
      <div
       v-if="currentWindowWidth>1080"
        class="col-lg-6 d-flex justify-content-center align-items-center"
        style="background: #0393aa"
      >
        <img src="/assets/img/login.png" style="width: 50%; height: 50%" />

      </div>
      <div
        class="col-12 col-md-12 col-lg-6 d-flex align-items-center flex-column justify-content-center"
      >
        <!-- <img src="/assets/img/login.png" /> -->
        <div class="login__title" style="position: relative; height: auto;z-index: 1;">
          <span style="font-size: 1.2em;"> Iniciar sesión </span>
          <div
            class="login__title-decorator"
            style="position: absolute; top: 0.8em; opacity: 0.7; left: 2em;z-index: -1;"
          ></div>
        </div>
        <div class="login__body">
          <p class="mt-4 text-center">
            ¡Bienvenido a evisalud! Ingresa tus datos para continuar
          </p>
          <VForm :validation-schema="schema" @submit="onSubmit" >
            <div class="input-container">
              <span for="name" style="color: white">Correo Electronico</span>
              <AuthInput
                type="text"
                name="email"
                placeholder="Correo Electronico"
                mode="aggressive"
              />
            </div>
            <div class="input-container mt-4" style="position: relative">
              <span for="name" style="color: white;">Contraseña</span>
              <AuthInput
                type="password"
                name="password"
                placeholder="Contraseña"
                mode="aggressive"
              />

            </div>

            <!-- <div class="login__body-options">
              <div class="record_me">
                <input type="checkbox" id="record_me" />
                <label for="record_me">Recordarme</label>
              </div>
              <span class="forgot-password">Olvide mi contraseña</span>
            </div> -->
            <div
              class="login__auth_options d-flex flex-column gap-4 mt-5 align-items-center"
            >
              <button class="btn-blue" type="submit"><span>Ingresar</span></button>
              <!-- <div class="btn-gray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.0003 11.7015C22.0003 10.9458 21.9288 10.2191 21.7962 9.52148H11.2246V13.6442H17.2655C17.0053 14.9764 16.2145 16.1052 15.0257 16.8609V19.5351H18.6533C20.7758 17.6796 22.0003 14.9473 22.0003 11.7015Z"
                    fill="#4285F4"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.2241 22.1173C14.2548 22.1173 16.7956 21.1629 18.6528 19.5351L15.0252 16.861C14.0201 17.5005 12.7343 17.8783 11.2241 17.8783C8.3006 17.8783 5.82607 16.0035 4.94341 13.4844H1.19336V16.2457C3.04032 19.7289 6.83629 22.1173 11.2241 22.1173Z"
                    fill="#34A853"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.94394 13.4832C4.71945 12.8438 4.5919 12.1607 4.5919 11.4582C4.5919 10.7558 4.71945 10.0727 4.94394 9.43324V6.67188H1.19389C0.433679 8.11069 0 9.73844 0 11.4582C0 13.178 0.433679 14.8058 1.19389 16.2446L4.94394 13.4832Z"
                    fill="#FBBC05"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.2241 5.03972C12.8721 5.03972 14.3517 5.57746 15.515 6.63356L18.7344 3.57668C16.7905 1.85688 14.2497 0.800781 11.2241 0.800781C6.83629 0.800781 3.04032 3.18912 1.19336 6.67231L4.94341 9.43368C5.82607 6.91454 8.3006 5.03972 11.2241 5.03972Z"
                    fill="#EA4335"
                  />
                </svg>
                Iniciar sesion con Gmail
              </div> -->
              <div class="dont-have-account d-flex flex-lg-row flex-column">
                <span>¿No tienes una cuenta?</span>
                <nuxt-link class="register-now" style="color: white;" to="/register"
                  >Registrate aquí</nuxt-link
                >
              </div>
              <!-- <Auth :supabaseClient="supabaseClient" :providers="['google']" /> -->
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import * as yup from "yup";
import AuthService from "/services/auth/auth.service.js";
import { useForm } from "vee-validate";
import { authStore } from "../../store/auth/auth.store";
import { usePreloader, useSwall } from "/composables/main-composables.js";

// import { supabaseClient } from "../supabase";
// import { Auth } from "@nuxtbase/auth-ui-vue";
// import {Auth} from '@nuxtbase/auth-ui-vue'
export default {
  setup() {
    let currentWindowWidth = ref(null);
    onMounted(() => {
      currentWindowWidth.value = window.innerWidth;
      window.addEventListener("resize", () => {
        currentWindowWidth.value = window.innerWidth;
      });
    });    const store = authStore();    
    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required().min(8),
    });
    const { handleSubmit, errors, resetForm } = useForm({
      validationSchema: schema,
    });
    const { showPreloader, hidePreloader } = usePreloader();
    const { showErrorSwall } = useSwall();
    const onSubmit = (values) => {
      const loginParams = {
        email: values.email,
        password: values.password,
      };
      showPreloader();
      AuthService.login(loginParams).then(
        (res) => {
          resetForm();
          if (res.status === 200) {
            store.addToken(res.data.access_token);
            store.addUserData(res.data.user);
            const router = useRouter();
            router.push("/courses");
            hidePreloader();
          }
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          hidePreloader();
          showErrorSwall('',resMessage);
        }
      );
    };
    return {
      onSubmit,
      schema,
      currentWindowWidth
    };
  },
};
</script>

<style   scoped lang="scss">
.login__title {
  font-weight: 700;
  .login__title-decorator {
    width: 100px;
    height: 1em;
    border-radius: 1em;
    background: #0393aa;
  }
}
.login__body {
  width: 60%;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  .login__body-options {
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    input,
    label,
    span {
      color: #0393aa;
      &:hover {
        cursor: pointer;
        color: #515166;
      }
    }
    .forgot-password {
      text-decoration: underline;
    }
  }
  .login__auth_options {
    margin: 0 auto;

    .register-now {
      background: #0393aa;
      padding: 0.5em 1em;
      border-radius: 2em;
      text-align: center;
      &:hover {
        cursor: pointer;
        color:#0393aa;
      }
    }
  }
}

.password-icon {
  position: absolute;
  right: 2.5em;
  top: 2.8em;
}
label,
p,
h1,
h2,
h3,
h4,
h5,
h6,
span {
  color: white;
  font-family: Axiforma;
}.dont-have-account{
  margin-top: 4em;
}
</style>