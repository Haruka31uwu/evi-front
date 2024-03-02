<template>
  <section class="w-100"  style="max-width: 100vw;
    overflow: auto;">
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
      
      @update:options="
        getData({
          page: paginationOptions.currentPage,
          itemsPerPage: paginationOptions.perPage,
          sortBy: 'id',
          search: search,
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
      <template v-slot:item.actions="{ item }">
        <div style="position: relative">
          <Icon
            name="mi:options-vertical"
            size="20"
            @click="selectItem(item)"
          ></Icon>
          <div class="more-options" v-if="selectedItem == item">
            <span
              v-for="(action, index) in actions.filter((action) => {
                if (action.key == 'report' && item.coupon_uses_count == 0) {
                  return false;
                }
            
                return true;
              })"
              :key="index"
              @click="action.onClick(item)"
              style="cursor: pointer">
              <span v-if="action.key=='expire'">
              {{ item.status == 0 ? "Expirar Codigo" : "Activar Codigo" }}
              </span>
              <span v-else>{{ action.name }}</span>
            </span>
            
          </div>
        </div>
      </template>
      <template v-slot:item.tracking="{ item }">
        <Icon
          name="material-symbols:list-rounded"
          size="25"
          @click="openTracking(item)"
          color="white"/>
        </template>
    </v-data-table-server>
    <lazy-admin-payments-discounts-create-edit-discount
      v-if="isCreateEditModalOpen"
      @closeModal="
        () => {
          isCreateEditModalOpen = false;
          selectedItem = null;
        }
      "
      :selectedDiscount="selectedDiscount"
      :fields="getModalFields()"
      :data="selectedItem"
      @createdDiscount="
        getData({
          page: paginationOptions.currentPage,
          itemsPerPage: paginationOptions.perPage,
        })
      "
    >
      <template #modal-title
        >{{ modalMode == "create" ? "Agregar " : "Actualizar "
        }}{{ getModalTitle() }}
      </template>
    </lazy-admin-payments-discounts-create-edit-discount>
  <admin-payments-discounts-discount-tracking
  v-if="selectedTrackingDiscount"
  :discount="selectedTrackingDiscount"
  @closeModal="closeTracking()"
  >
  </admin-payments-discounts-discount-tracking>
  </section>
