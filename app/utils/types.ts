export interface Category {
    id: string
    name: string
}

export interface Transaction {
    id: string
    description?: string
    amount: number
    date: string
    categoryId?: string
    paymentMethod: 'pix' | 'credit card' | 'cash'
    type: 'income' | 'expense'
}

export interface Bill extends Partial<Transaction> {
    expectedAmount: number
    dueDate: string
}

export interface Budget {
    id: string
    categoryId: string
    items: Bill[]
}
