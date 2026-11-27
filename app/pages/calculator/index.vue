<template>
    <div>
        <h1 class="text-3xl font-semibold mb-10">Calculadora</h1>

        <Card>
            <template #content>
                <input
                    ref="expressionInput"
                    v-model="interimExpression"
                    type="text"
                    inputmode="decimal"
                    class="w-full h-12 text-5xl font-semibold text-right my-4 bg-transparent outline-none"
                    placeholder="0"
                    @input="updateResult"
                    @click="saveCursor"
                    @keyup="saveCursor"
                    @select="saveCursor"
                />

                <p class="text-xl text-right my-4 min-h-7">
                    {{ result }}
                </p>

                <p v-if="lastExpression" class="text-right text-sm mb-4">
                    Resultado
                </p>

                <div class="grid grid-cols-4 gap-2">
                    <Button
                        v-for="(btn, i) in basicButtons"
                        :key="i"
                        :label="btn.label"
                        :icon="btn.icon"
                        :severity="btn.severity"
                        :class="btn.class"
                        class="text-2xl py-3 w-full select-none touch-none"
                        @click="btn.action"
                        @pointerdown="btn.onPointerDown?.($event)"
                        @pointerup="btn.onPointerUp?.($event)"
                        @pointerleave="btn.onPointerLeave?.($event)"
                        @pointercancel="btn.onPointerUp?.($event)"
                        @contextmenu.prevent
                    />
                </div>
            </template>
        </Card>

        <!-- Histórico -->
        <section v-if="history.length" class="mt-8">
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-semibold">Histórico</h2>

                <Button
                    label="Limpar"
                    severity="secondary"
                    text
                    size="small"
                    @click="history = []"
                />
            </div>

            <div class="flex flex-col gap-3">
                <Card
                    v-for="item in history"
                    :key="item.id"
                    class="cursor-pointer"
                >
                    <template #content>
                        <div class="flex justify-between items-center">
                            <div @click="restoreHistory(item)" class="w-full">
                                <p class="text-sm text-surface-500 mb-2">
                                    {{ item.expression }}
                                </p>

                                <p class="text-2xl font-semibold">
                                    {{ item.result }}
                                </p>
                            </div>
                            <div>
                                <Button
                                    variant="text"
                                    icon="pi pi-trash"
                                    severity="contrast"
                                    @click.stop="removeHistory(item.id)"
                                />
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
        </section>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'small-header'
})

const expressionInput = ref(null)

const interimExpression = ref('')
const result = ref('')
const lastExpression = ref('')

const { state: history } = useStorage('minha-grana-calculator-history', [])

const cursorPosition = ref({
    start: 0,
    end: 0
})

// Controle do botão de apagar
let deleteInterval = null

const saveCursor = () => {
    const input = expressionInput.value

    if (!input) return

    cursorPosition.value = {
        start: input.selectionStart ?? 0,
        end: input.selectionEnd ?? 0
    }
}

const restoreCursor = (position) => {
    nextTick(() => {
        const input = expressionInput.value

        if (!input) return

        input.focus()
        input.setSelectionRange(position, position)

        saveCursor()
    })
}

// Insere texto na posição do cursor
const insertText = (text) => {
    const input = expressionInput.value

    const start = input?.selectionStart ?? cursorPosition.value.start
    const end = input?.selectionEnd ?? cursorPosition.value.end

    const expression = interimExpression.value

    interimExpression.value =
        expression.slice(0, start) + text + expression.slice(end)

    restoreCursor(start + text.length)
    updateResult()
}

// Apaga caractere anterior ou trecho selecionado
const backspace = () => {
    const input = expressionInput.value

    const start = input?.selectionStart ?? cursorPosition.value.start
    const end = input?.selectionEnd ?? cursorPosition.value.end

    if (start === end && start === 0) return

    const expression = interimExpression.value

    if (start === end) {
        interimExpression.value =
            expression.slice(0, start - 1) + expression.slice(end)

        restoreCursor(start - 1)
    } else {
        interimExpression.value =
            expression.slice(0, start) + expression.slice(end)

        restoreCursor(start)
    }

    updateResult()
}

// Repetição do backspace
const startDelete = (event) => {
    // Evita iniciar múltiplos intervalos
    if (deleteInterval) return

    // Evita que o navegador selecione texto ou execute ações nativas
    event.preventDefault()

    // Primeiro apagamento imediato
    backspace()

    // Repetição enquanto pressionado
    deleteInterval = setInterval(() => {
        backspace()
    }, 100)
}

const stopDelete = () => {
    if (!deleteInterval) return

    clearInterval(deleteInterval)
    deleteInterval = null
}

// Limpa calculadora
const clear = () => {
    interimExpression.value = ''
    result.value = ''
    lastExpression.value = ''

    restoreCursor(0)
}

// Normaliza expressão
const normalizeExpression = (expression) => {
    return expression
        .replace(/,/g, '.')
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/\s/g, '')
        .replace(/(\d|\))(?=\()/g, '$1*')
        .replace(/\)(?=\d|\()/g, ')*')
}

