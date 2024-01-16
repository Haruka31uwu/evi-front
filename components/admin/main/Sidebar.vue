<template>
  <div class="admin-sidebar">
    <div class="sidebar__logo"></div>
    <div class="sidebar__account"></div>
    <ul class="sidebar__menu">
      <li v-for="route in routes" :key="route.name" class="sidebar__items">
        <div
          class="item__route"
          :class="route.path == currentRoute ? 'selected-route' : ''"
          @click="route.open = !route.open"

        >
          <span
            v-if="route.type == 'multi'"
            >{{ route.name }}</span
          >
          <nuxt-link v-else :to="route.path">{{ route.name }}</nuxt-link>
          <div v-if="route.type === 'multi'">
            <svg
              v-if="!route.open"
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="7"
              viewBox="0 0 13 7"
              fill="none"
            >
              <path
                d="M1 1L6.5 6L12 1"
                stroke="#515166"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="7"
              viewBox="0 0 13 7"
              fill="none"
            >
              <path
                d="M12 6L6.5 1L1 6"
                stroke="#F0F0F0"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <ul
          class="sidebar__subroutes"
          v-if="route.hasOwnProperty('subroutes') && route.open"
        >
          <li
            v-for="subroute in route.subroutes"
            :key="subroute.name"
            :class="subroute.path == currentRoute ? 'selected-route' : ''"
          >
            <nuxt-link :to="subroute.path">{{ subroute.name }}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
    {{ currentRoute  }}
  </div>
</template>
<script setup>
const routes = ref([
  {
    name: "Inicio",
    path: "/admin/home",
    type: "single",
  },
  {
    name: "Landing page",
    path: "/admin/landing-page",
    type: "multi",
    open: false,
  },
  {
    name: "Aula Virtual",
    path: "/admin/classroom",
    type: "multi",
    open: false,
  },
  {
    name: "Pagos",
    path: "/admin/payments",
    type: "multi",
    subroutes: [
      {
        name: "Ident. transacciones",
        path: "/admin/payments/transactions",
        selected: true,
      },
      {
        name: "Descuentos",
        path: "/admin/payments/discounts",
        selected: false,
      },
    ],
    open: false,
  },
  {
    name: "Configuracion",
    path: "/admin/settings",
    type: "multi",
    open: false,
  },
]);
const router = useRouter();
const currentRoute = computed(() => router.currentRoute.value.path);
</script>
<style lang="scss" scoped>
.admin-sidebar {
  width: 20%;
  height: 100%;
  min-height: 100vh;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  background: #1c1c24;
}
.sidebar__menu {
  list-style: none;
  padding: 0 0.5em;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  .sidebar__items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: auto;
    .item__route {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between !important;
      width: 95%;
      padding: 0.5em 0.5em;
      border-radius: 0.5em;
      a,
      span {
        font-family: Axiforma;
        color: white;
        text-decoration: none;
        padding: 0 0.5em;
      }
      &:hover {
        background: #0393aa;
      }
    }
    .sidebar__subroutes {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      row-gap: 0.5em;
      width: 100%;
      margin-left: 5em;
      li {
        width: 90%;
        padding: 0.5em 0.5em;
        border-radius: 0.5em;
        a,
        span {
          font-family: Axiforma;
          color: white;
          text-decoration: none;
          padding: 0 0.5em;
        }
        &:hover {
          background: #0393aa;
        }
      }
    }
  }
}
.selected-route {
  background: #0393aa;
  border-radius: 0.5em;
}
</style>
