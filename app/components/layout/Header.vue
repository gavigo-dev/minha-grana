<template>
    <div class="flex justify-between">
        <div class="flex gap-2 items-center">
            <AppSelector />
        </div>
        <div class="flex items-center">
            <UserAvatar />
            <Button
                v-ripple
                variant="text"
                severity="contrast"
                size="small"
                icon="pi pi-bars"
                @click="navigateTo('/settings')"
            />
        </div>
    </div>
</template>

<script setup>
import AppSelector from '../custom/AppSelector.vue'
import UserAvatar from '../user/UserAvatar.vue'
</script>
