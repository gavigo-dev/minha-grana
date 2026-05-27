<template>
    <div class="flex">
        <div class="hidden md:block w-full">
            <SideBar :items="items" />
            <div class="pl-39 pr-14 py-12 w-full">
                <slot />
            </div>
        </div>
        <div class="md:hidden w-full">
            <div class="px-6 pb-6 pt-12 mb-15">
                <slot />
            </div>
            <TabBar :items="items" />
        </div>

        <ConfirmDialog
            pt:root:class="bg-gray-6 min-w-100"
            pt:mask:class="bg-gray-2/40"
            pt:pcRejectButton:root:class="bg-transparent text-primary hover:text-primary/80"
        />
        <!-- <ConfirmDialog /> -->
    </div>
</template>

<script setup lang="ts">
import type ConfirmDialog from 'primevue/confirmdialog'
import SideBar from '~/components/DS/SideBar.vue'
import TabBar from '~/components/DS/TabBar.vue'

const items = [
    {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routeName: '/home'
    },
    {
        label: 'Histórico',
        icon: 'pi pi-file-check',
        routeName: '/history'
    },
    {
        label: 'Relatórios',
        icon: 'pi pi-chart-bar',
        routeName: '/report'
    },
    {
        label: 'Configurações',
        icon: 'pi pi-cog',
        routeName: '/settings'
    }
]
</script>
