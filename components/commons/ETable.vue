<template>
  <div class="e-table">
    <div class="table-title">
      <span style="font-size: 1.3em"><slot name="title">Table</slot></span>
    </div>
    <div class="table-filter" v-if="Object.keys(filterPrincipal).length !== 0">
      <div class="table-search-input">
        <input
          type="text"
          v-model="filterPrincipal.value"
          :placeholder="filterPrincipal.placeHolder"
        />
        <Icon name="iconamoon:search-bold" size="20" />
      </div>
    </div>
    <div class="table" :style="getColumnStyle(fields)">
      <div v-for="field in fields" :key="field.key" class="table-headers">
        <slot :name="`header-${field.key}`" v-bind="header">
          <span>{{ field.label }}</span>
        </slot>
      </div>
     
        <div v-for="field in fields" :key="field.key" class="table-item">
          <div v-for="dataItem in data" :key="dataItem.id" style="height: 100px;" class="d-flex align-items-center">
            <slot :name="`row-${field.key}`" v-bind="dataItem">
              <span>{{ dataItem[field.key] }}</span>
            </slot>
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
    required: true,
  },
  filterPrincipal: {
    type: Object,
    default: () => ({}),
  },
});
const data = computed(() => props.data);
const filterPrincipal = ref(props.filterPrincipal);
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
const getColumnStyle = (fields) => {
  return (
    "display:grid;grid-template-columns:repeat(" + fields.length + ",1fr);"
  );
};
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
  .table-header {
    width: auto;
    min-width: 120px;
    text-align: center;
  }
}

.table-body {
  max-height: 80vh;
  overflow-y: auto;
  .table-row {
    display: flex;
    flex-direction: row;
    padding: 1em 0;
    column-gap: 1em;
    .table-item {
      width: auto;
      min-width: 120px;
      text-align: center;
    }
  }
}

// tr,
// thead,
// tbody,
// table,
// td {
//   border-spacing: 0;
// }
// .table-container{
//   overflow-y: auto;
//   max-height: 40vh;
//   display: block;
//   width: 100%;

// }
// .table-headers{
//   position: sticky;
//   top: 0;

//   .table-header {
//   background-color: #515166;
//   padding: 1em 2em;
//   font-weight: bold;
//   font-family: Axiforma, sans-serif;
//   &:first-child {
//     border-top-left-radius: 1em;
//     border-bottom-left-radius: 1em;
//   }
//   &:last-child {
//     border-top-right-radius: 1em;
//     border-bottom-right-radius: 1em;
//   }
// }
// }
// .table-row{
//   height: 2.5em;

//   .table-item {
//   padding: 0 2em;
//   span{
//     font-family: Axiforma, sans-serif;
//     font-weight: 300;
//     font-size: 1em;
//   }
// }
// }
</style>