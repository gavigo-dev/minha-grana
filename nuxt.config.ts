import MyTheme from './app/assets/_prime/theme.js'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@primevue/nuxt-module'],
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
            ],
            meta: [
                {
                    name: 'theme-color',
                    content: '#ffffff',
                    media: '(prefers-color-scheme: light)'
                },
                {
                    name: 'theme-color',
                    content: '#121212',
                    media: '(prefers-color-scheme: dark)'
                }
            ]
        }
    },
    css: [
        '~/assets/css/main.scss',
        '~/assets/css/ds.scss',
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
