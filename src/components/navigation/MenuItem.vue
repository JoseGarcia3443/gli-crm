<template lang="pug">
li.list__nav--item
  .list__nav--item-container
    .list__nav--item-icon(v-if="icon !== null")
      img(:src="icon", :alt="$t(text)")
    router-link.list__nav--item-text(:to="path")
      span {{ $t(text) }}
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    path: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: "menus.default",
    },
    icon: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.list__nav {
  &--item {
    padding: 15px 0;
    border-bottom: 1px solid var(--tertiary);
    display: flex;
    align-items: center;
    justify-content: center;
    &:last-child {
      border-bottom: none;
    }
    &-container {
      width: 50%;
      display: flex;
    }
    &-icon {
      margin-right: 10px;
    }
    &-text {
      text-decoration: none;
      color: var(--primary);
      font-family: var(--open-sans);
      font-size: var(--fs-14);
      font-weight: var(--fw-400);
    }
  }
}
</style>