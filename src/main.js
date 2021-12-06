// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
const GH_CLIENT_ID = 'be8d62e7ef8186af9354'
const GH_CLIENT_SECRET = '6b7ee2a1a5c688a539bbc31dbddb7c5b834465f1'
import DefaultLayout from '~/layouts/Default.vue'
import VueMarkdown from 'vue-markdown'
import SlideUpDown from 'vue-slide-up-down'

// comments
import Vssue from 'vssue';
import GithubV3 from '@vssue/api-github-v3';
import 'vssue/dist/vssue.css'

import 'prismjs/themes/prism.css'
import '~/assets/scss/main.scss'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('VueMarkdown', VueMarkdown)
  Vue.component('SlideUpDown', SlideUpDown)

  Vue.use(Vssue, {
    api: GithubV3,
    owner: 'near-sighted',
    repo: 'news-site',
    // clientId: process.env.GH_CLIENT_ID,
    // clientSecret: process.env.GH_CLIENT_SECRET,
    clientId: GH_CLIENT_ID,
    clientSecret: GH_CLIENT_SECRET,
  })
}