// Avalia expressão
const calculate = (expression) => {
    const normalized = normalizeExpression(expression)

    if (!normalized) return null

    if (!/^[\d.+\-*\/()%()]+$/.test(normalized)) {
        return null
    }

    try {
        const value = Function(`"use strict"; return (${normalized})`)()

        if (typeof value !== 'number' || !Number.isFinite(value)) {
            return null
        }

        return Number.parseFloat(value.toPrecision(12))
    } catch {
        return null
    }
}

// Formata resultado
const formatResult = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        maximumFractionDigits: 10
    }).format(value)
}

// Atualiza resultado provisório
const updateResult = () => {
    const value = calculate(interimExpression.value)

    result.value = value === null ? '' : formatResult(value)
}

// Insere parênteses automaticamente
const insertParenthesis = () => {
    const expression = interimExpression.value
    const input = expressionInput.value
    const position = input?.selectionStart ?? cursorPosition.value.start

    const beforeCursor = expression.slice(0, position)
    const openCount = (beforeCursor.match(/\(/g) || []).length
    const closeCount = (beforeCursor.match(/\)/g) || []).length

    const shouldClose = openCount > closeCount

    insertText(shouldClose ? ')' : '(')
}

// Percentual
const percentage = () => {
    const expression = interimExpression.value
    const input = expressionInput.value

    const position = input?.selectionStart ?? cursorPosition.value.start

    const before = expression.slice(0, position)
    const match = before.match(/(\d+(?:[.,]\d*)?)$/)

    if (!match) return

    const end = position

    if (expression[end] === '%') return

    interimExpression.value =
        expression.slice(0, end) + '%' + expression.slice(end)

    restoreCursor(position + 1)
    updateResult()
}

// Executa cálculo e adiciona histórico
const evaluate = () => {
    const expression = interimExpression.value.trim()

    if (!expression) return

    const value = calculate(expression)

    if (value === null) return

    const formattedResult = formatResult(value)

    history.value.unshift({
        id: Date.now() + Math.random(),
        expression,
        result: formattedResult,
        value
    })

    lastExpression.value = expression

    interimExpression.value = String(value).replace('.', ',')

    result.value = formattedResult

    restoreCursor(interimExpression.value.length)
}

// Restaura histórico
const restoreHistory = (item) => {
    interimExpression.value = item.expression
    lastExpression.value = item.expression

    result.value = item.result

    restoreCursor(item.expression.length)
}

// Remove item do histórico
const removeHistory = (id) => {
    history.value = history.value.filter((item) => item.id !== id)
}

onMounted(() => {
    window.addEventListener('pointerup', stopDelete)
    window.addEventListener('pointercancel', stopDelete)
})

// Botões
const basicButtons = [
    {
        label: 'AC',
        action: clear,
        severity: 'secondary',
        class: ''
    },
    {
        label: '( )',
        action: insertParenthesis,
        severity: 'secondary',
        class: ''
    },
    {
        label: '%',
        action: percentage,
        severity: 'secondary',
        class: ''
    },
    {
        label: '÷',
        action: () => insertText('÷'),
        severity: 'secondary',
        class: 'panel-primary'
    },
    {
        label: '7',
        action: () => insertText('7'),
        severity: 'secondary',
        class: ''
    },
    {
        label: '8',
        action: () => insertText('8'),
        severity: 'secondary',
        class: ''
    },
    {
        label: '9',
        action: () => insertText('9'),
        severity: 'secondary',
        class: ''
    },
    {
        label: '×',
        action: () => insertText('×'),
        severity: 'secondary',
        class: 'panel-primary'
    },
    {
        label: '4',
        action: () => insertText('4'),
        severity: 'secondary',
        class: ''
    },
    {
        label: '5',
        action: () => insertText('5'),
        severity: 'secondary',
        class: ''
    },
    {
        label: '6',
        action: () => insertText('6'),
        severity: 'secondary',
        class: ''
    },
    {
        label: '-',
        action: () => insertText('-'),
        severity: 'secondary',
        class: 'panel-primary'
    },
    {
        label: '1',
        action: () => insertText('1'),
        severity: 'secondary',
        class: ''
    },
    {
        label: '2',
        action: () => insertText('2'),
        severity: 'secondary',
        class: ''
    },
    {
        label: '3',
        action: () => insertText('3'),
        severity: 'secondary',
        class: ''
    },
    {
        label: '+',
        action: () => insertText('+'),
        severity: 'secondary',
        class: 'panel-primary'
    },
    {
        label: '0',
        action: () => insertText('0'),
        severity: 'secondary',
        class: ''
    },
    {
        label: ',',
        action: () => insertText(','),
        severity: 'secondary',
        class: ''
    },
    {
        icon: 'pi pi-delete-left',
        action: () => {},
        onPointerDown: startDelete,
        onPointerUp: stopDelete,
        onPointerLeave: stopDelete,
        severity: 'secondary',
        class: ''
    },
    {
        label: '=',
        action: evaluate,
        severity: 'primary',
        class: ''
    }
]
</script>
