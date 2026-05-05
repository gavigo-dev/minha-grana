<template>
    <div class="flex flex-wrap gap-4" :class="groupClass">
        <div
            class="flex items-center gap-2 cursor-pointer"
            v-for="(item, idx) in items"
            :key="idx"
            @click="selected = item.value"
        >
            <PRadioButton
                v-model="selected"
                :inputId="idx + 'opt'"
                :value="item.value"
            />
            <span
                class="mb-1"
                :class="selected === item.value && 'text-primary font-semibold'"
            >
                {{ item.label }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import PRadioButton from 'primevue/radiobutton'

const props = defineProps<{
    modelValue: any
    items: Array<{ label: string; value: any; name?: string }>
    groupClass?: string
}>()
const emit = defineEmits(['update:modelValue'])

const selected = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})

onMounted(() => {
    console.log(selected.value)
})
</script>
