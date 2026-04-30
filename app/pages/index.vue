<template>
    <div>
        <img src="/img/logo.png" width="80" @click="navigateTo('home')" />
        <h1>Minha Grana</h1>
        <Button>hello</Button>
    </div>
</template>

<style scoped>
div {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    color: #d84265;
}
</style>
