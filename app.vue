<template>
  <div>
    <NuxtLayout :name="'default'" v-if="!isAdminRoute()" />
    <NuxtLayout :name="'admin'" v-else />
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
// import echo from "/sockets/main.socket.js";
import { useSocket } from "/composables/socket-composables.js";
// const {initWs} = useSocket();
import { authStore } from "~/store/auth/auth.store";
import { useSwall } from "./composables/main-composables";
import { loginSocket, unLoginSocket } from "../sockets/auth.socket.js";

const storeAuth = authStore();
const userData = computed(() => storeAuth.getUserData);
const { showSuccessSwall } = useSwall();
const router = useRouter();
const socket = useSocket();
//Initialize Sockets

const initSubscriptions = () => {
  loginSocket();
  unLoginSocket();
  if (userData.value) {
    if (userData.value.length != 0 ) {
      if (userData.value.id == 1) {
        socket.subscribeAdminChannel();
        return;
      } else {
        socket.subscribeUsersChannel();
        return;
      }
    }
  }
};
initSubscriptions();
const isAdminRoute = () => {
  const route = router.currentRoute.value.path;
  if (route.includes("admin")) {
    return true;
  }
  return false;
};
//watch for user data changes
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      integrity:
        "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
      crossorigin: "anonymous",
    },
    //dfine header icon
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/assets/img/evi-07.png",
    },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
      integrity:
        "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
      crossorigin: "anonymous",
    },
    { src: "https://checkout.culqi.com/js/v4", async: true },
  ],
});
</script>
