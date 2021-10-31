<template lang="pug">
nav.navigation__wrapper
  .container
    .navigation__wrapper--row.row.no-gutters.justify-content-end
      search-bar
      divider
      avatar(:thumbnail="user.thumbnail", :name="user.name", :area="user.area")
      log-out
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("Auth");
import LogOut from "@/components/buttons/LogOut.vue";
import SearchBar from "@/components/aditionals/SearchBar.vue";
import Avatar from "@/components/avatar/Avatar.vue";
import Divider from "@/components/divider/Divider.vue";

export default {
  name: "Navbar",
  components: {
    LogOut,
    Avatar,
    Divider,
    SearchBar,
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style lang="scss" scoped>
.navigation__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  background-color: var(--secondary);
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
  &--row {
    padding: 30px 0;
  }
}
</style>