<template>
  <section class="w-100">
    <select class="input-customized" v-model="selectedDiscount">
      <option
        v-for="(option, index) in discountSelectOptions"
        :key="index"
        :value="option"
      >
        {{ option.label }}
      </option>
    </select>
    <div
      class="d-flex justify-content-between my-2 px-3 align-items-center"
      @click="openCreateEditRow"
    >
      <span style="font-size: 1.5em"
        >Lista de {{ selectedDiscount.label }}</span
      >
      <span
        style="color: #0393aa; font-weight: 600"
        v-if="selectedDiscount.value !== 1"
        >+ Agregar nuevos(as) {{ selectedDiscount.label }}</span
      >
    </div>
    <v-data-table-server
      v-model:items-per-page="paginationOptions.perPage"
      :headers="getFields(selectedDiscount)"
      :items-length="totalRecords"
      :items="data"
      :loading="loading"
      item-value="name"
      @update:options="getData"
    >
    <template v-slot:item.status="{item}">
        <span
          :style="
            item.status == 0
              ? 'color: #B7CD00; font-weight: 600'
              : 'color: #D04036; font-weight: 600'
          "
          >{{ item.status == 0 ? "Activado" : "Desactivado" }}</span
        >
      </template>
      <template v-slot:item.actions="{ item }">
        <div style="position: relative" v-if="item.coupon_uses_count>0">
          <Icon
            name="mi:options-vertical"
            size="20"
            @click="selectItem(item)"
          ></Icon>
          <div class="more-options" v-if="selectedItem == item">
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
    <!-- <commons-e-table
      ref="discountTable"
      :fields="getFields(selectedDiscount)"
      :data="data"
      @changePage="(page, text) => getData(page, text)"
    >
      <template #title> Descuentos </template>
      <template #title-options> </template>
      <template #table-options> </template>
      <template v-slot:row-status="item">
        <span
          :style="
            item.status == 0
              ? 'color: #B7CD00; font-weight: 600'
              : 'color: #D04036; font-weight: 600'
          "
          >{{ item.status == 0 ? "Activado" : "Desactivado" }}</span
        >
      </template>
    </commons-e-table> -->
    <lazy-admin-payments-discounts-create-edit-discount
      v-if="isCreateEditModalOpen"
      @closeModal="isCreateEditModalOpen = false"
      :selectedDiscount="selectedDiscount"
      :fields="getModalFields()"
      @createdDiscount="getData(
        paginationOptions.value.currentPage,
        paginationOptions.value.perPage
      )"
    >
      <template #modal-title
        >{{ modalMode == "create" ? "Agregar " : "Editar "
        }}{{ getModalTitle() }}
      </template>
      
    </lazy-admin-payments-discounts-create-edit-discount>
  </section>
</template>
<script setup>
import AdminDiscountsService from "/services/admin/payments/discount.service";
import { usePreloader,useSwall } from '/composables/main-composables.js'
import admin from "@/middleware/admin";
definePageMeta({
    title: "Admin Layout",
    middleware: [
    function (to, from) {
      // Custom inline middleware
    },
    admin
  ],
});
const { showSuccessSwall,showErrorSwall } = useSwall()
const {showPreloader,hidePreloader} = usePreloader()
const discountSelectOptions = ref([
  {
    label: "Evialumnos",
    value: 1,
  },
  {
    label: "Influencers",
    value: 2,
  },
  {
    label: "Embajadores",
    value: 3,
  },
  {
    label: "Instituciones Aliadas",
    value: 4,
  },
]);
const selectedDiscount = ref({
  label: "Evialumnos",
  value: 1,
});


