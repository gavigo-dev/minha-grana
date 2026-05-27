<template>
    <div
        class="bg-gray-6 h-screen px-6 py-8 fixed flex flex-col transition-width duration-300 z-50"
        :class="expanded ? 'w-60' : 'w-25'"
        @mouseenter="expanded = true"
        @mouseleave="expanded = false"
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

        <Menu
            :model="items"
            class="mt-12 bg-transparent! border-none"
            :pt="{ itemContent: 'bg-transparent!' }"
        >
            <template #item="{ item }">
                <a
                    @click="navigateTo(item.routeName)"
                    :class="[
                        expanded ? 'w-full' : 'w-fit',
                        item.routeName === route.path &&
                            'text-primary font-semibold'
                    ]"
                    class="h-8 flex items-center my-2 gap-4 px-4 py-2 text-gray-1 hover:bg-op-darken cursor-pointer"
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

        <div class="h-full flex flex-col items-center justify-end">
            <Button
                class="mb-4 bg-primary! text-secondary! h-8! px-2! py-2! transition-all! duration-300!"
                :class="expanded ? 'w-full rounded!' : 'w-fit rounded-3xl!'"
                @click="navigateTo('/transaction/create')"
            >
                <i class="pi pi-plus" />
                <transition name="fade" mode="out-in" :duration="50">
                    <span v-if="expanded" class="ml-2" key="btn">
                        Novo item
                    </span>
                </transition>
            </Button>
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

const expanded = ref(false)
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
