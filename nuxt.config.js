export default {
    ssr: false,

    generate: {
        fallback: true
    },

    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || 'Vue.JS Technology',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        'assets/scss/style.scss',
    ],

    router: {
        linkExactActiveClass: 'active-link',
        // base: '/1/brook'
    },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/vuejs-paginate.js',
        '~/plugins/vue2-google-maps.js',
        '~/plugins/vue-masonry-css.js',
        '~/plugins/Mixitup.client.js',
        '~/plugins/silentbox.js',
        { src: '~/plugins/vue-masonry', ssr: false }
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // '@nuxtjs/eslint-module'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
        ['@nuxtjs/google-tag-manager', { id: 'GTM-MJXQWHD' }],
        
    ],

    styleResources: {
        scss: [
            'assets/scss/default/_variables.scss'
        ]
    },

    /*
    ** Build configuration
    */
    build: {
        extractCSS: true,
        /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        },
        transpile: [/^vue2-google-maps($|\/)/],

        babel: {
            compact: true,
        },
    },

    target: 'static',
    router: {
        base: '/githubpages'
    }
}
