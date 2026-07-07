<template>
    <div class="max-w-150">
        <h1 class="text-2xl font-semibold">Histórico</h1>

        <div class="mt-12">
            <div class="whitespace-pre">
                {{ JSON.stringify(transactionStore.transactions, null, 2) }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTransactionsStore } from '~/stores/transactions'

const api = useApi()

definePageMeta({
    layout: 'dashboard'
})

const transactionStore = useTransactionsStore()

async function getTransactions () {
    const data = await api.request('/transaction', 'GET')
    console.log(data)    
}

onMounted(() => getTransactions())
</script>
