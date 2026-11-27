<template>
    <div
        class="h-screen bg-surface-200 dark:bg-surface-800 px-6 py-8 relative flex flex-col transition-width duration-300 z-50"
        :class="expanded ? 'w-60' : 'w-25'"
    >
        <div class="h-8">
            <img
                v-show="expanded"
                key="wide"
                :src="'/img/logo-outlined-wide.png'"
                height="32px"
                alt="Logo"
                class="absolute"
            />
            <img
                v-show="!expanded"
                key="slim"
                :src="'/img/logo-outlined.png'"
                height="32px"
                alt="Logo"
                class="absolute"
            />
        </div>

        <div
            class="absolute top-20 -right-3 bg-inherit! rounded-full"
            :class="expanded ? '' : ''"
        >
            <Button
                v-ripple
                variant="outlined"
                rounded
                severity="contrast"
                size="small"
                :icon="
                    expanded
                        ? 'pi pi-angle-double-left'
                        : 'pi pi-angle-double-right'
                "
                @click="expanded = !expanded"
            />
        </div>

        <div class="overflow-hidden mt-18 h-100">
            <Menu
                :model="items"
                :pt="{
                    root: 'bg-transparent border-0',
                    itemContent:
                        'hover:bg-op-darken dark:hover:bg-op-lighten hover:cursor-pointer'
                }"
            >
                <template #item="{ item }" class="">
                    <a
                        v-ripple
                        @click="navigateTo(item.routeName)"
                        :class="[
                            expanded ? 'w-full' : 'w-fit',
                            item.routeName === route.name &&
                                'text-primary font-semibold'
                        ]"
                        class="h-10 flex items-center my-2 gap-4 px-4 py-2! rounded text-gray-1 dark:text-gray-4"
                    >
                        <i :class="item.icon" style="font-size: 1.2rem" />

                        <transition name="fade" mode="out-in">
                            <span v-if="expanded" :key="item.label">
                                {{ item.label }}
                            </span>
                        </transition>
                    </a>
                </template>
            </Menu>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()

const props = defineProps({
    items: {
        type: Array,
        required: true
    }
})

const expanded = ref(true)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
