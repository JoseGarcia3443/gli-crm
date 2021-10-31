<template lang="pug">
.menu-wrapper
  transition(
    mode="out-in",
    enter-active-class="animate__animated animate__fadeInLeftBig",
    leave-active-class="animate__animated animate__fadeOutLeftBig"
  )
    .wrapper(v-if="visible")
      .sidebar__wrapper
        .sidebar__wrapper--container
          .sidebar__wrapper--header
            logo
          .sidebar__wrapper--body
            navigation-menu 
</template>

<script>
import Logo from "@/components/aditionals/Logo.vue";
import NavigationMenu from "@/components/navigation/Menu.vue";

export default {
  name: "Sidebar",
  components: {
    Logo,
    NavigationMenu,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar__wrapper {
  width: 100%;
  height: 100vh;
  background-color: var(--white);
  border-right: 1px solid var(--tertiary);
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  @media (min-width: 768px) {
    display: none;
  }
  &--body {
    margin-top: 65px !important;
  }
}
</style>