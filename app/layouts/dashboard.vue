<template>
    <div class="flex">
        <div class="hidden md:block">
            <SideBar :items="items" />
            <div class="ml-25 px-14 py-12">
                <slot />
            </div>
        </div>
        <div class="md:hidden">
            <div class="px-6 pb-6 pt-12 mb-15">
                <slot />
            </div>
            <TabBar :items="items" />
        </div>
    </div>
</template>

<script setup lang="ts">
import SideBar from '~/components/DS/SideBar.vue'
import TabBar from '~/components/DS/TabBar.vue'

const items = [
    {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routeName: 'home'
    },
    {
        label: 'Histórico',
        icon: 'pi pi-file',
        routeName: ''
    },
    {
        label: 'Relatórios',
        icon: 'pi pi-chart-bar',
        routeName: ''
    },
    {
        label: 'Configurações',
        icon: 'pi pi-cog',
        routeName: ''
    }
]
</script>
