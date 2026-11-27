<template>
    <div class="mt-12 md:max-w-200 mx-auto">
        <img src="/img/logo-outlined-wide.png" class="w-30" />
        <div class="my-10">
            <p class="text-2xl font-semibold">Sua grana, mais leve.</p>
            <p>Entre para cuidar do seu dinheiro, um passo de cada vez.</p>
        </div>
        <Card>
            <template #content>
                <p class="font-semibold my-5">E-mail</p>
                <InputText
                    placeholder="seu.email@exemplo.com"
                    class="w-full py-3"
                />
                <p class="font-semibold my-5">Senha</p>
                <InputGroup>
                    <InputText placeholder="Digite sua senha" class="py-3" />
                    <InputGroupAddon>
                        <Button
                            :icon="
                                showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'
                            "
                            variant="text"
                            @click="showPassword = !showPassword"
                        />
                    </InputGroupAddon>
                </InputGroup>

                <div class="my-4 text-right">
                    <Button
                        variant="text"
                        class="text-sm"
                        label="Esqueci minha senha"
                    />
                </div>

                <Button
                    class="w-full py-4 mb-3"
                    label="Entrar"
                    @click="navigateTo('/planner/home')"
                />
            </template>
        </Card>

        <div class="text-center my-6">
            Ainda não tem uma conta?
            <Button variant="text" class="px-1" label="Criar minha conta" />
        </div>

        <div class="panel-emerald p-4 rounded-2xl text-sm">
            <p class="font-semibold">Sua tranquilidade vem primeiro.</p>
            <p>Seus dados protegidos. Sua grana com você.</p>
        </div>
    </div>
</template>

<script setup>
const showPassword = ref(false)
</script>
