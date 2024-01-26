<template>
  <div class="e-table">
    <div class="table-title d-flex justify-content-between " style="width: 95%;">
      <span style="font-size: 1.3em"><slot name="title">Table</slot></span>
      <slot name="title-options"  style="width: 100%;"></slot>
    </div>
    <div class="table-container" style="max-width: 95%;overflow-x: hidden;">
      <div
        class="table-filter"
        v-if="Object.keys(filterPrincipal).length !== 0"
      >
        <div class="table-search-input">
          <input
            type="text"
            v-model="filterPrincipal.value"
            :placeholder="filterPrincipal.placeHolder"
          />
          <Icon
            name="iconamoon:search-bold"
            size="20"
            @click="searchText(filterPrincipal)"
          />
        </div>
      </div>
      <div class="d-flex flex-row align-items-center gap-2 py-2">
        <Icon
          @click="previusPage"
          class="arrow-button"
          name="fluent:arrow-left-16-filled"
        />
        <ul class="pagination-selector" id="page-selector">
          <li
            v-for="(item, index) in getPaginationOptions.lastPage"
            :key="`page-${index + 1}`"
            :class="getPaginationOptions.currentPage === item ? 'active' : ''"
            class="page"
            id
            @click="changePage(item)"
          >
            {{ item }}
          </li>
        </ul>
        <Icon
          @click="nextPage"
          class="arrow-button"
          name="fluent:arrow-right-16-filled"
        />
        <select
          v-model="selectedPerPage"
          class="form-select per-page-select"
          aria-label="Default select example"
        >
          <option
            v-for="option in perPageOptions"
            :key="option"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
      <slot name="table-options"></slot>
      <div
        class=""
        :style="getColumnStyle(fields)"
        style="
          position: relative;
          max-height: 500px;
          overflow-y: auto;
          max-width: auto;
          overflow-x: auto;
        "
      >
        <div v-for="field in fields" :key="field.key" class="table-headers">
          <slot :name="`header-${field.key}`" v-bind="header">
            <span style="text-align: start">{{ field.label }}</span>
          </slot>
        </div>
        <div
          v-if="isLoading"
          class="d-flex align-items-center justify-content-center w-100"
          style="position: absolute; top: 100px; height: 200px"
        >
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div v-for="field in fields" :key="field.key" class="table-item" v-else>
          <div
            v-for="dataItem in data"
            :key="dataItem.id"
            style="height: 60px"
            class="d-flex align-items-center"
          >
            <slot :name="`row-${field.key}`" v-bind="dataItem">
              <span style="">{{ dataItem[field.key] }}</span>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  fields: {
    type: Array,
    required: false,
    default: () => [],
  },
  filterPrincipal: {
    type: Object,
    default: () => ({}),
  },
  paginationOptions: {
    type: Object,
    default: () => ({
      perPage: 10,
      currentPage: 1,
      from: 1,
      to: 10,
      lastPage: 1,
    }),
  },
});
const isLoading = ref(true);
const emit = defineEmits(["changePage"]);
const data = computed(() => props.data);
const paginationOpt = ref(props.paginationOptions);
const filterPrincipal = ref(props.filterPrincipal);
const selectedPerPage = ref(10);
watch(selectedPerPage, (value) => {
  paginationOpt.value.perPage = value;
  isLoading.value = true;
  emit("changePage", 1);
});

