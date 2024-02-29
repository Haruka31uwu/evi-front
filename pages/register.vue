<template>
  <section id="section-register">
    <div class="row w-100 mx-auto" style="height: 100%;">
      <div
        class="col-0 col-md-0 col-lg-0 d-flex justify-content-center align-items-center d-none"
        style="background: #0393aa"
      >
        <img src="/assets/img/login.png" style="width: 50%; height: 50%" alt="login"/>
      </div>
      <div
        class="col-12 col-md-12 col-lg-12 d-flex align-items-center flex-column justify-content-start py-5"
        style="max-height: 100%; overflow-y: auto"
      >
        <!-- <img src="/assets/img/login.png" /> -->
        <!-- <div class="login__title" style="position: relative; height: auto">
            <span> Registrarse </span>
            <div
              class="login__title-decorator"
              style="position: absolute; top: 0.8em; opacity: 0.7; left: 1em"
            ></div>
          </div> -->
        <div class="login__body">
          <!-- <p class="mt-2 text-center">
              ¡Bienvenido de nuevo a nuestra aula virtual! Ingresa tus datos de
              inicio de sesión a continuación
            </p> -->
          <auth-reduced-register-form
            @openProfileImageSelector="openProfileImageSelector"
          />
          <!-- <VForm :validation-schema="schema" @submit="onSubmit">
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
              <div class="input-container" style="position: relative">
              <span for="name" style="color: white">Contraseña</span>
              <AuthInput
                type="password"
                name="confirmPassword"
                placeholder="Confirmar Contraseña"
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
              <div class="login__body-options">
                <div class="record_me">
                  <input type="checkbox" id="record_me" />
                  <label for="record_me">Recordarme</label>
                </div>
                <span class="forgot-password">Olvide mi contraseña</span>
              </div>
              <div class="login__auth_options d-flex flex-column gap-4">
                <button class="btn-blue" type="submit">Crear Cuenta</button>
                <div class="btn-gray">
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
                </div> 
                <div class="dont-have-account">
                  ¿No tienes una cuenta?
                  <span class="register-now">Registrate aquí</span>
                </div>
              </div>
            </VForm> -->
        </div>
      </div>
    </div>
  </section>
</template>
  <script>
import * as yup from "yup";
import AuthService from "/services/auth/auth.service.js";
import { useForm } from "vee-validate";
export default {
  setup() {
    const router = useRouter();
    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required().min(8),
      confirmPassword: yup
        .string()
        .required()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    });
    const { handleSubmit, errors, resetForm } = useForm({
      validationSchema: schema,
    });
    const onSubmit = (values) => {
      const authParams = {
        email: values.email,
        password: values.password,
      };
      AuthService.register(authParams).then(
        () => {
          router.push("/courses");
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.error(resMessage);
        }
      );
    };
    const showProfileImageSelector = ref(false);
    const openProfileImageSelector = () => {
      showProfileImageSelector.value = true;
    };
    return {
      onSubmit,
      schema,
      showProfileImageSelector,
      openProfileImageSelector,
    };
  },
};
</script>
  
  <style  scoped lang="scss">
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
  width: 80%;
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
      padding: 0.7em 0.5em;
      border-radius: 1em;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
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
}
</style>