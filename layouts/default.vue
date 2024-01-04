<template>
  <div style="position: relative; width: 100%">
    <main >
      <main-navbar @openSidebarCart="showSidebarCart = true" />
      <commons-complaints-book-form
        v-if="getClaimForm"
        @closeComplaintsBookForm="closeComplaintsBookForm"
      />
      <router-view v-show="!getClaimForm" @click="showSidebarCart = false" />
      <main-footer
        v-if="showFooter"
        @openWorkWithUsModal="openWorkWithUsModal"
        @openComplaintsBookModal="openComplaintsBookModal"
        @openModalTermAndConditions="openModalTermAndConditions"
      />
      <home-modals-work-with-us-modal
        v-if="showModalWorkWithUs"
        @closeModal="closenWorkWithUsModal"
      />
      <home-modals-complaints-book-modal
        v-if="showModalComplainBook"
        @openComplaintsBookForm="openComplaintsBookForm"
        @closeModal="closenComplaintsBookModal"
      />
      <home-modals-term-and-conditions
        v-if="showModalTermAndConditions"
        @closeModal="closeModalTermAndConditions"/>
    </main>

    <shop-car-side-bar-car-items
      v-if="showSidebarCart"
      @closeCarSideBar="showSidebarCart = false"
    />
    <div v-if="isLoading" class="preloader">
      <div class="loader"></div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
import { usePreloader, useSwall,getClaimForm } from "/composables/main-composables.js";
const { isLoading } = usePreloader();
const showFooter = ref(true);
onMounted(() => {
  if (!route) return;
  if (route.matched[0].path === "/login") {
    console.log("login");
    showFooter.value = false;
  }
});
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      integrity:
        "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
      crossorigin: "anonymous",
    },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
      integrity:
        "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
      crossorigin: "anonymous",
    },
    {
      src: "https://checkout.culqi.com/js/v4",
    },
  ],
});
const showSidebarCart = ref(false);
const showModalWorkWithUs = ref(false);
const showModalComplainBook = ref(false);
const showModalComplainBookForm = ref(false);
const showModalTermAndConditions = ref(false);
const openWorkWithUsModal = () => {
  showModalWorkWithUs.value = true;
};
const closenWorkWithUsModal = () => {
  showModalWorkWithUs.value = false;
};
const openComplaintsBookModal = () => {
  showModalComplainBook.value = true;
};
const closenComplaintsBookModal = () => {
  showModalComplainBook.value = false;
};
const closeComplaintsBookForm = () => {
  showModalComplainBookForm.value = false;
  getClaimForm.value = false;
};
const closeModalTermAndConditions = () => {
  showModalTermAndConditions.value = false;
};
const openComplaintsBookForm = () => {
  closenComplaintsBookModal();

  getClaimForm.value = true;
};
const openModalTermAndConditions = () => {
  console.log("openModalTermAndConditions");
  showModalTermAndConditions.value = true;
};
</script>
