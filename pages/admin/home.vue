<template>
  <section>
    <commons-e-table
      :data="data"
      :fields="fields"
      :filterPrincipal="filterPrincipal"
    >
      <template #title>
        Información detallada de usuarios registrados
      </template>

      <!-- <template v-slot:header-name="slot">
    uwu</template> -->
      <!-- <template v-slot:row-name="item">
        <span>{{ item.name }}</span>
>
    </template> -->
      <template v-slot:row-student="item">
        <div style="color: white; font-family: 'Axiforma'" class="d-flex flex-column">
          <span>{{ item.academic_grade === "pregrado" ? "Si" : "No" }}</span>
        </div>
      </template>
      <template v-slot:row-student_carnet="item">
        <span style="color:white" @click="openFile(item.carnet_img)">Ver archivo</span>
      </template>
    </commons-e-table>
  </section>
</template>
<script setup>
import AdminHomeService from "@/services/admin/home.service.js";
onMounted(async () => {
  await getData();
});
const filterPrincipal = {
  placeHolder: "Buscar por nombre",
  key: "name",
  value: "",
};
const data = ref([]);
const getData = async () => {
  try {
    const response = await AdminHomeService.getAllUsers();
    if (response.status === 200) {
      console.log(response.data);
      data.value = response.data.data;
    }
  } catch (error) {
    console.error(error);
  }
};
const openFile = (file) => {
  window.open(file, "_blank");
};

const fields = ref([
  {
    key: "id",
    label: "No.",
  },
  {
    key: "name",
    label: "Nombres",
  },
  {
    key: "last_name",
    label: "Apellidos",
  },
  {
    key: "phone_number",
    label: "Celular",
  },
  {
    key: "email",
    label: "Correo",
  },
  {
    key: "gender",
    label: "Sexo",
  },
  {
    key: "country",
    label: "País",
  },
  {
    key: "age",
    label: "Fecha de Nacimiento",
  },
  {
    key: "student",
    label: "Alumno de Pregrado",
  },
  {
    key:"student_carnet",
    label:"Alumno de Pregrado Carnet"
  },
  {
    key: "actions",
    label: "Acciones",
  },
]);
</script>