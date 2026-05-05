import tailwindcss from '@tailwindcss/vite'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        '@vite-pwa/nuxt',
        '@primevue/nuxt-module',
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt'
    ],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Minha Grana',
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,100,1,200&icon_names=home,docs,bar_chart_4_bars&display=block'
                },
                {
                    rel: 'manifest',
                    href: '/manifest.webmanifest'
                }
            ]
        }
    },
    css: [
        '~/assets/css/main.scss',
        '~/assets/css/primeicons.css',
        '~/assets/css/tailwind.css'
    ],
    pwa: {
        registerType: 'autoUpdate',

        manifest: false,

        workbox: {
            navigateFallback: '/',
            globPatterns: ['**/*.{js,css,html,png,svg,ico,json}']
        },

        devOptions: {
            enabled: true // allows testing PWA in dev
        }
    },
    primevue: {
        usePrimeVue: false
    },
    pinia: {
        storesDirs: ['./app/stores/**']
    },
    vite: {
        plugins: [
            tailwindcss(),
            Components({
                resolvers: [PrimeVueResolver()]
            })
        ],
        optimizeDeps: {
            include: [
                'pinia-plugin-persistedstate',
                'moment/min/moment-with-locales'
            ]
        }
    }
})
