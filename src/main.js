// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import ThemeSwitch from '~/components/ThemeSwitch.vue'

import 'prismjs/themes/prism.css'
import '~/assets/scss/main.scss'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  
  Vue.component('ThemeSwitch', ThemeSwitch)

  head.meta.push({
    name: 'theme-color',
    content: '#10c186'
  })
}
