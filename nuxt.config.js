export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  ssr: true,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Hippolyte Thomas' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Passionné d'informatique, je suis actuellement développeur Freelance.",
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: process.env.WEBSITE_URL,
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/fonts/montserrat.css', '~/assets/css/style.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
	'@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  /*
   ** Sitemap Configuration
   ** See https://github.com/nuxt-community/sitemap-module#readme
   */
  sitemap: {
    path: '/sitemap.xml', // L'emplacement du fichier sitemap.
    hostname: process.env.WEBSITE_URL, // L'adresse du site.
    exclude: ['/admin/**'], // Pages à exlure de l'indexation.
  },
  /*
   ** Robots.txt Configuration
   ** See https://github.com/nuxt-community/robots-module#readme
   */
  robots: {
    Disallow: ['/admin'],
    Sitemap: `${process.env.WEBSITE_URL}/sitemap.xml`,
  },
  axios: {
  	proxy: true
  },
  proxy: {
  	"/api/": `${process.env.API_URL}/`
  },
};
