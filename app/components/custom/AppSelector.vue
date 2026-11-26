<template>
    <div class="inline-flex gap-2 items-center">
        <Button
            v-ripple
            :icon="currentAppConfig.icon"
            variant="outlined"
            :class="[currentAppConfig.iconClass, currentAppConfig.cardClass]"
            @click="visible = true"
        />
        <p>{{ currentAppConfig.label }}</p>

        <Dialog
            v-model:visible="visible"
            modal
            :closable="false"
            dismissable-mask
            class="w-5/6 md:w-200"
        >
            <div class="flex flex-col gap-4 items-center">
                <Button
                    class="w-full"
                    variant="text"
                    severity="contrast"
                    v-ripple
                    v-for="app in apps"
                    :key="app.value"
                    @click="selectApp(app.value)"
                >
                    <Card
                        class="text-left w-full"
                        :pt="{ root: app.cardClass }"
                    >
                        <template #content>
                            <div class="flex items-center justify-between">
                                <div>
                                    <div class="flex items-center gap-2 mb-2">
                                        <div
                                            :class="app.iconClass"
                                            class="py-1 px-2 rounded"
                                        >
                                            <i :class="app.icon"></i>
                                        </div>
                                        <p class="font-semibold">
                                            {{ app.label }}
                                        </p>
                                    </div>
                                    <p class="text-sm">
                                        {{ app.description }}
                                    </p>
                                </div>
                                <i class="pi pi-angle-right text-2xl" />
                            </div>
                        </template>
                    </Card>
                </Button>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
const apps = [
    {
        label: 'Planejador financeiro',
        description: 'Organize suas contas e tire seus planos do papel.',
        icon: 'pi pi-wallet',
        iconClass: 'bg-primary-200! text-primary-500!',
        cardClass: 'border-primary-200 border bg-primary-50',
        value: 'planner',
        color: 'primary',
        routePath: '/planner/home'
    },
    {
        label: 'Assistente de compras',
        description: 'Planeje sua lista e compre o que faz sentido para você.',
        icon: 'pi pi-shopping-cart',
        iconClass: 'bg-amber-200! text-amber-500!',
        cardClass: 'border-amber-200 border bg-amber-50',
        value: 'shopping',
        color: 'amber',
        routePath: '/planner/logs'
    },
    {
        label: 'Calculadora',
        description: 'Faça as contas do dia a dia e decida com mais clareza.',
        icon: 'pi pi-calculator',
        iconClass: 'bg-indigo-200! text-indigo-500!',
        cardClass: 'border-indigo-200 border bg-indigo-50',
        value: 'calculator',
        color: 'indigo',
        routePath: '/planner/reports'
    }
]

const visible = ref(false)

const currentApp = ref('planner')

const currentAppConfig = computed(() =>
    apps.find((app) => app.value === currentApp.value)
)

const selectApp = (app) => {
    currentApp.value = app
    visible.value = false
    navigateTo(currentAppConfig.value.routePath)
}
</script>
