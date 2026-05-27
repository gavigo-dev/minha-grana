import PrimeVue, { type PrimeVueConfiguration } from 'primevue/config'
import Material from '@primeuix/themes/material'
import Locale from 'primelocale/pt-BR.json'
import { definePreset, palette, type ColorScale } from '@primeuix/styled'

export default defineNuxtPlugin((nuxtApp) => {
    const primaryValues = palette('#d84265')
    const myPreset = definePreset(Material, {
        semantic: {
            primary: primaryValues as ColorScale
        }
    })

    nuxtApp.vueApp.use(PrimeVue, {
        locale: Locale['pt-BR'],
        ripple: false,
        theme: {
            preset: myPreset,
            options: {
                darkModeSelector: '.app-dark',
                cssLayer: {
                    name: 'primevue',
                    order: 'theme, base, primevue'
                }
            }
        },
        pt: {
            select: {
                label: (options) =>
                    options.props.modelValue && 'font-bold text-primary'
            },
            inputText: {
                root: 'w-full font-bold text-primary placeholder:font-normal'
            }
        }
    } as PrimeVueConfiguration)
})
