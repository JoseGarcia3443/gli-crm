<template lang="pug">
#app
  v-sidebar
  v-sidebar-menu-mobil(:visible="visible" @onClose="toggleNavbar")
  v-navbar(@onClose="toggleNavbar")
  .content
    .content__view
      transition(
        mode="out-in",
        enter-active-class="animate__animated animate__fadeIn",
        leave-active-class="animate__animated animate__fadeOut"
      )
        router-view
</template>

<script>
import { VSidebar, VNavbar, VSidebarMenuMobil } from "@/components";
export default {
  components: {
    VSidebar,
    VNavbar,
    VSidebarMenuMobil,
  },
  data: () => ({
    visible: false,
  }),
  methods: {
    toggleNavbar() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style lang="scss">
@import "./style/simple-grid/bootstrap-grid.css";
@import "./style/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Mulish:wght@700&family=Open+Sans:wght@400;600&family=Roboto:wght@400;500&display=swap");

::-webkit-scrollbar {
  display: none;
}

#app {
  min-height: 100vh;
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;
  .content {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    &__view {
      margin-top: 100px;
      width: 100%;
      @media (min-width: 576px) {
        width: 60%;
      }
      @media (min-width: 768px) {
        width: 70%;
      }
      @media (min-width: 992px) {
        width: 75%;
      }
      @media (min-width: 1200px) {
        width: 80%;
      }
    }
  }
}

ul {
  margin: 0 !important;
  padding: 0 !important;
}

.swal2-title {
  font-size: 1rem !important;
  font-family: "Roboto", sans-serif !important;
  color: #000000 !important;
}
</style>
