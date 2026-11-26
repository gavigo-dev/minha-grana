<template>
    <Button
        variant="text"
        severity="contrast"
        icon="pi pi-arrow-left"
        @click="goBack"
    />
</template>

<script setup>
const router = useRouter()
const goBack = () => {
    router.go(-1)
}
</script>
