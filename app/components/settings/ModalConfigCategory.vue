<template>
    <Dialog v-model:visible="active" modal>
        <template #header>
            <h3 class="text-lg font-semibold text-gray-2">
                {{ actionName }} categoria
            </h3>
        </template>

        <div class="mt-4 flex flex-col gap-4">
            <InputText
                v-model="categoryName"
                placeholder="Nome da categoria"
                autofocus
            />

            <Button
                :label="actionName"
                @click="emit('submit')"
                :disabled="categoryName.trim() === ''"
            />
        </div>
    </Dialog>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:visible', 'update:modelValue', 'submit'])

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    visible: {
        type: Boolean,
        default: false
    },
    editing: {
        type: Boolean,
        default: false
    }
})

const active = computed({
    get: () => props.visible,
    set: (value: boolean) => emit('update:visible', value)
})
const categoryName = computed({
    get: () => props.modelValue,
    set: (value: string) => emit('update:modelValue', value)
})

const actionName = computed(() => (props.editing ? 'Editar' : 'Adicionar'))
</script>