</template>
<script setup>
import AdminDiscountsService from "/services/admin/payments/discount.service";
import { usePreloader, useSwall } from "/composables/main-composables.js";
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
  {
    label:"Cupones de un uso",
    value:5,
  }
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
const selectedTrackingDiscount = ref(null);
const getData = async ({ page, itemsPerPage, sortBy, search }) => {
  isCreateEditModalOpen.value = false;
  selectedItem.value = null;
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
const openTracking=async(item)=>{
  selectedTrackingDiscount.value={
    id:item.id,
    selectedDiscount:selectedDiscount.value.value,
    name:item.name,
    last_name:item.last_name,
  }
 
}
const closeTracking=()=>{
  selectedTrackingDiscount.value=null;
}
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
  await getData({
    page: paginationOptions.value.currentPage,
    itemsPerPage: paginationOptions.value.perPage,
  });
});
const getFields = (discount) => {
  switch (discount.value) {
    case 1:
      return [
        {
          key: "discount_code_id",
          title: "CUPON ID",
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
          key:"id",
          title:"INFLUENCER ID",
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
          key: "last_code",
          title: "Codigo Vigente",
        },
        {
          key: "coupon_uses_count",
          title: "Número de Usos",
        },
        {
          key:"affiliation_date",
          title:"Fecha de Afiliación",
        },
        {
          key:"discount_code_created_at",
          title:"Creacion de Cupon",
        },
        {
          key:"discount_code_updated_at",
          title:"Actualizacion de Cupon",
        },
        {
          key: "status",
          title: "Estado",
        },
        {
          key: "tracking",
          title: "Tracking",
        },
        {
          key: "actions",
          title: "Acciones",
        },
        
      ];
    case 3:
      return [
        {
          key: "discount_code_id",
          title: "CUPON ID",
        },
        {
          key:"id",
          title:"EMBAJADOR ID",
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
          key:"affiliation_date",
          title:"Fecha de Afiliación",
        },
        {
          key:"discount_code_created_at",
          title:"Creacion de Cupon",
        },
        {
          key:"discount_code_updated_at",
          title:"Actualizacion de Cupon",
        },
        {
          key: "tracking",
          title: "Tracking",
        },
        {
          key: "actions",
          title: "Acciones",
        },
        
      ];
    case 4:
      return [
        {
          key: "discount_code_id",
          title: "CUPON ID",
        },
        {
          key:"id",
          title:"Institución ID",
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
          key:"affiliation_date",
          title:"Fecha de Afiliación",
        },
        {
          key:"discount_code_created_at",
          title:"Creacion de Cupon",
        },
        {
          key:"discount_code_updated_at",
          title:"Actualizacion de Cupon",
        },
        {
          key: "status",
          title: "Estado",
        },
        {
          key: "tracking",
          title: "Tracking",
        },
        {
          key: "actions",
          title: "Acciones",
        },
       
      ];
      case 5:
      return [
        {
          key: "discount_code_id",
          title: "CUPON ID",
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
          key:"affiliation_date",
          title:"Fecha de Afiliación",
        },
        {
          key:"discount_code_created_at",
          title:"Creacion de Cupon",
        },
        {
          key:"discount_code_updated_at",
          title:"Actualizacion de Cupon",
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
          label: "Codigo Vigente",
          type: "text",
          name: "last_code",
        },
      ];
    case 3:
      return [
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
      ];
    case 5:
      return [
        {
          label: "Razón del Cupon",
          type: "text",
          name: "name",
        },
        {
          label: "Porcentaje de Descuento",
          type: "number",
          name: "cuzPercentage",
        },
        {
          label: "Codigo Vigente",
          type: "text",
          name: "last_code",
        },
    ];
  }
};
const downloadDiscountReport = async (item) => {
  try {
    showPreloader();
    const params = {
      selectedDiscount: selectedDiscount.value.value,
      id: item.discount_code_id,
    };
    const response = await AdminDiscountsService.downloadDiscountReport(params);

    hidePreloader();
    if (response.status === 200) {
      const s3Url = response.data.data;
      window.open(s3Url);
    } else {
      console.error(`Error en la respuesta: ${response.status}`);
    }
  } catch (error) {
    hidePreloader();
    console.error(error);
  }
};
const updateCode = async (item) => {
  try {
    modalMode.value = "edit";
    openCreateEditRow();
    // showPreloader();
    // const params = {
    //   selectedDiscount: selectedDiscount.value.value,
    //   id: item.discount_code_id,
    // };
    // const response = await AdminDiscountsService.updateDiscountCode(params);
    // hidePreloader();
    // if (response.status === 200) {
    //   showSuccessSwall("Se ha actualizado el codigo");
    //   await getData(
    //     paginationOptions.value.currentPage,
    //     paginationOptions.value.perPage
    //   );
    // } else {
    //   showErrorSwall("Ha ocurrido un error");
    //   console.error(`Error en la respuesta: ${response.status}`);
    // }
  } catch (error) {
    hidePreloader();
    showErrorSwall("Ha ocurrido un error");
    console.error(error);
  }
};
const expireCode = async (item) => {
  let response;

  try {
    showPreloader();
    loading.value = true;
    const params = {
      selectedDiscount: selectedDiscount.value.value,
      id: item.discount_code_id,
    };
    if (item.status == 1) {
      response = await AdminDiscountsService.activateDiscountCode(params);
    } else {
      response = await AdminDiscountsService.expireDiscountCode(params);
    }
    hidePreloader();
    if (response.status === 200) {
      console.log(response)
      showSuccessSwall("",response.data.message);
      await getData(
        paginationOptions.value.currentPage,
        paginationOptions.value.perPage
      );
    } else {
      showErrorSwall("Ha ocurrido un error");
      console.error(`Error en la respuesta: ${response.status}`);
    }
  } catch (error) {
    hidePreloader();
    showErrorSwall("Ha ocurrido un error");
    console.error(error);
  }
};
const actions = [
  {
    name: "Generar Reporte de Usos",
    key: "report",
    onClick: downloadDiscountReport,
  },
  {
    name: "Actualizar Codigo",
    key: "actualizar",
    onClick: updateCode,
  },
  {
    name: "Expirar Codigo",
    key: "expire",
    onClick: expireCode,
  },
];
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
}

.more-options {
  position: absolute;
  bottom: 1em;
  z-index: 1000;
  background: #13131a;
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 1em;
  row-gap: 1em;
}
</style>