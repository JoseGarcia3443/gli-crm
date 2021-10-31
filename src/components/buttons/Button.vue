<template lang="pug">
button(
  :class="['btn', `btn__color--bg-${bgColor}`, `btn__color--txt-${color}`, { btn__outline: outline }]"
) 
  slot
</template>

<script>
export default {
  name: "Button",
  props: {
    outline: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: "transparent",
    },
    color: {
      type: String,
      default: "tertiary",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  padding: 10px 20px;
  border-radius: 0.25em;
  font-family: var(--open-sans);
  font-size: var(--fs-14);
  transition: all 0.3s ease-in-out;
  &__outline {
    border: 1px solid var(--secondary);
    color: var(--primary) !important;
    &:hover {
      background-color: var(--secondary);
      color: var(--white) !important;
    }
  }
  &__color {
    &--bg {
      &-secondary {
        background-color: var(--secondary);
      }
      &-transparent {
        background-color: transparent;
      }
    }
    &--txt {
      &-primary {
        color: var(--primary);
      }
      &-tertiary {
        color: var(--tertiary);
      }
    }
  }
}
</style>