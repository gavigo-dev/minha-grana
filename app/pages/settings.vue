<template>
    <div class="max-w-150">
        <h1 class="text-2xl font-semibold">Configurações</h1>

        <div class="mt-12 flex justify-between items-center">
            <h2 class="text-xl font-semibold">Categorias</h2>
            <Button
                label="Adicionar"
                icon="pi pi-plus"
                @click="configureCategory()"
            />
        </div>

        <div class="mt-6">
            <DataTable :value="categoriesStore.categories">
                <Column field="name" />
                <Column body-class="table-fixed w-20">
                    <template #body="{ data }">
                        <div class="flex ml-4">
                            <Button
                                icon="pi pi-pencil"
                                variant="text"
                                class="p-button-danger"
                                @click="configureCategory(data)"
                            />
                            <Button
                                icon="pi pi-trash"
                                variant="text"
                                class="p-button-danger"
                                @click="confirmRemove(data.id)"
                            />
                        </div>
                    </template>
                </Column>

                <template #empty>
                    <p class="text-left text-gray-500">
                        Nenhuma categoria cadastrada.
                    </p>
                </template>
            </DataTable>
        </div>

        <ModalConfigCategory
            v-model="categoryName"
            v-model:visible="showConfigModal"
            :editing="editionActive"
            @submit="editionActive ? updateCategory() : addCategory()"
        />
    </div>
</template>

<script setup lang="ts">
import ModalConfigCategory from '~/components/settings/ModalConfigCategory.vue'
import { useCategoriesStore } from '~/stores/categories'

definePageMeta({
    layout: 'dashboard'
})

const confirm = useConfirm()
const categoriesStore = useCategoriesStore()

const showConfigModal = ref(false)
const editionActive = ref(false)

const categoryName = ref('')
const categoryId = ref('')

function configureCategory(category?: { id: string; name: string }) {
    categoryName.value = category?.name || ''
    categoryId.value = category?.id || ''
    editionActive.value = !!category
    showConfigModal.value = true
}

function addCategory() {
    if (categoryName.value.trim() === '') return

    categoriesStore.addCategory(categoryName.value)
    categoryName.value = ''
}
function updateCategory() {
    if (categoryName.value.trim() === '') return

    categoriesStore.updateCategory(categoryId.value, categoryName.value)
    categoryName.value = ''
    categoryId.value = ''

    showConfigModal.value = false
}

function removeCategory(id: string) {
    categoriesStore.removeCategory(id)
}

const confirmRemove = (id: string) => {
    confirm.require({
        message: 'Tem certeza que deseja remover esta categoria?',
        header: 'Confirmação',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => removeCategory(id)
    })
}
</script>
