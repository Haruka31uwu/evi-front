<template>
  <div style="position: relative; width: 100%">
    <main >
      <main-navbar @openSidebarCart="showSidebarCart = true" />
      <commons-complaints-book-form
        v-if="getClaimForm"
        @closeComplaintsBookForm="closeComplaintsBookForm"
      />
      <router-view v-show="!getClaimForm" @click="showSidebarCart = false"  @openTransactionDetails="(transactionDetails)=>openFinishTransactionModal(transactionDetails)"/>
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
    <shop-car-finish-transaction-modal
      v-if="showFinishTransactionModal && transactionDetails"
      :transactionDetails="transactionDetails"
      @closeModal="closeFinishTransactionModal"/>
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
const transactionDetails = ref(null);
onMounted(() => {
  if (!route) return;
  if (['/login','/register'].includes(route.matched[0].path)) {
    showFooter.value = false;
  }
});

const showSidebarCart = ref(false);
const showModalWorkWithUs = ref(false);
const showModalComplainBook = ref(false);
const showModalComplainBookForm = ref(false);
const showModalTermAndConditions = ref(false);
const showFinishTransactionModal = ref(false);
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
const closeFinishTransactionModal = () => {
  showFinishTransactionModal.value = false;
};
const openFinishTransactionModal = (transactionDetail) => {
  transactionDetails.value = transactionDetail;
  showFinishTransactionModal.value = true;
};
const openModalTermAndConditions = () => {
  showModalTermAndConditions.value = true;
};
</script>
