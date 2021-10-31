<template lang="pug">
.vp-landing
  .container 
    v-history(:history="history")
    v-title-page(:title="$t('pages.MANAGERS')")
</template>

<script>
import { VHistory, VTitlePage } from "@/components";

export default {
  name: "Managers",
  data: () => ({
    history: ["HOME", "MANAGERS"],
  }),
  components: {
    VHistory,
    VTitlePage,
  },
};
</script>

<style lang="scss" scoped>
.vp-landing {
  width: 100%;
  min-height: 100vh;
}
</style>