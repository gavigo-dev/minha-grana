<template>
    <div class="flex flex-col gap-4 align-center justify-center">
        <img src="/img/logo-outlined-wide.png" class="py-20 w-30 mx-auto" />

        <Button
            variant="outlined"
            label="Planejador Financeiro"
            icon="pi pi-book"
            @click="navigateTo('/planner/home')"
        >
        </Button>
        <Button
            variant="outlined"
            label="Assistente de compras"
            icon="pi pi-shopping-cart"
        >
        </Button>
    </div>
</template>
