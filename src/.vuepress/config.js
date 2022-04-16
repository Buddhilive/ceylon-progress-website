const { description } = require('../../package')

module.exports = {
  base: '/ceylon-progress-website/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Ceylon Progress',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#ff6f00' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],   
    ['link', {rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: true}],
    ['link', {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true}],
    ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'}],
    ['script', {type: 'module', src: 'https://cdn.jsdelivr.net/npm/ceylon-progress@0.0.1/dist/stencil-starter-project-name/stencil-starter-project-name.esm.js'}],
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/Buddhilive/ceylon-progress',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/ceylon-progress_logo-sm.png',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Blog',
        link: 'https://www.buddhilive.com'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-ceylon-progress',
            'framework'
          ]
        }
      ],
    }
  },
  locales: {
    '/': {
      lang: 'English',
      title: 'Ceylon Progress',
      description: 'Open Source CSS Loading Animation Library'
    },
    /* '/si/': {
      lang: 'සිංහල',
      title: 'Ceylon Progress',
      description: 'Open Source CSS Loading Animation Library'
    } */
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
