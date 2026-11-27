export const useStorage = (key: string, defaultValue: any) => {
    const state = ref(defaultValue)

    if (import.meta.client) {
        try {
            const savedValue = localStorage.getItem(key)

            if (savedValue !== null) {
                state.value = JSON.parse(savedValue)
            }
        } catch {
            localStorage.removeItem(key)
        }

        watch(
            state,
            (value) => {
                localStorage.setItem(key, JSON.stringify(value))
            },
            { deep: true }
        )
    }

    const remove = () => {
        state.value = defaultValue

        if (import.meta.client) {
            localStorage.removeItem(key)
        }
    }

    return {
        state,
        remove
    }
}
