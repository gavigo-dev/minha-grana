<template>
    <div class="w-full">
        <h1 class="text-xl font-semibold mb-6">
            <BackBtn />
            Configurações
        </h1>
        <Divider />
        <div class="my-6 md:max-w-150">
            <p class="font-medium mb-6">Perfil</p>
            <a
                class="text-primary font-medium"
                @click="navigateTo('/user/profile')"
            >
                Editar perfil
                <i class="pi pi-arrow-right text-xs"></i>
            </a>
        </div>
        <Divider />
        <div class="my-6 md:max-w-150">
            <p class="font-medium mb-6">Preferências</p>
            <ThemeModeSelector />
        </div>
        <Divider />
        <div class="my-6 md:max-w-150">
            <a class="text-lg text-primary" @click="navigateTo('/')">
                Sair da conta
            </a>
        </div>
    </div>
</template>

<script setup>
import ThemeModeSelector from '~/components/custom/ThemeModeSelector.vue'
import BackBtn from '~/components/layout/BackBtn.vue'

definePageMeta({
    layout: 'small'
})
</script>
