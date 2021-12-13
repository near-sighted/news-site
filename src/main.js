// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import VueMarkdown from 'vue-markdown'
import SlideUpDown from 'vue-slide-up-down'


// comments
import Vssue from 'vssue';
import GithubV4 from '@vssue/api-github-v4';
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
    api: GithubV4,
    owner: 'near-sighted',
    repo: 'news-site',
    clientId: process.env.GRIDSOME_GH_CLIENT_ID,
    clientSecret: process.env.GRIDSOME_GH_CLIENT_SECRET,
    autoCreateIssue: true,
    baseURL: 'https://github.com',
    admins: ['humanman'],
  })

  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: `NEAR Sighted captures the confusion in the NEAR ecosystem.`,
  })

  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: `NEAR Sighted captures the confusion in the NEAR ecosystem.`,
  })

  head.meta.push({
    key: 'og:url',
    name: 'og:url',
    content: `https://nearsighted.news/assets/static/logo_black_on_white.d042d20.89310ef9c0e283169f2b50dcad5ade25.png`,
  })
 
}
