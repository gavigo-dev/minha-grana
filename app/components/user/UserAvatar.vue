<template>
    <div>
        <Button
            v-ripple
            severity="contrast"
            variant="text"
            rounded
            @click="navigateTo('/user/profile')"
        >
            <Avatar
                :image="imageSrc"
                :label="label"
                class="bg-primary-100 text-primary"
                shape="circle"
            />
        </Button>
    </div>
</template>
<script setup>
const imageSrc = ref('')
const label = ref('G')
</script>
