<template lang="pug">
nav.list__nav--wrapper
  ul.list__nav--container
    menu-item(
      v-for="(item, index) in menus",
      :key="item.id"
      :path="item.path",
      :text="item.path_name",
      :icon="item.icon"
    )
</template>

<script>
import getMenuMixin from "../../mixins/getMenuMixin";
export default {
  name: "Menu",
  mixins: [getMenuMixin],
  components: {
    "menu-item": () => import("@/components/navigation/MenuItem.vue"),
  },
};
</script>

<style lang="scss" scoped>
.list__nav--wrapper {
  &--container {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
}
</style>