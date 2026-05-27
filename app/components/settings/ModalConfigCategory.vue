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
                show-clear
            />

            <Button
                label="Salvar"
                @click="emit('submit')"
                :disabled="categoryName.trim() === ''"
            />
        </div>

        <div class="mt-6">
            <p>Veja algumas sugestões:</p>
            <p class="font-semibold text-primary my-2">Ganhos</p>

            <div class="w-100 overflow-scroll">
                <div class="w-fit flex gap-2">
                    <Button
                        v-for="(item, i) in incomeSugestions"
                        :key="i"
                        :label="item"
                        class="w-fit text-sm text-nowrap"
                        variant="outlined"
                        @click="categoryName = item"
                    />
                </div>
            </div>

            <p class="font-semibold text-primary my-2">Despesas</p>

            <div class="w-100 overflow-scroll">
                <div class="w-fit flex gap-2">
                    <Button
                        v-for="(item, i) in expenseSugestions"
                        :key="i"
                        :label="item"
                        class="w-fit text-sm text-nowrap"
                        variant="outlined"
                        @click="selectItem(item)"
                    />
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import { useCategoriesStore } from '~/stores/categories'

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

const categoriesStore = useCategoriesStore()

const active = computed({
    get: () => props.visible,
    set: (value: boolean) => emit('update:visible', value)
})
const categoryName = computed({
    get: () => props.modelValue,
    set: (value: string) => emit('update:modelValue', value)
})

const actionName = computed(() => (props.editing ? 'Editar' : 'Adicionar'))

const incomeSugestions = computed(() => categoriesStore.sugestions.income)
const expenseSugestions = computed(() => categoriesStore.sugestions.expense)

function selectItem(item: string) {
    categoryName.value = item
}
</script>
