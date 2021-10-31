<template lang="pug">
.avatar__wrapper
  .avatar__wrapper--image(v-if="thumbnail !== null")
    img(:src="thumbnail", :alt="name")
  .avatar__wrapper--information(v-if="name !== null || area !== null")
    .avatar__wrapper--information-name(v-if="name !== null")
      span {{ name }}
    .avatar__wrapper--information-area(v-if="area !== null")
      span {{ area }}
</template>

<script>
export default {
  name: "Avatar",
  props: {
    thumbnail: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    area: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar__wrapper {
  padding: 0 20px;
  display: flex;
  &--image {
    width: 35px;
    height: 35px;
    background-color: var(--white);
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
  }
  &--information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      color: var(--white);
      font-size: var(--fs-14);
    }
  }
}
</style>