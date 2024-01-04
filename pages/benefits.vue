<template>
    <main>
        <benefits-banner/>
        <benefits-to-comunity/>
        <benefits-diferent-prices @openStudentRegisterModal="openStudentRegisterModal"/>
        <benefits-ambassadors/> 
        <benefits-refers-program @openRefersModal="openRefersModal"/>
        <benefits-modals-student-register v-if="showStudentRegisterModal" @closeModal="closeRegisterModal" @openConfirmationModal="openConfirmationModal"/>
        <benefits-modals-confirmation v-if="showConfirmationModal" @closeModal="closeConfirmationModal"/>
        <benefits-modals-refers v-if="showRefersModal" @closeModal="closeRefersModal" @openConfirmationModal2="openConfirmationModal2"/>
        <benefits-modals-confirmation2 v-if="showConfirmationModal2" @closeModal="closeConfirmationModal2"/>
    </main>
</template>
<script setup>
const showStudentRegisterModal = ref(false);
const openStudentRegisterModal = () => {
    showStudentRegisterModal.value = true;
};
const closeRegisterModal = () => {
    showStudentRegisterModal.value = false;
};
const showConfirmationModal = ref(false);
const openConfirmationModal = () => {
    showStudentRegisterModal.value = false;
    showConfirmationModal.value = true;
};
const closeConfirmationModal = () => {
    showConfirmationModal.value = false;
};
const showRefersModal = ref(false);
const openRefersModal = () => {
    showRefersModal.value = true;
};
const closeRefersModal = () => {
    showRefersModal.value = false;
};
const showConfirmationModal2 = ref(false);
const openConfirmationModal2 = () => {
    showRefersModal.value = false;
    showConfirmationModal2.value = true;
};
const closeConfirmationModal2 = () => {
    showConfirmationModal2.value = false;
};
</script>