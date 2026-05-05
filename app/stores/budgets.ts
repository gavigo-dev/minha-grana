export const useBudgetsStore = defineStore('budgets', {
    state: () => ({
        budgets: [] as Budget[]
    }),
    actions: {
        addBudget(payload: Partial<Budget>) {
            const bill = {
                ...payload,
                id: generateUUID()
            } as Budget
            this.budgets.push(bill)
        }
    },
    getters: {
        cards(state) {
            return state.budgets.map((bill) => ({
                title: bill.categoryId,
                value: bill.items
            }))
        }
    },
    persist: true
})
