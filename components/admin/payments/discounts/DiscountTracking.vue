<template>
  <div class="modal-customized">
    <div class="modal-customized-body" style="border-radius: 2em">
      <div
        class="modal-customized-header px-5 w-100 d-flex justify-content-between px-3 pt-5"
      >
        <svg
          class="d-none"
          width="36"
          height="20"
          viewBox="0 0 36 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-4.37102e-07 9.99972C-4.47741e-07 10.2431 0.167831 10.5666 0.338169 10.7237L9.93811 19.6715C10.3864 20.078 11.1125 20.1249 11.6348 19.7127C12.1019 19.3437 12.1137 18.6245 11.6817 18.2239L3.97567 11.0526L34.8001 11.0526C35.463 11.0526 36 10.5812 36 10.0001C36 9.41851 35.4626 8.9475 34.8001 8.9475L3.97567 8.9475L11.6817 1.7762C12.1136 1.37566 12.0831 0.67402 11.6348 0.287828C11.1619 -0.120057 10.3792 -0.0837119 9.93811 0.328947L0.338169 9.2764C0.0560794 9.51908 0.00459628 9.75294 -4.37115e-07 10L-4.37102e-07 9.99972Z"
            fill="#F0F0F0"
          />
        </svg>
        <h3> <span>
            Cupones de
        </span>
        <span>
            {{ discount.name }}
        </span>    
        <span>
            {{ discount.last_name!=""?" "+discount.last_name:"" }}
        </span>
        </h3>
        <svg
          @click="closeModal"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.3474 9.99739L0.347368 1.99527C-0.115791 1.53199 -0.115791 0.794876 0.347368 0.352728C0.789551 -0.110552 1.52628 -0.110552 1.98948 0.331723L9.98951 8.33384L17.9895 0.331723C18.4527 -0.110574 19.1895 -0.110574 19.6526 0.331723C20.0948 0.795004 20.0948 1.53197 19.6526 1.99525L11.6526 9.99737L19.6526 17.9995C20.1158 18.4628 20.1158 19.1999 19.6526 19.642C19.421 19.8947 19.1263 20 18.8316 20C18.5368 20 18.2421 19.8947 18.0105 19.663L10.0105 11.6609L2.01046 19.663C1.77887 19.8947 1.48414 20 1.1894 20C0.894672 20 0.599926 19.8947 0.368345 19.663C-0.0948143 19.1998 -0.0948143 18.4626 0.368345 18.0205L8.3474 9.99739Z"
            fill="#F0F0F0"
          />
        </svg>
      </div>
      <div
        class="row py-5"
        style="width: 100%; margin: 0 auto; max-height: 100vh; overflow-y: auto"
      >
        <div
          class="col col-12 d-flex flex-column align-self-end px-5"
        >
          <v-data-table-server
            v-model:items-per-page="paginationOptions.perPage"
            :headers="getFields(discount.selectedDiscount)"
            :items-length="totalRecords"
            :items="data"
            :loading="loading"
            item-value="name"
            @update:options="
              getData({
                page: paginationOptions.currentPage,
                itemsPerPage: paginationOptions.perPage,
              })
            "
          >
          <template v-slot:item.status="{ item }">
        <span
          :style="
            item.status == 0
              ? 'color: #B7CD00; font-weight: 600'
              : 'color: #D04036; font-weight: 600'
          "
          >{{ item.status == 0 ? "Activado" : "Desactivado" }}</span
        >
      </template>
          </v-data-table-server>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import AdminDiscountsService from "/services/admin/payments/discount.service";
import { usePreloader, useSwall } from "/composables/main-composables.js";

let currentWindowWidth = ref(null);
onMounted(() => {
  currentWindowWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    currentWindowWidth.value = window.innerWidth;
  });
});
const closeModal = () => {
  emit("closeModal");
};
const props = defineProps({
  discount: Object,
});
const emit = defineEmits(["closeModal"]);
const paginationOptions = ref({
  perPage: 10,
  currentPage: 1,
  from: 1,
  to: 10,
  lastPage: 1,
  rowsPerPageOptions: [5,10, 20, 50],
});
const loading = ref(true);
const data = ref([]);
const totalRecords = ref(0);
const getFields = (discount) => {
  switch (discount) {
    case 1:
      return [
        {
          key: "discount_code_id",
          title: "CUPON ID",
        },
        {
          key: "coupon_uses_count",
          title: "Número de Usos",
        },
        {
          key: "status",
          title: "Estado",
        },
        // {
        //     key: "discount",
        //     title: "Descuento",
        // },
        {
          key: "actions",
          title: "Acciones",
        },
      ];
    case 2:
      return [
        {
          key: "discount_code_id",
          title: "CUPON ID",
        },
        
        {
          key: "last_code",
          title: "Codigo",
        },
        {
          key: "coupon_uses_count",
          title: "Número de Usos",
        },
        {
          key: "discount_code_created_at",
          title: "Creacion de Cupon",
        },
        {
          key: "discount_code_updated_at",
          title: "Actualizacion de Cupon",
        },
        {
          key: "status",
          title: "Estado",
        },
      ];
    case 3:
      return [
        {
          key: "discount_code_id",
          title: "CUPON ID",
        },
        {
          key: "id",
          title: "EMBAJADOR ID",
        },
        {
          key: "name",
          title: "Nombre",
        },
        {
          key: "last_name",
          title: "Apellido",
        },
        {
          key: "last_code",
          title: "Codigo",
        },
        {
          key: "coupon_uses_count",
          title: "Número de Usos",
        },
        {
          key: "status",
          title: "Estado",
        },
        {
          key: "discount_code_created_at",
          title: "Creacion de Cupon",
        },
        {
          key: "discount_code_updated_at",
          title: "Actualizacion de Cupon",
        },
      ];
    case 4:
      return [
        {
          key: "discount_code_id",
          title: "CUPON ID",
        },
        {
          key: "id",
          title: "Institución ID",
        },
        {
          key: "name",
          title: "Nombre",
        },

        {
          key: "last_code",
          title: "Codigo",
        },
        {
          key: "coupon_uses_count",
          title: "Número de Usos",
        },
        {
          key: "discount_code_created_at",
          title: "Creacion de Cupon",
        },
        {
          key: "discount_code_updated_at",
          title: "Actualizacion de Cupon",
        },
        {
          key: "status",
          title: "Estado",
        },
      ];
    
  }
};
const getData = async ({ page, itemsPerPage }) => {

  try {
    console.log(props.discount)
    const params = {
      page: page ? page : paginationOptions.value.currentPage,
      per_page: itemsPerPage ? itemsPerPage : paginationOptions.value.perPage,
      selectedDiscount: props.discount.selectedDiscount,
      originId: props.discount.id,
    };
    loading.value = true;
    const response = await AdminDiscountsService.getTracking(params);
    if (response.status === 200) {
      loading.value = false;
      data.value = response.data.data.data;
      paginationOptions.value = {
        perPage: response.data.data.per_page,
        currentPage: response.data.data.current_page,
        from: response.data.data.from,
        to: response.data.data.to,
        lastPage: response.data.data.last_page,
      };
      totalRecords.value = response.data.data.total;
    }
  } catch (error) {
    console.error(error);
  }
};
</script>
<style lang="scss" scoped>
.modal-customized {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-customized-body {
  width: 80%;
  min-height: 40vh;
  
  background-color: #1c1c24;
}
@media (max-width: 1200px) {
  .modal-customized-body {
    width: 80%;
  }
}
@media (max-width: 768px) {
  .modal-customized-body {
    width: 90%;
  }
}
</style>