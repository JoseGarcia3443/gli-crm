import Vue from 'vue'
import vuexI18n from 'vuex-i18n'

import store from '@/store'

import LocaleEs from './es-ES'

Vue.use(vuexI18n.plugin, store)

Vue.i18n.add('es', LocaleEs)

const htmlTag = document.documentElement

let lang

if (htmlTag) {
  lang = htmlTag.lang
}

lang = 'es'

Vue.i18n.set(lang)