const perPageOptions = ref([10, 25, 50, 100]);
const header = {
  // id: {
  //   label: "ID",
  //   sortable: true,
  // },
  // name: {
  //   label: "Name",
  //   sortable: true,
  // },
  // lastname: {
  //   label: "Lastname",
  //   sortable: true,
  // },
  // email: {
  //   label: "Email",
  //   sortable: true,
  // },
};
const setPaginationOptions = (options) => {
  paginationOpt.value = options;
  isLoading.value = false;
};
const getPaginationOptions = computed(() => paginationOpt.value);
const changePage = (page) => {
  const pageSelector = document.getElementById("page-selector");

  // if(paginationOpt.value.currentPage>5 && paginationOpt.value.currentPage<paginationOpt.value.lastPage){
  //   pageSelector.scrollLeft -= 50;
  // }
  console.log(page, paginationOpt.value.lastPage, "test");
  if (page >= 7 && page < paginationOpt.value.lastPage) {
    pageSelector.scrollLeft += 50;
  }
  if (page < 7) {
    pageSelector.scrollLeft -= 50;
  }
  isLoading.value = true;
  emit("changePage", page);
};
const nextPage = () => {
  const pageSelector = document.getElementById("page-selector");
  if (
    paginationOpt.value.currentPage > 5 &&
    paginationOpt.value.currentPage < paginationOpt.value.lastPage
  ) {
    pageSelector.scrollLeft += 50;
  }
  if (paginationOpt.value.currentPage < paginationOpt.value.lastPage) {
    isLoading.value = true;
    changePage(paginationOpt.value.currentPage + 1);
  }
};
const previusPage = () => {
  const pageSelector = document.getElementById("page-selector");
  if (
    paginationOpt.value.currentPage5 &&
    paginationOpt.value.currentPage < paginationOpt.value.lastPage
  ) {
    pageSelector.scrollLeft -= 50;
  }
  if (paginationOpt.value.currentPage > 1) {
    isLoading.value = true;
    changePage(paginationOpt.value.currentPage - 1);
  }
};
const searchText = (filter) => {
  isLoading.value = true;
  emit("changePage", 1, {
    text: filter.value,
    key: filter.key,
  });
};
const getColumnStyle = (fields) => {
  const columns = fields.length > 0 ? fields.length : 1;
  return "display:grid;grid-template-columns:repeat(" + columns + ",1fr);";
};
defineExpose({
  getPaginationOptions,
  setPaginationOptions,
});
</script>
<style scoped lang="scss">
.table-search-input {
  display: flex;
  margin: 0.5em 0;
  background: #1c1c24;
  border: 1px solid #515166;
  border-radius: 1em;
  width: 25em;
  justify-content: space-between;
  padding: 0.8em 1em;
  align-items: center;
  input {
    background: transparent;
    border: none;
    width: 90%;
    color: white;
  }
}
span {
  font-family: Axiforma, sans-serif;
  font-weight: 300;
  font-size: 1em;
  color: white;
}
.e-table {
  margin-left: 1em;
  width: 90%;
}
.table-title {
  background-color: #0393aa;
  padding: 1em 2em;
  font-weight: bold;
  border-top-left-radius: 1em;
  border-top-right-radius: 2em;
  span {
    font-family: Axiforma, sans-serif;
    font-weight: 300;
    font-size: 1.3em; /* Ajusta el tamaño del título */
    color: white;
  }
}
.table-headers {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #515166;
  column-gap: 1em;
  min-width: 250px;
  width: 100%;

  .table-header {
    width: auto;
    min-width: 120px;
    text-align: center;
  }
}

// .table-body {
//   max-height: 80vh;
//   overflow-y: auto;
//   .table-row {
//     display: flex;
//     flex-direction: row;
//     padding: 1em 0;
//     column-gap: 1em;

//   }
// }
.table-item {
  width: 100%;
  text-align: center;
}
.pagination-selector {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  column-gap: 0.5em;
  padding: 0;
  margin: 0;
  max-width: 250px;
  overflow-x: hidden;
  .page {
    width: auto;
    padding: 0.2em 0.6em;
    border-radius: 0.5em;
    background: #515166;
    color: white;
    cursor: pointer;
    &:hover {
      background: #0393aa;
    }
    &.active {
      background: #0393aa;
    }
  }
}
.arrow-button {
  padding: 0.5em 0.4em;
  border-radius: 0.5em;
  height: 100%;
  width: auto;
  background: #515166;
  color: white;
  cursor: pointer;
  &:hover {
    background: #0393aa;
  }
}
.per-page-select {
  width: 60px;
  background: #515166;
  color: white;
  border: none;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  &:hover {
    background: #0393aa;
  }
}
</style>