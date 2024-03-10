<template>
  <section style="width: auto;overflow-x: auto;">
   <div class="w-100 d-flex flex-row">
    <v-text-field
      v-model="search"
      label="Search"
      single-line
      variant="outlined"
      hide-details
      style="color: black; background-color: black;width: 300px;"
    >
      <template #prepend-inner>
        <Icon
          name="material-symbols:search"
          size="30"
          color="white"
          @click="
            getData({
              page: paginationOptions.currentPage,
              itemsPerPage: paginationOptions.perPage,
              sortBy: 'id',
              search: {
                keys: ['last_name', 'name', 'email', 'phone_number'],
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
        @click="downloadUserReport"
      >
        <Icon name="icon-park-outline:excel" size="30"></Icon>
      </div>
   </div>
    <v-data-table-server
      class="table"
      v-model:items-per-page="paginationOptions.perPage"
      :headers="fields"
      :items-length="totalRecords"
      :items="data"
      :loading="loading"
      item-value="name"
      @update:options="
        getData(paginationOptions.currentPage, paginationOptions.perPage)
      "
      style="max-height: 70vh;"
    >
      <template v-slot:item.is_valid_student="{ item }">
        <div class="d-flex flex-row align-items-center">
          <Icon
            :name="getStudentValidity(item.is_valid_student,item.carnet_img).icon"
            :color="getStudentValidity(item.is_valid_student,item.carnet_img).color"
            size="30"
          />
          <span>{{ getStudentValidity(item.is_valid_student,item.carnet_img).label }}</span>
        </div>
      </template>
      <template v-slot:item.carnet_img="{ item }">
        <span @click="openFile(item)">{{ item.carnet_img!=null && item.carnet_img!=""?"Ver Carnet":"No es Estudiante" }}</span>
      </template>
      <template v-slot:item.phone_number="{ item }">
        <div class="d-flex flex-row gap-1">
          <span>({{ item.prefix }})</span>
          <span>{{ item.phone_number ? item.phone_number : "No tiene" }}</span>
        </div>
      </template>
    </v-data-table-server>
    <!-- {{ data }} -->
    <commons-image-viewer
      @closeModal="showImgViewer = false"
      v-if="showImgViewer == true"
      :img-src="imgSrc"
      :user="user"
    >
      <template #options>
        <div
          class="input-container"
          v-if="user.carnet_img && !user.is_valid_student"
        >
          <span for="name" style="color: white">Es un estudiante valido?</span>
          <select
            id="reference"
            class="input-customized"
            v-model="selectedValidity"
          >
            <option
              v-for="(option, index) in validityStudentOptions"
              :key="index"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
        <button
          class="btn-blue"
          @click="saveValidity"
          v-if="user.carnet_img && !user.is_valid_student"
        >
          <span>Guardar</span>
        </button>
      </template>
    </commons-image-viewer>
  </section>
</template>
<script setup>
import AdminHomeService from "@/services/admin/home.service";
import { authStore } from "@/store/auth/auth.store";
import { ref } from "vue";
import { usePreloader, useSwall } from "/composables/main-composables";
const { showSuccessSwall, showErrorSwall } = useSwall();
const { showPreloader, hidePreloader } = usePreloader();
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
const storeAuth = authStore();
const userData = computed(() => storeAuth.getUserData);
const search = ref("");
const getData = async ({ page, itemsPerPage, sortBy, search }) => {
  try {
    const params = {
      page: page ? page : paginationOptions.value.currentPage,
      per_page: itemsPerPage ? itemsPerPage : paginationOptions.value.perPage,
      sort_by: sortBy ? sortBy : "id",
      sort_direction: "desc",
      search: search ? search : "",
    };
    loading.value = true;
    const response = await AdminHomeService.getAllUsers(params);

    if (response.status === 200) {
      loading.value = false;
      data.value = response.data.data;
      paginationOptions.value = {
        perPage: response.data.per_page,
        currentPage: response.data.current_page,
        from: response.data.from,
        to: response.data.to,
        lastPage: response.data.last_page,
      };
      totalRecords.value = response.data.total;
    }
  } catch (error) {
    console.error(error);
  }
};
const showImgViewer = ref(false);
const imgSrc = ref("");
const user = ref({});
const openFile = (item) => {
  if(item.carnet_img==null || item.carnet_img==""){
    showImgViewer.value = false;
    return;
  }
  showImgViewer.value = true;
  imgSrc.value = item.carnet_img;
  user.value = item;
};
const getStudentValidity = (validity,carnet="") => {
  console.log(carnet=="",validity,(validity==0 || !validity) && (carnet=="" || carnet==null),carnet)
  if (validity === 1) {
    return {
      label: "Si",
      color: "green",
      icon: "material-symbols:check",
    };
  }
  if((validity===0 || validity===null) && (carnet=="" || carnet===null)){
    return {
      label: "No es estudiante",
      color: "red",
      icon: "material-symbols:close",
    };
  }	
   if ((validity === 0 ||validity==null) && (carnet=="" || carnet==null)) {
    return {
      label: "No",
      color: "red",
      icon: "material-symbols:close",
    };

  }
  else {
    return {
      label: "Falta Validar",
      color: "yellow",
      icon: "ic:round-warning",
    };
  }
};
const saveValidity = async () => {
  try {
    const params = {
      id: user.value.id,
      is_valid_student: selectedValidity.value,
    };
    showPreloader();
    const response = await AdminHomeService.updateStudentValidity(params);
    if (response.status === 200) {
      showSuccessSwall("","Se ha actualizado la validez del estudiante");
      showImgViewer.value = false;
      user.value = {};
      imgSrc.value = "";
      await getData(
        paginationOptions.value.currentPage,
        paginationOptions.value.perPage
      );
    }
  } catch (error) {
    hidePreloader();  
    showErrorSwall("Ha ocurrido un error");
    console.error(error);
  }
};

const validityStudentOptions = [
  {
    value: 1,
    label: "Validar Alumno",
  },
  {
    value: 0,
    label: "Invalidar Alumno",
  },
];
const selectedValidity = ref(1);
const moreOptions = ref([{}]);
const fields = ref([
  {
    key: "id",
    title: "No.",
    class: "custom-header",
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
    key: "phone_number",
    title: "Celular",
  },
  {
    key: "email",
    title: "Correo",
  },
  {
    key: "gender",
    title: "Sexo",
  },
  {
    key: "age",
    title: "Fecha de Nacimiento",
  },

  {
    key: "country_name",
    title: "País",
  },
  {
    key: "ocupation_name",
    title: "Ocupación",
  },
  {
    key: "speciality_name",
    title: "Especialidad",
  },
  {
    key: "reference_name",
    title: "Referido por",
  },
  {
    key: "carnet_img",
    title: "Alumno de Pregrado Carnet",
  },
  {
    key: "is_valid_student",
    title: "Alumno de Pregrado",
  },
  {
    key: "actions",
    label: "Acciones",
  },
]);
const downloadUserReport = async () => {
  try {
    const response = await AdminHomeService.downloadUserReport();
    hidePreloader();
    if (response.status === 200) {
      const s3Url = response.data.data;
      window.open(s3Url);
    } else {
      console.error(`Error en la respuesta: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
};
</script>
<style lang="scss" scoped>
span,
p {
  font-family: "Axiforma";
}
.input-customized {
  border: 1px solid #515166;
  background: transparent;
  width: 100%;
  border-radius: 2em;
  padding: 0.8em 1em;
  resize: none;
  color: white;
  option {
    background: #1c1c24;
    color: white;
  }
}
.input-container {
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
  font-family: Axiforma;
  width: 100%;
}

</style>