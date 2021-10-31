<template lang="pug">
.title__wrapper
  h1.title__wrapper--title {{ title }}
</template>

<script>
export default {
  name: "TitlePage",
  props: {
    title: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style lang="scss" scoped>
.title__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
  &--title {
    font-family: var(--montserrat);
    font-weight: var(--fw-600);
    letter-spacing: -0.05em;
    margin: 0 !important;
    font-size: var(--fs-20);
  }
}
</style>