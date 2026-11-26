import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const MyTheme = definePreset(Aura, {
    primitive: {
        primary: {
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
            50: '{primary.50}',
            100: '{primary.100}',
            200: '{primary.200}',
            300: '{primary.300}',
            400: '{primary.400}',
            500: '{primary.500}',
            600: '{primary.600}',
            700: '{primary.700}',
            800: '{primary.800}',
            900: '{primary.900}',
            950: '{primary.950}',
            color: '{primary.500}',
            inverseColor: '#ffffff',
            hoverColor: '{primary.600}',
            activeColor: '{primary.700}'
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
