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
            pt:root:class="bg-gray-6 p-3 min-w-100"
            pt:mask:class="bg-gray-2/40"
            pt:header:class="text-lg font-semibold flex items-center justify-between mb-3"
            pt:pcCloseButton:root:class="bg-transparent cursor-pointer hover:text-primary"
            pt:footer:class="flex gap-2 justify-end mt-4"
            pt:pcRejectButton:root:class="bg-transparent cursor-pointer hover:text-primary w-20"
            pt:pcAcceptButton:root:class="p-2 cursor-pointer flex items-center justify-center bg-primary text-sm text-gray-6 font-semibold uppercase rounded hover:bg-primary/80 w-20"
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
        routeName: '/settings'
    }
]
</script>
