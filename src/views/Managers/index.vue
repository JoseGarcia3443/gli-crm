<template lang="pug">
.vp-landing
  .container 
    v-history(:history="history")
    v-title-page(:title="$t('pages.MANAGERS')")
    v-table
      template(#header)
        .row.no-gutters.flex-column.flex-md-row.justify-content-center.align-items-center.justify-content-md-between
          v-toolbar-filter
          .action__table
            v-button(outline) {{ $t('actions.DOWNLOAD') }}
            v-button(bgColor="secondary") {{ $t('actions.ADD_ADMIN') }}
      template(#body)
        vs-table(v-model="selected")
          template(#thead)
            vs-th
              vs-checkbox(
                :indeterminate="selected.length == managers.length",
                v-model="allCheck",
                @change="selected = $vs.checkAll(selected, managers)"
              )
            vs-th(v-for="(column, idxth) in columns", :key="idxth")
              | {{ $t(`managers.${column}`) }}
          template(#tbody)
            vs-tr(
              :key="i",
              v-for="(tr, i) in managers",
              :data="tr",
              :is-selected="!!selected.includes(tr)"
            )
              vs-td(checkbox="")
                vs-checkbox(:val="tr", v-model="selected")
              vs-td
                | {{ tr.name }}
              vs-td
                | {{ tr.area }}
              vs-td
                | {{ tr.email }}
              vs-td
                | {{ tr.status }}
              vs-td
                
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("Manager");
import {
  VHistory,
  VTitlePage,
  VTable,
  VToolbarFilter,
  VButton,
} from "@/components";

export default {
  name: "Managers",
  data: () => ({
    history: ["HOME", "MANAGERS"],
    selected: [],
    allCheck: false,
    columns: ["MANAGERS", "AREA", "EMAIL", "STATUS", "DETAILS"],
  }),
  components: {
    VHistory,
    VTitlePage,
    VTable,
    VToolbarFilter,
    VButton,
  },
  computed: {
    ...mapGetters(["managers"]),
  },
};
</script>

<style lang="scss" scoped>
.vp-landing {
  width: 100%;
  min-height: 100vh;
}

.action__table {
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
  button {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>