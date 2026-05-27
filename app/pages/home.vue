<template>
    <div class="font-semibold">
        <div class="flex justify-between items-center">
            <h1 class="text-xl">
                Bem vindo(a) ao
                <span class="text-primary text-2xl block md:inline md:text-xl">
                    Minha Grana
                </span>
            </h1>

            <Button variant="text" @click="navigateTo('/profile')">
                <OverlayBadge severity="danger" size="small">
                    <Avatar icon="pi pi-user" class="rounded-full" />
                </OverlayBadge>
            </Button>
        </div>
        <p class="mt-13">
            <span class="text-4xl capitalize">{{ currentMonth }}</span>
            <span class="mt-1 block md:text-2xl md:inline md:ml-2">
                Resumo financeiro
            </span>
        </p>

        <div class="flex gap-12 mt-12">
            <div>
                <p class="text-xl">Total Entradas</p>
                <p class="mt-3">
                    <span class="inline-block align-middle pb-4"> R$ </span>
                    <span class="ml-2 text-success inline-block text-4xl">
                        {{ curr(money, false) }}
                    </span>
                </p>
            </div>
            <div>
                <p class="text-xl">Total Saídas</p>
                <p class="mt-3">
                    <span class="inline-block align-middle pb-4"> R$ </span>
                    <span class="ml-2 text-accent inline-block text-4xl">
                        {{ curr(money, false) }}
                    </span>
                </p>
            </div>
        </div>

        <div class="mt-10 flex justify-between items-start">
            <p class="text-xl">Orçamentos</p>
            <Button variant="outlined" label="Novo Orçamento" icon="pi pi-plus">
            </Button>
        </div>
        <div class="mt-6 flex flex-wrap gap-4">
            <div
                v-for="(card, i) in cards"
                :key="i"
                class="w-full flex justify-between items-center p-5 rounded-lg md:w-[calc(33%-0.5rem)] gap-8 cursor-pointer"
                :class="`color-set-${(i % 3) + 1}`"
            >
                <div class="w-full">
                    <h2 class="text-lg font-bold">{{ card.title }}</h2>
                    <p class="text-sm md:text-xl">
                        {{ curr(card.value) }} / {{ curr(card.expected) }}
                    </p>
                    <div class="w-full border rounded-full h-2.5 mt-2">
                        <div
                            class="h-2.5 rounded-full"
                            :class="`color-set-${(i % 3) + 1}-reverse`"
                            :style="{
                                width:
                                    Math.min(
                                        (card.value / card.expected) * 100,
                                        100
                                    ) + '%'
                            }"
                        />
                    </div>
                </div>
                <div>
                    <i
                        class="pi pi-dollar"
                        style="font-size: 1.2rem; font-weight: 800"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useBudgetsStore } from '~/stores/budgets'
import { useCategoriesStore } from '~/stores/categories'
import { useTransactionsStore } from '~/stores/transactions'

definePageMeta({
    layout: 'dashboard'
})

const curr = useFormatter().currency

const money = ref(500)
const currentMonth = useMoment().format('MMMM, YYYY')

const billsStore = useBudgetsStore()
const categoriesStore = useCategoriesStore()
const transactionStore = useTransactionsStore()

const cards = ref([
    {
        title: 'Casa',
        value: 100,
        expected: 500
    },
    {
        title: 'Moto',
        value: 50,
        expected: 500
    },
    {
        title: 'Lazer',
        value: 260,
        expected: 500
    },
    {
        title: 'Pets',
        value: 450,
        expected: 500
    }
])
</script>
