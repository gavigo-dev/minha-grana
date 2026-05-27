<template>
    <div>
        <div class="flex items-center justify-start font-semibold">
            <Button
                class="-ml-4 text-current"
                icon="pi pi-arrow-left"
                variant="text"
                @click="router.back()"
            />
            <h1 class="text-2xl ml-2">Adicionar Transação</h1>
        </div>
        <ConfigForm @submit="confirmCreate" />
    </div>
</template>
<script setup lang="ts">
import ConfigForm from '~/components/transaction/ConfigForm.vue'
import { useTransactionsStore } from '~/stores/transactions'

definePageMeta({
    layout: 'dashboard'
})
const router = useRouter()
const confirm = useConfirm()
const transactionStore = useTransactionsStore()

const confirmCreate = () => {
    confirm.require({
        message: 'Salvar transação?',
        header: 'Confirmação',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () =>
            transactionStore.addTransaction(
                transactionStore.currentTransactionForm
            )
    })
}
</script>
