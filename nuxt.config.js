export default {
  head: {
    title: 'Agrim Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal portfolio of Agrim Sood' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/styles/main.css'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  modules: [],
  build: {
    extend(config, ctx) {
    }
  }
}