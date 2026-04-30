<template>
    <div
        class="h-15 fixed bottom-0 left-0 right-0 bg-gray-6 flex items-center justify-around px-8 border-t-2 border-gray-5"
    >
        <a
            v-for="item in finalItems"
            :key="item.label"
            @click="navigateTo(item.routeName)"
        >
            <div
                v-if="item.middle"
                class="bg-primary rounded-4xl text-secondary h-10 w-10 p-2.5"
            >
                <i :class="item.icon" style="font-size: 1.3rem" />
            </div>
            <div
                v-else
                :class="[item.routeName === route.name && 'text-primary']"
                class="flex flex-col items-center text-gray-1 hover:text-primary transition-colors duration-300"
            >
                <i :class="item.icon" style="font-size: 1.3rem" />
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

const finalItems = computed(() => {
    return [
        ...props.items.slice(0, 2),
        {
            middle: true,
            label: '',
            icon: 'pi pi-plus',
            routeName: ''
        },
        ...props.items.slice(-2)
    ]
})
</script>
