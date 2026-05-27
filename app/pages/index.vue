<template>
    <div class="flex flex-col justify-center items-center h-screen -mt-20 mx-10">
        <img src="/img/logo.png" width="80" @click="navigateTo('home')" />
        <h1 class="text-2xl mt-6 mb-20 font-semibold text-primary">Minha Grana</h1>

        <LoginForm/>
    </div>
</template>

<script setup>
import LoginForm from '~/components/auth/LoginForm.vue';

onMounted(() => {
    // setTimeout(() => {
    //     navigateTo('/home')
    // }, 2000)
})
</script>

