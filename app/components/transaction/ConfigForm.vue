<template>
    <div class="mt-12 flex items-start flex-wrap gap-4">
        <div class="w-full">
            <p class="text-lg font-semibold mb-2">Tipo de transação</p>

            <RadioButtonGroup v-model="form.type" :items="typeOptions">
            </RadioButtonGroup>
        </div>

        <div class="w-full md:w-[calc(50%-1rem)]">
            <p class="text-lg font-semibold mb-2">Tipo de transação</p>

            <RadioButtonGroup
                v-model="form.paymentMethod"
                :items="paymentOptions"
            >
            </RadioButtonGroup>
        </div>

        <div class="w-full md:w-[calc(50%-1rem)]">
            <p class="text-lg font-semibold mb-2">Categoria</p>

            <Select
                v-model="form.categoryId"
                :options="categoriesOptions"
                optionLabel="name"
                placeholder="Selecione uma categoria"
                showClear
            />
        </div>

        <div class="w-full md:w-[calc(50%-1rem)]">
            <p class="text-lg font-semibold mb-2">Valor</p>

            <InputNumber
                v-model="form.amount"
                type="number"
                class="w-full"
                placeholder="R$ 0,00"
                mode="currency"
                currency="BRL"
                locale="pt-BR"
            />
        </div>
        <div class="w-full md:w-[calc(50%-1rem)]">
            <p class="text-lg font-semibold mb-2">Data</p>

            <DatePicker
                class="w-full"
                placeholder="00/00/0000"
                showClear
                showIcon
            />
        </div>
        <div class="w-full">
            <p class="text-lg font-semibold mb-2">Anotações</p>

            <Textarea
                class="w-full"
                placeholder="Observações"
                variant="outlined"
            />
        </div>

        <div class="w-full flex justify-center">
            <Button
                class="w-full md:w-1/3"
                label="salvar"
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
    { label: 'Pix', value: 'pix' },
    { label: 'C. Crédito', value: 'credit' },
    { label: 'C. Débito', value: 'debit' },
    { label: 'Dinheiro', value: 'cash' }
]
const categoriesOptions = computed(() => {
    return categoriesStore.categories
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
