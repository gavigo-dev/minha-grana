import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const MyTheme = definePreset(Aura, {
    semantic: {
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
    }
})

export default MyTheme
