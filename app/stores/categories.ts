export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories: [] as Category[]
    }),
    actions: {
        addCategory(name: string) {
            if (this.categories.some((c) => c.name === name)) return

            const category = {
                name,
                id: generateUUID()
            } as Category
            this.categories.push(category)
        },
        removeCategory(id: string) {
            this.categories = this.categories.filter((c) => c.id !== id)
        },
        updateCategory(id: string, name: string) {
            const category = this.categories.find((c) => c.id === id)
            if (!category) return
            category.name = name
        }
    },
    persist: true
})
