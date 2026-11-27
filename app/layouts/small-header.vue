<template>
    <div
        class="box-border min-h-90vh mx-auto my-6 rounded-xl md:w-160 md:bg-surface-200 md:dark:bg-surface-700"
    >
        <div class="p-6 flex flex-col">
            <Header class="mb-8" />
            <slot />
        </div>
    </div>
</template>

<script setup>
import Header from '~/components/layout/Header.vue'
</script>
