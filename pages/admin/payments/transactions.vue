<template>
  <section class="w-100" style="max-width: 100%; overflow-x: auto">
    <div
      class="d-flex flex-row align-items-center justify-content-between gap-2"
    >
      <v-text-field
        v-model="search"
        label="Search"
        single-line
        variant="outlined"
        hide-details
        style="color: black; background-color: white"
      >
        <template #prepend-inner>
          <Icon
            name="material-symbols:search"
            size="30"
            color="black"
            @click="
              getData({
                page: paginationOptions.currentPage,
                itemsPerPage: paginationOptions.perPage,
                sortBy: 'ut.id',
                search: {
                  keys: [
                    'u.last_name',
                    'u.name',
                    'u.email',
                    'u.phone_number',
                    'ut.transaction_id',
                    'td.code',
                  ],
                  value: search,
                },
              })
            "
            style="cursor: pointer"
          />
        </template>
      </v-text-field>

      <div
        style="cursor: pointer; width: auto; border-radius: 0.5em"
        class="btn-blue"
        @click="openFilters()"
      >
        <Icon name="icon-park-outline:excel" size="30"></Icon>
      </div>
    </div>
    <v-data-table-server
      id="scrollable-table"
      v-model:items-per-page="paginationOptions.perPage"
      :headers="fields"
      :items-length="totalRecords"
      :items="data"
      :loading="loading"
      item-value="name"
      @update:options="
        getData(paginationOptions.currentPage, paginationOptions.perPage)
      "
      style="max-height: 70vh"
    >
      <template v-slot:item.code="{ item }">
        <div
          v-if="editedItem == item"
          class="d-flex flex-row gap-1 align-items-center"
        >
          <input
            type="text"
            v-model="editedItem.code"
            placeholder="Editar codigo de curso"
          />
          <Icon
            name="mdi:check-bold"
            size="20"
            color="green"
            @click="saveCourseCode(item)"
          />
          <Icon
            name="icon-park-solid:error"
            size="18"
            color="red"
            @click="closeEditCourseCode"
          />
        </div>

        <span v-else>{{ item.code }}</span>
      </template>
      <template v-slot:item.price_with_discount="{ item }">
        <span>S/.{{ item.price_with_discount }}</span>
      </template>
      <template v-slot:item.price_without_discount="{ item }">
        <span>S/.{{ item.price_without_discount }}</span>
      </template>
      <template v-slot:item.actions="{ item }">
        <div style="position: relative">
          <Icon
            name="mi:options-vertical"
            size="20"
            @click="selectItem(item)"
          ></Icon>
          <div
            class="more-options"
            v-if="selectedItem == item"
            style="background: #13131a; color: white"
          >
            <span
              v-for="(action, index) in actions"
              :key="index"
              @click="action.onClick(item)"
              style="cursor: pointer"
              >{{ action.name }}</span
            >
          </div>
        </div>
      </template>
    </v-data-table-server>
    <admin-payments-modals-payment-filters-modal
    v-if="showReportFilterOptions"
    @close-modal="showReportFilterOptions=false"
    @download-excel="(params)=>downloadExcel(params)"
    >
  </admin-payments-modals-payment-filters-modal>
  </section>
</template>
<script setup>
import AdminPaymentsService from "/services/admin/payments/transaction.service";
import { useSwall, usePreloader } from "/composables/main-composables";
import admin from "@/middleware/admin";

definePageMeta({
  title: "Admin Layout",
  middleware: [
    function (to, from) {
      // Custom inline middleware
    },
    admin,
  ],
});
const { showSuccessSwall, showErrorSwall } = useSwall();
const { showPreloader, hidePreloader } = usePreloader();
const paginationOptions = ref({
  perPage: 10,
  currentPage: 1,
  from: 1,
  to: 10,
  lastPage: 1,
  rowsPerPageOptions: [10, 20, 50],
});
const loading = ref(true);
const selectedItem = ref({});
const editedItem = ref({});

