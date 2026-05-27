<template>
    <div class="mt-12 md:mt-6 flex items-start flex-wrap gap-4 md:w-3/5">
        <div class="w-full">
            <p class="text-lg font-semibold mb-2">Nome</p>

            <InputText class="w-full" placeholder="Ex: Aluguel, Luz, etc" />
        </div>

        <div
            class="w-full my-4 flex flex-col md:flex-row justify-between gap-4"
        >
            <div>
                <p class="text-lg font-semibold mb-2">Tipo de transação</p>

                <RadioButtonGroup v-model="form.type" :items="typeOptions">
                </RadioButtonGroup>
            </div>

            <div>
                <p class="text-lg font-semibold mb-2">Método de pagamento</p>

                <RadioButtonGroup
                    v-model="form.paymentMethod"
                    :items="paymentOptions"
                >
                </RadioButtonGroup>
            </div>
        </div>
        <div class="w-full">
            <p class="text-lg font-semibold mb-2">Categoria</p>

            <Select
                v-model="form.categoryId"
                :options="categoriesOptions"
                optionLabel="name"
                placeholder="Selecione uma categoria"
                showClear
                class="w-full"
            />
        </div>

        <div class="w-[calc(50%-0.5rem)]">
            <p class="text-lg font-semibold mb-2">Valor</p>

            <InputNumber
                v-model="form.amount"
                type="number"
                class="w-full"
                placeholder="R$ "
                mode="currency"
                currency="BRL"
                locale="pt-BR"
                showClear
            />
        </div>
        <div class="w-[calc(50%-0.5rem)]">
            <p class="text-lg font-semibold mb-2">Data</p>

            <DatePicker
                v-model="date"
                class="w-full"
                placeholder="00/00/0000"
                showClear
                showIcon
            />
        </div>

        <div class="w-full flex justify-center mt-4">
            <Button
                class="w-full"
                label="Salvar"
                :disabled="!formOk"
                @click="submitForm"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCategoriesStore } from '~/stores/categories'
import { useTransactionsStore } from '~/stores/transactions'
import RadioButtonGroup from '../DS/custom/RadioButtonGroup.vue'

const emit = defineEmits(['submit'])

const transactionsStore = useTransactionsStore()
const categoriesStore = useCategoriesStore()

const form = ref<Partial<Transaction>>({
    type: 'income',
    categoryId: '',
    paymentMethod: 'pix'
})

const typeOptions = ref([
    { label: 'Entrada', value: 'income' },
    { label: 'Saída', value: 'expense' }
])
const paymentOptions = [
    { label: 'Pix/Débito', value: 'pix' },
    { label: 'Crédito', value: 'credit' },
    { label: 'Dinheiro', value: 'cash' }
]
const categoriesOptions = computed(() => {
    return categoriesStore.categories
})

const date = computed({
    get() {
        return form.value.date ? new Date(form.value.date) : null
    },
    set(value: Date | null) {
        form.value.date = value ? value.toISOString() : ''
    }
})

const formOk = computed(() => {
    return (
        form.value.amount &&
        form.value.date &&
        form.value.type &&
        form.value.paymentMethod
    )
})

const submitForm = () => {
    transactionsStore.currentTransactionForm = form.value
    emit('submit')
}

onMounted(() => {
    form.value = { ...form.value, ...transactionsStore.currentTransactionForm }
})

onUnmounted(() => {
    transactionsStore.currentTransactionForm = {}
})
</script>
