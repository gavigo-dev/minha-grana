<template>
    <div class="h-full flex flex-col justify-between">
        <div>
            <h1 class="text-3xl font-semibold">Minhas listas</h1>
            <p class="text-sm mb-6">
                Retome seus planos e relembre suas compras.
            </p>
            <InputGroup>
                <InputGroupAddon>
                    <Button
                        severity="contrast"
                        variant="text"
                        icon="pi pi-search"
                    />
                </InputGroupAddon>
                <InputText placeholder="Buscar uma lista" />
            </InputGroup>
            <p class="my-6">Mais recentes</p>

            <Button
                variant="text"
                severity="contrast"
                v-for="(list, i) in lists"
                :key="i"
                class="w-full my-3 p-0 rounded-2xl"
            >
                <Card class="w-full">
                    <template #content>
                        <div class="flex justify-between items-center">
                            <p class="font-semibold text-left">
                                {{ list.title }}
                            </p>
                            <Tag
                                v-if="list.status"
                                :severity="list.status.color"
                                :value="list.status.label"
                            />
                        </div>
                        <div class="flex justify-between items-center mt-2">
                            <p class="text-sm">{{ list.itemsCount }} itens</p>
                            <p class="font-semibold text-xl">
                                {{ money(list.amount) }}
                                <i class="pi pi-angle-right"></i>
                            </p>
                        </div>
                    </template>
                </Card>
            </Button>
        </div>
        <Button
            class="w-full mt-12"
            icon="pi pi-plus"
            label="Nova lista"
            size="large"
            @click="navigateTo('/shopping/cart')"
        />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'small-header'
})
const { money } = useFilter()

const lists = ref([
    {
        title: 'Compras da semana',
        itemsCount: '4',
        status: {
            label: 'Em andamento',
            color: 'warn',
            value: 'pending'
        },
        amount: 66.9
    },
    {
        title: 'Reposição da casa',
        itemsCount: '6',
        status: {
            label: 'Finalizado',
            color: 'success',
            value: 'finished'
        },
        amount: 143.2
    },
    {
        title: 'Mercado do mês',
        itemsCount: '89',
        status: {
            label: 'Finalizado',
            color: 'success',
            value: 'finished'
        },
        amount: 312.4
    }
])
</script>
