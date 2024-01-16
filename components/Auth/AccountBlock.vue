<template>
  <div v-if="accountOptions">
    <div class="login-account" v-if="!isLogged">Iniciar Sesión</div>
    <div class="logged-account d-flex flex-row gap-2 align-items-center" v-else>
      <img :src="userData.profile_img" class="account-profile-img" />
      <span style="color: white">{{
        `${userData.name} ${userData.last_name}`
      }}</span>
      <Icon
        v-if="!isOpenDropdown"
        @click="isOpenDropdown = !isOpenDropdown"
        name="mdi:chevron-down"
        size="2em"
        color="white"
      ></Icon>
      <Icon v-else name="mdi:chevron-up" size="2em" color="white" @click="isOpenDropdown=!isOpenDropdown"></Icon>
      <ul class="account-options" v-if="isOpenDropdown">
        <li v-for="(option) in accountOptions " :key="option.key" @click="option.onclick"> 
            <span>{{ option.name }}</span>
        </li>
    </ul>
    </div>
  </div>
</template>
<script setup>
import { authStore } from "../../store/auth/auth.store";
import AuthService from "../../services/auth/auth.service";
import { usePreloader } from "/composables/main-composables.js";
import {useRouter} from 'vue-router'
const storeAuth=authStore();
const isLogged =computed(()=> storeAuth.isLogged); 
const userData = computed(()=> storeAuth.getUserData);
const isOpenDropdown = ref(false);
const { showPreloader, hidePreloader } = usePreloader();
const router = useRouter()
const closeSession = async () => {
  try {
    isOpenDropdown.value = false;
    const params = {
      token: authStore().getAccessToken,
      userId: authStore().getUserData.id,
    };
    showPreloader()
    const res = await AuthService.logout(params);
    if (res.status === 200) {
      authStore().removeToken();
      authStore().removeUserData();

      hidePreloader()
      router.push("/");
    }
  } catch (e) {
    console.log(e);
    hidePreloader()
  }
};
const viewProfile=()=>{
    isOpenDropdown.value=false;
    router.push({name:"profile"})
}
const accountOptions = ref([
  {
    name: "Cerrar Sesion",
    key: "logout",
    onclick: closeSession,
  },
  {
    name:"Ver Perfil",
    key:"profile",
    onclick:()=>viewProfile
  }
]);
</script>
<style scoped lang="scss">
.account-profile-img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
}.logged-account{
    position: relative;
    .account-options{
        position: absolute;
        top: 100%;
        height: auto;
        z-index: 100;
        background: black;
        list-style: none;
        padding: 0.5em 3em;
        border-bottom-left-radius: 1em;
        border-bottom-right-radius: 1em;
        width: auto;
        li{
            &:hover{
                cursor: pointer;
                text-decoration: underline;
                color: white;
            }
        }
    }
}
</style>