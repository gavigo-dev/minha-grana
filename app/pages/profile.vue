<template>
    <div>
        <div class="flex items-center justify-start font-semibold">
            <Button
                icon="pi pi-arrow-left"
                class="-ml-4 text-current"
                variant="text"
                @click="router.back()"
            />
            <h1 class="text-2xl">Meu perfil</h1>
        </div>

        <div class="my-5">
            <Button variant="outlined" class="w-full" @click="navigateTo('/')">
                SAIR DO APP
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'dashboard'
})
const router = useRouter()
</script>
