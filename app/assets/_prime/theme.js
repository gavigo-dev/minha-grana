import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const MyTheme = definePreset(Aura, {
    primitive: {
        brand: {
            50: '#FCF0F3',
            100: '#F9E1E6',
            200: '#F3C3CE',
            300: '#ECA0B2',
            400: '#E2718C',
            500: '#D84265',
            600: '#BE3A59',
            700: '#A2324C',
            800: '#82283D',
            900: '#611E2D',
            950: '#451520'
        }
    },

    semantic: {
        primary: {
            50: '{brand.50}',
            100: '{brand.100}',
            200: '{brand.200}',
            300: '{brand.300}',
            400: '{brand.400}',
            500: '{brand.500}',
            600: '{brand.600}',
            700: '{brand.700}',
            800: '{brand.800}',
            900: '{brand.900}',
            950: '{brand.950}',
            color: '{brand.500}',
            inverseColor: '{surface.50}',
            hoverColor: '{brand.600}',
            activeColor: '{brand.700}',
            contrastColor: '{surface.50}'
        },

        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '#FAF9FA',
                    100: '#F4F2F3',
                    200: '#EAE7E9',
                    300: '#DAD5D8',
                    400: '#BDB5BA',
                    500: '#9A9096',
                    600: '#776D73',
                    700: '#5B5358',
                    800: '#403A3E',
                    900: '#2B272A',
                    950: '#1B181A'
                }
            },
            dark: {
                surface: {
                    0: '#ffffff',
                    50: '#F1F5F9',
                    100: '#E2E8F0',
                    200: '#CBD5E1',
                    300: '#A8B5C6',
                    400: '#94A3B8',
                    500: '#64748B',
                    600: '#475569',
                    700: '#334155',
                    800: '#293548',
                    900: '#202B3B',
                    950: '#182231'
                }
            }
        }
    }
})

export default MyTheme
