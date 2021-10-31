<template lang="pug">
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
};
</script>

<style lang="scss" scoped>
.sidebar__wrapper {
  display: none;
  width: 100%;
  height: 100vh;
  background-color: var(--white);
  border-right: 1px solid var(--tertiary);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 11;
  @media (min-width: 576px) {
    width: 40%;
    display: block;
  }
  @media (min-width: 768px) {
    width: 30%;
  }
  @media (min-width: 992px) {
    width: 25%;
  }
  @media (min-width: 1200px) {
    width: 20%;
  }
  &--container {
    display: flex;
    flex-direction: column;
  }
  &--header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
  }
}
</style>