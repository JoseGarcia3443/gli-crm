<template lang="pug">
.toolbar__filters--wrapper
  .toolbar__filters--search
    input(type="search", :placeholder="$t('actions.SEARCH')")
    img(src="@/assets/search.png")
    button {{ $t('actions.SEARCH') }}
  .toolbar__filters--filters
    button
      img(src="@/assets/filter.png")
</template>

<script>
export default {
  name: "ToolbarFilter",
};
</script>

<style lang="scss" scoped>
.toolbar__filters {
  &--wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }
  }
  &--search {
    position: relative;
    margin-right: 10px;
    input {
      padding: 10px 10px 10px 35px;
      background-color: var(--tertiary);
      border: none;
      border-radius: 0.8em;
      max-width: 300px;
      color: var(--primary);
      font-family: var(--open-sans);
      font-size: var(--fs-14);
      margin-right: 10px;
    }
    img {
      position: absolute;
      left: 10px;
      top: 8px;
    }
    button {
      border: none;
      text-transform: uppercase;
      padding: 10px;
      transition: all 0.3s ease-in-out;
      border-radius: 0.25em;
      font-family: var(--open-sans);
      font-size: var(--fs-14);
      &:hover {
        background-color: var(--secondary);
        color: var(--white);
      }
    }
  }
  &--filters {
    margin-top: 20px;
    @media (min-width: 768px) {
      margin-top: 0;
    }
    button {
      background-color: var(--secondary);
      border: none;
      border-radius: 0.25em;
      padding: 8px 10px;
      img {
        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>