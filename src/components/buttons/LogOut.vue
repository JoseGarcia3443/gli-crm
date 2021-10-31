<template lang="pug">
button(@click="$emit('onClick')")
  img(src="@/assets/logout.png")
</template>

<script>
export default {
  name: "LogOut",
};
</script>

<style lang="scss" scoped>
button {
  background-color: transparent;
  border: none;
}
</style>