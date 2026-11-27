<template>
    <div class="flex gap-2 items-center">
        <h1 v-if="!isEditing" class="text-2xl font-semibold">
            {{ model }}
        </h1>

        <Form
            v-else
            v-slot="$form"
            as="form"
            :key="formKey"
            :initialValues="initialValues"
            :resolver="resolver"
            @submit="saveTitle"
            class="flex flex-col gap-1"
        >
            <InputText
                ref="input"
                name="title"
                :invalid="!!$form.title?.invalid"
                @keydown.esc.prevent="cancelEdit"
                @blur="cancelEdit"
            />

            <Message
                v-if="$form.title?.invalid"
                severity="error"
                size="small"
                variant="simple"
            >
                {{ $form.title.error.message }}
            </Message>
        </Form>

        <Button
            severity="contrast"
            variant="text"
            :icon="isEditing ? 'pi pi-check' : 'pi pi-pencil'"
            :type="isEditing ? 'submit' : 'button'"
            @click="isEditing ? submitForm() : startEdit()"
        />
    </div>
</template>

<script setup>
import { Form } from '@primevue/forms'
import Message from 'primevue/message'

const model = defineModel({ default: '' })

const input = ref(null)
const isEditing = ref(false)
const formKey = ref(0)

const initialValues = computed(() => ({
    title: model.value
}))

const resolver = ({ values }) => {
    const errors = {}
    const title = String(values.title ?? '').trim()

    if (!title) {
        errors.title = [{ message: 'O título não pode ficar vazio.' }]
    } else if (title.length > 80) {
        errors.title = [
            { message: 'O título deve ter no máximo 80 caracteres.' }
        ]
    }

    return { values, errors }
}

async function startEdit() {
    formKey.value++
    isEditing.value = true

    await nextTick()
    input.value?.$el?.focus()
}

function submitForm() {
    const form = input.value?.$el?.closest('form')
    form?.requestSubmit()
}

function saveTitle({ valid, values }) {
    if (!valid) return

    model.value = values.title.trim()
    isEditing.value = false
}

function cancelEdit() {
    isEditing.value = false
}
</script>
