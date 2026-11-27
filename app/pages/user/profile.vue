<template>
    <div>
        <h1 class="text-xl font-semibold mb-6">
            <BackBtn />
            Perfil
        </h1>
    </div>
</template>

<script setup>
import BackBtn from '~/components/layout/BackBtn.vue'

definePageMeta({
    layout: 'small'
})
</script>
