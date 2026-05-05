const emptyState: Partial<Transaction> = {
    description: '',
    amount: 0,
    date: '',
    categoryId: '',
    type: 'income',
    paymentMethod: 'pix'
}

export const useTransactionsStore = defineStore('transactions', {
    state: () => ({
        transactions: [] as Transaction[],
        currentTransactionForm: { ...emptyState } as Partial<Transaction>
    }),
    actions: {
        resetCurrentForm() {
            this.currentTransactionForm = { ...emptyState }
        },
        addTransaction(form: Partial<Transaction>) {
            const transaction = {
                description: form.description || emptyState.description,
                amount: form.amount || emptyState.amount,
                date: form.date || emptyState.date,
                categoryId: form.categoryId || emptyState.categoryId,
                type: form.type || emptyState.type,
                paymentMethod: form.paymentMethod || emptyState.paymentMethod,
                id: generateUUID()
            } as Transaction
            this.transactions.push(transaction)
        },

        removeTransaction(id: string) {
            this.transactions = this.transactions.filter((t) => t.id !== id)
        },
        updateTransaction(id: string, form: Partial<Transaction>) {
            const transaction = this.transactions.find((t) => t.id === id)
            if (!transaction) return
            transaction.description =
                form.description || transaction.description
            transaction.amount = form.amount || transaction.amount
            transaction.date = form.date || transaction.date
            transaction.categoryId = form.categoryId || transaction.categoryId
            transaction.type = form.type || transaction.type
        }
    },
    persist: true
})
