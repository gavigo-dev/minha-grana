// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@vite-pwa/nuxt'],
    app: {
        head: {
            link: [{ rel: 'manifest', href: '/manifest.webmanifest' }]
        }
    },
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
    }
})
