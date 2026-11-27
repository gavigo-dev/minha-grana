<template>
    <div class="">
        <FloatLabel v-if="type === 'select'" variant="on">
            <Select
                v-model="currentThemeMode"
                :options="themeModeOptions"
                option-label="title"
                option-value="value"
                placeholder="Selecione o modo"
                class="w-full"
            />
            <label>Modo de luz</label>
        </FloatLabel>
        <SelectButton
            v-else
            v-model="currentThemeMode"
            :options="themeModeOptions"
            option-label="value"
            option-value="value"
            dataKey="value"
            aria-labelledby="custom"
        >
            <template #option="slotProps">
                <i
                    :title="slotProps.option.title"
                    :class="slotProps.option.icon"
                />
            </template>
        </SelectButton>
    </div>
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'select' // icons | select
    }
})

const themeMode = useThemeMode()
const themeModeOptions = [
    { icon: 'pi pi-sun', value: 'light', title: 'Claro' },
    { icon: 'pi pi-moon', value: 'dark', title: 'Escuro' },
    { icon: 'pi pi-desktop', value: 'system', title: 'Sistema' }
]
const currentThemeMode = computed({
    get() {
        return themeModeOptions.find(
            (i) => i.value === themeMode.preference.value
        ).value
    },
    set(val) {
        themeMode.setTheme(val)
    }
})
</script>

<style lang="scss" scoped></style>
