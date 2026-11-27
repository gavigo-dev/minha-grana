<template>
    <div
        class="dark:bg-surface-800 h-15 fixed bottom-0 left-0 right-0 flex items-center justify-around px-8 border-t-2 border-gray-5 dark:border-gray-2"
    >
        <a
            v-ripple
            class="p-1 w-full"
            v-for="item in items"
            :key="item.label"
            @click="navigateTo(item.routeName)"
        >
            <div
                :class="[isItemActive(item) && 'text-primary']"
                class="flex flex-col items-center text-gray-1 dark:text-gray-4 hover:text-primary transition-colors duration-300"
            >
                <i :class="item.icon" style="font-size: 1.3rem" />
                <p class="text-xs mt-1">{{ item.label }}</p>
            </div>
        </a>
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

const isItemActive = (item) => {
    return item.routeName === route.path
}
</script>
