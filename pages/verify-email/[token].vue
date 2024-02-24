<template>
  <section
    class="d-flex flex-column justify-content-center align-items-center gap-4"
  >
    <img src="/assets/img/evi-07.png" style="min-width: 300px; width: 20%" alt="evi07" />
    <div class="d-flex flex-column align-items-center" v-if="success">
      <span>Tu cuenta ha sido verificada con éxito. </span>
      <span>¡Te damos la bienvenida a nuestra comunidad! </span>
    </div>
    <div class="d-flex flex-column align-items-center" v-else>
      <span>{{errorMessage}}</span>
    </div>
    <nuxt-link  to='/checkout' class="btn-blue mb-5" v-if="success && originRoute=='checkout'">
      <span>Continuar con el proceso de compra</span>
    </nuxt-link>
    <nuxt-link to="/courses" class="btn-blue mb-5" v-else-if="success && originRoute=='login'">
      <span>Explora nuestros cursos</span>
    </nuxt-link>
    <nuxt-link class="btn-blue mb-5" to="/" v-else>
      <span>Vuelve al Inicio</span>
    </nuxt-link>
  </section>
</template>
  <script setup>
import { useRoute } from "vue-router";
import { usePreloader, useSwall } from "/composables/main-composables.js";
import AuthService from "/services/auth/auth.service.js";
import { authStore } from "../../store/auth/auth.store";

const route = useRoute();
const success = ref(null);
const errorMessage = ref(null);
const originRoute = ref(null);
const { showPreloader, hidePreloader } = usePreloader();
const { showErrorSwall, showConfirmEmailSwall } = useSwall();
const store = authStore();

onMounted(async () => {
  try {
    const token = route.params.token;
    showPreloader();
    const data = await AuthService.verifyEmail({token:token});
    if (data.status === 200) {
      success.value = true;
      originRoute.value = data.data.route;
      const loginParams = {
        token: token,
      };
      try {
        showPreloader();
        const res = await AuthService.loginWithToken(loginParams);
        if (res.status === 200) {
          hidePreloader();
          store.addToken(res.data.access_token);
          store.addUserData(res.data.user);

        }
      } catch (e) {
        hidePreloader();
        showErrorSwall("Error", e.response.data.message);
      }  
    }
    hidePreloader();

  } catch (e) {
    success.value = false;
    errorMessage.value = e.response.data.message;
    originRoute.value = e.response.data.originRoute;
    hidePreloader();

  }
});
</script>