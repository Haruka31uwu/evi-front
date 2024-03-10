<template>
  <div v-if="accountOptions">
    <div
      class="login-account"
      v-if="userData && userData.length == 0"
      :style="router.currentRoute.value.path == '/login' ? 'color:#0393AA' : ''"
    >
      Iniciar sesión
    </div>
    <div
      class="logged-account d-flex flex-row gap-3 align-items-center"
      v-else
      @click="closeOpenDropdown"
    >
      <div class="d-flex flex-row gap-3 align-items-center">
        <div style="background: #0393AA;border-radius: 50%;">
          <img
          :src="userData.profile_img"
          class="account-profile-img"
          alt="account-profile-img"
        />
        </div>
        <div class="d-flex flex-row align-items-center">
        <span style="color: white">{{ getNameLastNameMax() }}</span>
        <Icon
          v-if="!isOpenDropdown"
          name="mdi:chevron-down"
          size="2em"
          color="white"
        ></Icon>
        <Icon v-else name="mdi:chevron-up" size="2em" color="white"></Icon>
        </div>
      </div>
      <ul class="account-options" v-if="isOpenDropdown">
        <li
          v-for="option in accountOptions.filter((option) =>{
            if(option.key=='go-admin'){
              return userData.role_id==2;
            }
            return true;
          
          })"
          :key="option.key"
          @click="option.onclick"
        >
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
import { useRouter } from "vue-router";
import { useSocket } from "/composables/socket-composables.js";

const storeAuth = authStore();
const {
  subscribeUsersChannel,
  subscribeGlobalChannel,
  getCurrentSocket,
  registerEventHandler,
} = useSocket();
const userData = computed(() => storeAuth.getUserData);
const newLogin = computed(() => storeAuth.newLogin);
const getNameLastNameMax = () => {
  const userName = userData.value.name + " " + userData.value.last_name;
  return userName.length > 12 ? userName.substring(0, 12) + "..." : userName;
};
let checkstorage = ref(null);
function checkLocalStorage() {
  // Check if a specific key in local storage has changed
  var storedValue = localStorage.getItem("userData");
  console.log("iterator");
  console.log(newLogin.value[0], newLogin.value[1].id, userData.value.id);

  // Do something with the storedValue here
  if (newLogin.value[0] == "login-account-event") {
    if (storedValue !== null) {
      storeAuth.addUserData(JSON.parse(storedValue)[0]);
      if (newLogin.value[1].id === userData.value.id) {
        subscribeUsersChannel();
      }
      clearInterval(checkstorage);
    }
  }
  if (newLogin.value[0] == "unlogin-account-event") {
    if (storedValue !== null) {
      console.log("unlogin-account-event", "llego",newLogin.value[1].id,userData.value.id);
      if (newLogin.value[1].id === userData.value.id) {
        console.log("unlogin-account-event", "llego");
        storeAuth.removeUserData();
        subscribeGlobalChannel();
        closeProfileEditor();
        router.push("/");
      }
      clearInterval(checkstorage);
    }
  }
}
watch(newLogin, (val) => {
  console.log(val, "newLogin");
  checkstorage = setInterval(checkLocalStorage, 1000);
});
// Check local storage every 1 second (adjust as needed)
const emit = defineEmits(["openProfileEditor","closeProfileEditor"]);
const isOpenDropdown = ref(false);
const { showPreloader, hidePreloader } = usePreloader();
const router = useRouter();
const closeSession = async () => {
  try {
    showPreloader();

    hidePreloader();
    isOpenDropdown.value = false;
    const params = {
      token: authStore().getAccessToken,
      userId: authStore().getUserData.id,
    };

    showPreloader();
    const res = await AuthService.logout(params);
    if (res.status === 200) {
      hidePreloader();
    }
  } catch (e) {
    authStore().removeToken();
    authStore().removeUserData();
    console.error(e);
    hidePreloader();
  }
};
const closeProfileEditor = () => {
  emit("closeProfileEditor");
};
const closeOpenDropdown = () => {
  if (isOpenDropdown.value) {
    isOpenDropdown.value = false;
  } else {
    isOpenDropdown.value = true;
  }
};
const viewProfile = () => {
  console.log("emit");

  emit("openProfileEditor");
};
const accountOptions = ref([
  {
    name: "Cerrar Sesion",
    key: "logout",
    onclick: closeSession,
  },
  {
    name: "Ver Perfil",
    key: "profile",
    onclick: viewProfile,
  },
  {
    name: "Ir a vista de administrador",
    key: "go-admin",
    onclick: ()=>{
      console.log(userData.value);
      if(userData.value.role_id==2){
        router.push("/admin/home");
      }
    },
  },
  
]);
</script>
<style scoped lang="scss">
.account-profile-img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
}
.logged-account {
  position: relative;
  .account-options {
    position: absolute !important;
    top: 100%;
    height: auto;
    z-index: 100;
    background: black;
    list-style: none;
    padding: 0.5em 3em;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
    width: auto;
    li {
      &:hover {
        cursor: pointer;
        text-decoration: underline;
        color: white;
      }
    }
  }
}
@media (max-width: 768px) {
  .logged-account {
    display: flex;
    flex-direction: column !important;

    .account-options {
      position: relative !important;
      width: 100%;
      padding: 0.5em 1em;
    }
  }
}
</style>