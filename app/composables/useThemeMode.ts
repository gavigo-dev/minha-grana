type ThemeMode = 'light' | 'dark' | 'system'

export const useThemeMode = () => {
    const preference = useState<ThemeMode>('theme-preference', () => 'system')

    const isDark = computed(() => {
        if (preference.value === 'system') {
            return import.meta.client
                ? window.matchMedia('(prefers-color-scheme: dark)').matches
                : false
        }

        return preference.value === 'dark'
    })

    const applyTheme = () => {
        if (!import.meta.client) return

        document.documentElement.classList.toggle('dark', isDark.value)
    }

    watch(preference, applyTheme)

    onMounted(() => {
        const saved = localStorage.getItem(
            'theme-preference'
        ) as ThemeMode | null

        if (saved && ['light', 'dark', 'system'].includes(saved)) {
            preference.value = saved
        }

        applyTheme()

        const media = window.matchMedia('(prefers-color-scheme: dark)')

        media.addEventListener('change', () => {
            if (preference.value === 'system') {
                applyTheme()
            }
        })

        console.log(preference.value)
    })

    const setTheme = (mode: ThemeMode) => {
        preference.value = mode

        if (import.meta.client) {
            localStorage.setItem('theme-preference', mode)
        }
    }

    return {
        preference,
        isDark,
        setTheme
    }
}
