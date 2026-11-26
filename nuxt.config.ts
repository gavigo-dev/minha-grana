import MyTheme from './app/assets/_prime/theme.js'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@vite-pwa/nuxt', '@primevue/nuxt-module'],
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
        '~/assets/css/tailwind.css',
        '~/assets/css/primeicons.css'
    ],
    primevue: {
        autoImport: true,

        options: {
            ripple: true,

            theme: {
                preset: MyTheme,
                options: {
                    darkModeSelector: '.dark',
                    cssLayer: {
                        name: 'primevue',
                        order: 'theme, base, primevue'
                    }
                }
            }
        },

        directives: {
            include: ['Ripple']
        }
    },
    pwa: {
        manifest: false,
        devOptions: {
            enabled: true // allows testing PWA in dev
        }
    },
    vite: {
        plugins: [tailwindcss() as any]
    },
    devServer: {
        host: '0.0.0.0',
        https: {
            key: './certs/key.pem',
            cert: './certs/cert.pem'
        }
    }
})
