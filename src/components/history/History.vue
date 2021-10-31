<template lang="pug">
.history__wrapper
  ul.history__wrapper--list
    li.history__wrapper--list-item(v-for="(h, i) in history", :key="i")
      span(v-if="i === 0") {{ $t(`routes.${h}`) }}
      img(src="@/assets/arrow.png", v-if="i > 0")
      span(v-if="i > 0", :class="{ latest: i > 0 }")
        | {{ $t(`routes.${h}`) }}
</template>

<script>
export default {
  name: "History",
  props: {
    history: {
      type: Array,
      default: () => ["Inicio"],
    },
  },
};
</script>

<style lang="scss" scoped>
.history__wrapper {
  padding: 10px 0;
  &--list {
    display: flex;
    justify-content: center;
    list-style: none;
    @media (min-width: 768px) {
      justify-content: flex-start;
    }
    &-item {
      span {
        color: var(--primary);
        font-family: var(--open-sans);
        font-size: 16px;
        &.latest {
          color: var(--secondary);
        }
      }
      img {
        margin: 0 10px;
      }
    }
  }
}
</style>