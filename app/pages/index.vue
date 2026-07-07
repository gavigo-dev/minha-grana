<template>
    <div class="md:flex md:flex-row">
        <div class="hidden md:block md:w-2/3">
            <img src="/img/piggy-bank.jpg" class="h-full object-cover" />
            <p class="absolute bottom-3 left-3 text-white">
                Foto de <a href="https://unsplash.com/pt-br/@andretaissin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andre Taissin</a> na <a href="https://unsplash.com/pt-br/fotografias/banco-de-moedas-de-porco-cor-de-rosa-na-mesa-de-madeira-marrom-5OUMf1Mr5pU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </p>
      
        </div>
        <div class="flex flex-col justify-center items-center h-screen -mt-20 mx-10 md:w-1/3 md:mt-0">
            <img src="/img/logo.png" width="80" @click="navigateTo('home')" />
            <h1 class="text-2xl mt-6 mb-10 font-semibold text-primary">Minha Grana</h1>

            <LoginForm/>
        </div>
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

