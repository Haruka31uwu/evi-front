<template>
  <div class="modal-customized">
    <div
      class="modal-customized-body d-flex flex-column pb-5"
      style="border-radius: 2em"
    >
      <div
        class="modal-customized-header w-100 d-flex justify-content-between px-3 pt-4"
      >
        <svg
          class=""
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
      <div class="row mx-auto d-flex flex-column gap-5 mt-4" style="width: 90%">
        <div
          class="d-flex flex-column justify-content-center align-items-center gap-2"
        >
          <select
            v-model="year"
            class="form-select per-page-select"
            aria-label="Default select example"
          >
            <option
              v-for="option in filters[0].values"
              :value="option.value"
              :key="option.value"
            >
              {{ option.label }}
            </option>
          </select>
          <select
            :disabled="year==0"
            v-model="month"
            class="form-select per-page-select"
            aria-label="Default select example"
          >
            <option
              v-for="option in filters[1].values"
              :value="option.value"
              :key="option.value"
            >
              {{ option.label }}
            </option>
          </select>
          <select
            v-model="day"
            :disabled="year==0|| month==0"
            class="form-select per-page-select"
            aria-label="Default select example"
          >
            <option
              v-for="option in filters[2].values"
              :value="option.value"
              :key="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
        <div
          class="btn-blue mx-auto"
          style="width: 50%; min-width: 300px"
          @click="downloadExcel"
        >
          <Icon name="icon-park-outline:excel" size="30"></Icon>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import date from "date.js"; // Importa date.js

export default {
  emits: ["closeModal", "selectedAvatarHandler", "downloadExcel"],
  props: {
    user: {
      type: Object,
      required: false,
    },
  },

  setup(props, ctx) {
    const closeModal = () => {
      ctx.emit("closeModal");
    };
    const downloadExcel = (avatar) => {
      ctx.emit("downloadExcel", {
        year: year.value,
        month: month.value,
        day: day.value,
      });
      closeModal();
    };
    const year = ref(2023);
    const month = ref(0);
    const day = ref(0);
    const filters = ref([
      {
        key: "year",
        label: "Año",
        values: [
          {
            value: 0,
            label: "All",
          },
          {
            value: 2021,
            label: "2021",
          },
          {
            value: 2022,
            label: "2022",
          },
          {
            value: 2023,
            label: "2023",
          },
          {
            value: 2024,
            label: "2024",
          },
          {
            value: 2025,
            label: "2025",
          },
          {
            value: 2026,
            label: "2026",
          },
          {
            value: 2027,
            label: "2027",
          },
          {
            value: 2028,
            label: "2028",
          },
          {
            value: 2029,
            label: "2029",
          },
          {
            value: 2030,
            label: "2030",
          },
        ],
      },
      {
        key: "month",
        label: "Mes",
        values: [
          {
            value: 0,
            label: "All",
          },
          {
            value: 1,
            label: "Enero",
          },
          {
            value: 2,
            label: "Febrero",
          },
          {
            value: 3,
            label: "Marzo",
          },
          {
            value: 4,
            label: "Abril",
          },
          {
            value: 5,
            label: "Mayo",
          },
          {
            value: 6,
            label: "Junio",
          },
          {
            value: 7,
            label: "Julio",
          },
          {
            value: 8,
            label: "Agosto",
          },
          {
            value: 9,
            label: "Septiembre",
          },
          {
            value: 10,
            label: "Octubre",
          },
          {
            value: 11,
            label: "Noviembre",
          },
          {
            value: 12,
            label: "Diciembre",
          },
        ],
      },
      {
        key: "day",
        label: "Día",
        values: [],
      },
    ]);
    watchEffect(() => {
      if (year.value && month.value) {
        const daysInMonth = new Date(year.value, month.value, 0).getDate();
        filters.value[2].values = [];
        filters.value[2].values.push({
          value: 0,
          label: "All",
        });
        for (let i = 1; i <= daysInMonth; i++) {
          filters.value[2].values.push({
            value: i,
            label: i,
          });
        }
        if(year.value==0){
            month.value=0;
        }
        if(month.value==0){
            day.value=0;
        }
        day.value = 0;
      }
    });

    return {
      closeModal,
      filters,
      month,
      year,
      day,
      downloadExcel,
    };
  },
};
</script>
  <style lang="scss" scoped>
.modal-customized {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-customized-body {
  width: 50%;
  background-color: #1c1c24;
}
@media (max-width: 768px) {
  .modal-customized-body {
    width: 80%;
  }
}
.input-customized {
  border: 1px solid #515166;
  background: transparent;
  width: 95%;
  border-radius: 2em;
  padding: 0.8em 1em;
  resize: none;
}
.modal-tabs {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 80%;
  

  .modal-tab {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    .tab-selected {
      background: #0393aa !important;
      height: 5px !important;
    }
    span {
      font-family: Axiforma;
      font-style: normal;
      font-weight: 300;
      font-size: 1.2em;
      line-height: 1.5em;
      color: #f0f0f0;
    }
    .modal-tab__decoration {
      width: 300px;
      background: #515166;
      height: 1px;
    }
    &:hover {
      cursor: pointer;
      .modal-tab__decoration {
        background: #0393aa;
      }
    }
  }
}
.avatar-list {
  display: grid;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 1em;
  margin-top: 1em;
  width: 90%;
  li {
    width: 120px;
    height: 120px;
    list-style: none;
    border: 1px solid #515166;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      padding: 1.4em;
    }
    &:hover {
      cursor: pointer;
    }
  }
  li:hover::before {
    content: ""; /* Crear un pseudo-elemento ::before para el div con borde */
    border: 3px solid #0393aa; /* Cambiar "#yourBorderColor" al color de borde deseado */
    height: 110px;
    width: 110px;
    position: absolute;
    border-radius: 50%;
  }
}
.selected-avatar::before {
  content: ""; /* Crear un pseudo-elemento ::before para el div con borde */
  border: 3px solid #0393aa; /* Cambiar "#yourBorderColor" al color de borde deseado */
  height: 110px;
  width: 110px;
  position: absolute;
  border-radius: 50%;
}
</style>