<template lang="pug">
.search__toolbar
  search
</template>

<script>
import Search from "@/components/buttons/Search.vue";

export default {
  name: "SearchBar",
  components: {
    Search,
  },
};
</script>

<style lang="scss" scoped>
.search__toolbar {
  display: flex;
  align-items: center;
  padding: 0 25px;
  height: 100%;
}
</style>