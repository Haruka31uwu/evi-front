<template>
      <div style="position: relative; width: 100%">

    <main style="display: flex!important;flex-direction: row!important;overflow-x: hidden;">
        <admin-main-sidebar/>
        <router-view/>
    </main>
    <div v-if="isLoading" class="preloader">
      <div class="loader"></div>
    </div>
    </div>
</template>
<script setup>
import { usePreloader, useSwall,getClaimForm } from "/composables/main-composables.js";
const { isLoading } = usePreloader();
</script>