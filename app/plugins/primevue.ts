import { Ripple } from 'primevue'
import PrimeVue from 'primevue/config'
import MyTheme from '~/assets/_prime/theme'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
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
    })
    nuxtApp.vueApp.directive('ripple', Ripple)
})
