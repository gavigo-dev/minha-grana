<template>
    <div class="">
        <div class="hidden md:flex w-full">
            <SideBar :items="items" :action-item="actionItem" />
            <div class="px-14 py-12 w-full">
                <Header class="mb-10" />
                <slot />
            </div>
        </div>
        <div class="md:hidden w-full">
            <div class="px-6 pb-6 pt-8 mb-15">
                <Header class="mb-10" />
                <slot />
            </div>
            <TabBar :items="items" :action-item="actionItem" />
        </div>
    </div>
</template>

<script setup>
import SideBar from '~/components/layout/SideBar.vue'
import TabBar from '~/components/layout/TabBar.vue'
import Header from '~/components/layout/Header.vue'

const items = [
    {
        label: 'Resumo',
        icon: 'pi pi-home',
        routeName: '/planner/home'
    },
    {
        label: 'Histórico',
        icon: 'pi pi-calendar-clock',
        routeName: '/planner/logs'
    },
    {
        label: 'Análises',
        icon: 'pi pi-chart-bar',
        routeName: '/planner/reports'
    }
]

const actionItem = {
    label: 'Novo item',
    icon: 'pi pi-plus',
    routeName: '/planner/transaction'
}
</script>
