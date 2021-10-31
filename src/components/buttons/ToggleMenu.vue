<template lang="pug">
button(@click="$emit('onClick')")
  img(src="@/assets/menu.png")
</template>

<script>
export default {
  name: "ToggleMenu",
};
</script>

<style lang="scss" scoped>
button {
  background-color: transparent;
  border: none;
}
</style>