<template>
    <div class="w-full flex flex-col justify-center gap-8 text-primary">
        <div>
            <p class="text-lg font-semibold mb-2">Email</p>
            <InputText v-model="username" />
        </div>
        <div>
            <p class="text-lg font-semibold mb-2">Senha</p>
            <InputGroup variant="text">
                <InputText v-model="password" type="text" />
                <InputGroupAddon>
                    <i class="pi pi-map"></i>
                </InputGroupAddon>
            </InputGroup>
        </div>
    </div>
</template>

<script setup>
const username = ref('')
const password = ref('')
</script>