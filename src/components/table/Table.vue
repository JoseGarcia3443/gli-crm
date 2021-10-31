<template lang="pug">
.table__wrapper
  .table__wrapper--header
    slot(name="header")
  .table__wrapper--body
    slot(name="body")
</template>

<script>
export default {
  name: "TableManagers"
};
</script>

<style lang="scss" scoped>
.table__wrapper {
  padding: 25px 0;
  &--body {
    margin-top: 50px;
  }
}
</style>