const paginationOptions = ref({
  perPage: 10,
  currentPage: 1,
  from: 1,
  to: 10,
  lastPage: 1,
  rowsPerPageOptions: [10, 20, 50],
});
const loading = ref(true);
const data = ref([]);
const totalRecords = ref(0);
const search = ref("");
const getData = async ({ page, itemsPerPage, sortBy, search }) => {
  isCreateEditModalOpen.value = false;
  try {
    const params = {
      page: page ? page : paginationOptions.value.currentPage,
      per_page: itemsPerPage ? itemsPerPage : paginationOptions.value.perPage,
      sort_by: sortBy ? sortBy : "id",
      sort_direction: "desc",
      search: search ? search : "",
      selectedDiscount: selectedDiscount.value.value,
    };
    loading.value = true;
    const response = await AdminDiscountsService.getAllDiscounts(params);
    console.log(response.data)
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
    console.log(error);
  }
};
const isCreateEditModalOpen = ref(false);
const modalMode = ref("create");
const openCreateEditRow = () => {
  isCreateEditModalOpen.value = true;
};
const getModalTitle = () => {
  switch (selectedDiscount.value.value) {
    case 1:
      return "informacion de evialumno";
    case 2:
      return "Información de influencer";
    case 3:
      return "Información de embajador";
    case 4:
      return "Información de institución aliada";
  }
};
// onMounted(async () => {
//   await getData(
//     paginationOptions.value.currentPage,
//     paginationOptions.value.perPage
//   );
// });
watch(selectedDiscount, async (newValue) => {
  await getData(
    paginationOptions.value.currentPage,
    paginationOptions.value.perPage
  );
});
const getFields = (discount) => {
  switch (discount.value) {
    case 1:
      return [
        {
          key: "id",
          title: "ID",
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
          key: "email",
          title: "Correo",
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
          key: "id",
          title: "ID",
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
          key: "email",
          title: "Correo",
        },
        {
          key: "last_code",
          title: "Codigo Vigente",
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
          key: "actions",
          title: "Acciones",
        },
      ];
    case 3:
      return [
        {
          key: "id",
          title: "ID",
        },
        {
          key: "name",
          title: "Nombre",
        },
        {
          key:'last_name',
          title:'Apellido'
        },
        {
          key: "last_code",
          title: "Codigo Vigente",
        },
        {
          key: "coupon_uses_count",
          title: "Número de Usos",
        },
        {
          key:'status',
          title:'Estado'
        },
        {
          key: "actions",
          title: "Acciones",
        },
      ];
    case 4:
      return [
        {
          key: "id",
          title: "ID",
        },
        {
          key: "name",
          title: "Nombre",
        },

        {
          key: "last_code",
          title: "Codigo Vigente",
        },
        {
          key: "coupon_uses_count",
          title: "Número de Usos",
        },
        {
          key:'status',
          title:'Estado'
        },
      ];
  }
};
const getModalFields = () => {
  switch (selectedDiscount.value.value) {
    case 2:
      return [
        {
          label: "Nombres",
          type: "text",
          name: "name",
        },
        {
          label: "Apellidos",
          type: "text",
          name: "lastName",
        },
        {
          label: "Fecha de Ingreso",
          type: "date",
          name: "creationDate",
        },
        {
          label: "Correo Electronico",
          type: "text",
          name: "email",
        },
        {
          label: "Codigo Vigente",
          type: "text",
          name: "last_code",
        },
      ];
    case 3:
      return  [
        {
          label: "Nombre de Embajador",
          type: "text",
          name: "name",
        },
        {
          label: "Apellido del Embajador",
          type: "text",
          name: "lastName",
        },
        {
          label: "Fecha de Ingreso",
          type: "date",
          name: "creationDate",
        },
        // {
        //   label: "Correo Electronico",
        //   type: "text",
        //   name: "email",
        // },
        {
          label: "Codigo Vigente",
          type: "text",
          name: "last_code",
        },
      ];
      case 4:
        return [
          {
            label: "Nombre de la Institución",
            type: "text",
            name: "name",
          },
          {
          label: "Fecha de Ingreso",
          type: "date",
          name: "creationDate",
        },
        {
          label: "Codigo Vigente",
          type: "text",
          name: "last_code",
        },
        ]
  }
};
const downloadDiscountReport=async(item)=>{
  try {
    showPreloader()
    const params = {
      selectedDiscount: selectedDiscount.value.value,
      id: item.discount_code_id ,
    };
    const response = await AdminDiscountsService.downloadDiscountReport(params);
    if (response.status === 200) {
      hidePreloader()
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `Reporte de Usos de ${selectedDiscount.value.label}.xlsx`
      );
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
  } catch (error) {
    hidePreloader()
    console.log(error);
  }
}
const actions=[
  {
    name:'Generar Reporte de Usos',
    onClick:downloadDiscountReport
  },

]
const selectedItem = ref({});
const selectItem = (item) => {
  selectedItem.value = item;
};

</script>
<style lang="scss" scoped>
.input-customized {
  border: 1px solid white;
  background: transparent;
  color: white;
  font-family: Axiforma, sans-serif;
  border-radius: 1em;
  padding: 1em;
  option {
    background: #1c1c24;
  }
}
span {
  font-family: Axiforma, sans-serif;
}.more-options {
  position: absolute;
  top: 1em;
  z-index: 100;
  background: white;
  width: auto;
}
</style>