const saveCourseCode = async (item) => {
  const params = {
    id: item.transactions_details_id,
    code: editedItem.value.code.toUpperCase(),
  };
  try {
    showPreloader();
    const response = await AdminPaymentsService.updateTransactionCourseCode(
      params
    );
    if (response.status === 200) {
      hidePreloader();
      editedItem.value = {};
      getData({
        page: paginationOptions.value.currentPage,
        itemsPerPage: paginationOptions.value.perPage,
        sortBy: "ut.id",
        search: {
          keys: [
            "u.last_name",
            "u.name",
            "u.email",
            "u.phone_number",
            "ut.transaction_id",
            "td.code",
          ],
          value: search.value,
        },
      });
    }
  } catch (error) {
    console.error(error);
    hidePreloader();
  }
};
const selectItem = (item) => {
  if (selectedItem.value === item) {
    selectedItem.value = {};
  } else {
    selectedItem.value = item;
  }
};
const editCourseCode = (item) => {
  editedItem.value = item;
  selectedItem.value = null;
  const scrollableTable = document.getElementById("scrollable-table");
  const table = scrollableTable.getElementsByClassName("v-table__wrapper");
  table[0].scrollLeft = 0;
};
const closeEditCourseCode = () => {
  editedItem.value = {};
};
const actions = [
  {
    name: "Editar Codigo",
    onClick: editCourseCode,
  },
];
const fields = [
  {
    key: "id",
    title: "ID",
  },
  {
    key: "code",
    title: "Código",
  },
  {
    key: "name",
    title: "Nombres",
  },
  {
    key: "last_name",
    title: "Apellidos",
  },
  {
    key: "phone",
    title: "Teléfono",
  },
  {
    key: "email",
    title: "Correo",
  },
  {
    key: "pid_type",
    title: "Tipo de documento",
  },
  {
    key: "pid",
    title: "Documento",
  },
  {
    key: "payment_method",
    title: "Método de pago",
  },
  {
    key: "price_with_discount",
    title: "Monto con descuento",
  },
  {
    key: "price_without_discount",
    title: "Monto sin descuento",
  },

  {
    key: "created_at",
    title: "Fecha de compra",
  },
  {
    key: "transaction_id",
    title: "ID de transacción",
  },
  {
    key: "start_date",
    title: "Fecha de inicio",
  },
  {
    key: "end_date",
    title: "Fecha de fin",
  },
  {
    key: "type",
    title: "Tipo de transaccion",
  },
  {
    key: "course_title",
    title: "Curso Comprado",
  },
  {
    key: "actions",
    title: "Acciones",
  },
];
const data = ref([]);
const totalRecords = ref(0);
const search = ref("");

// onMounted(async () => {
//   await getData(
//     paginationOptions.value.currentPage,
//     paginationOptions.value.perPage
//   );
// });

const getData = async ({ page, itemsPerPage, sortBy, search }) => {
  try {
    const params = {
      page: page ? page : paginationOptions.value.currentPage,
      per_page: itemsPerPage ? itemsPerPage : paginationOptions.value.perPage,
      sort_by: sortBy ? sortBy : "ut.id",
      sort_direction: "desc",
      search: search ? search : "",
    };
    loading.value = true;
    const response = await AdminPaymentsService.getAllTransactions(params);
    if (response.status === 200) {
      const res = response.data.data;
      data.value = res.data;
      loading.value = false;
      totalRecords.value = res.total;
      paginationOptions.value = {
        perPage: res.per_page,
        currentPage: res.current_page,
        from: res.from,
        to: res.to,
        lastPage: res.last_page,
      };
    }
    loading.value = false;
  } catch (error) {
    console.error(error);
  }
};
const showReportFilterOptions=ref(false)
const openFilters = () => {
  showReportFilterOptions.value=true;
};
const downloadExcel = async (filters) => {
 
  try {
    showPreloader()
    const params = {
      year:filters.year,
      month:filters.month,
      day:filters.day 
    };
    const response = await AdminPaymentsService.downloadExcel(params);
    if (response.status === 200) {
      showSuccessSwall()
      const s3Url = response.data.data;
      window.open(s3Url);
      hidePreloader()
    } else {
      console.error(`Error en la respuesta: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    hidePreloader()
  }
};
</script>
<style lang="scss" scoped>
.more-options {
  position: absolute;
  top: 1em;
  z-index: 100;
  background: white;
  width: auto;
}
</style>
