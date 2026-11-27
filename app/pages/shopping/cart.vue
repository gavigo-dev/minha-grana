<template>
    <div class="flex justify-between items-center gap-3">
        <div class="w-full">
            <BackBtn label="Minhas listas" />
            <div class="flex justify-between items-end mt-6">
                <p class="text-3xl font-semibold">{{ list.title }}</p>
                <div>
                    <Button
                        variant="text"
                        severity="contrast"
                        icon="pi pi-pencil"
                    />
                    <Button variant="text" icon="pi pi-trash" />
                </div>
            </div>
            <Divider />
            <Card class="mt-6">
                <template #content>
                    <p>Seu limite para esta compra</p>
                    <p class="text-4xl font-semibold mt-4 mb-6">
                        {{ money(list.limit) }}
                    </p>
                    <div class="flex justify-between items-center mb-1">
                        <p class="text-sm text-emerald-500">Dentro do limite</p>
                        <p class="">
                            Atual:
                            <span class="text-lg font-semibold">
                                {{ money(list.amount) }}
                            </span>
                        </p>
                    </div>
                    <ProgressBar
                        :value="percent"
                        :show-value="false"
                        class="h-2"
                        pt:value="bg-emerald-500"
                    />
                </template>
            </Card>
        </div>
    </div>
</template>

<script setup>
import BackBtn from '~/components/layout/BackBtn.vue'

definePageMeta({
    layout: 'small-header'
})

const { money, percentValue } = useFilter()

const list = ref({
    title: '',
    limit: '',
    amount: ''
})

const percent = computed(() => {
    const r = percentValue(list.value?.amount, list.value?.limit)
    console.log(r)

    return r
})

const populate = () => {
    list.value.title = 'Lista ' + 22
    list.value.limit = 990
    list.value.amount = 230.49
}

onMounted(() => {
    populate()
})
</script>
