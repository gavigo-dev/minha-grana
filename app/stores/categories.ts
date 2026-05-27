const sugestions = {
    expense: [
        'Moradia',
        'Aluguel',
        'Financiamento Imóvel',
        'Condomínio',
        'Energia',
        'Água',
        'Gás',
        'Internet',
        'Telefone',

        'Alimentação',
        'Supermercado',
        'Restaurantes',
        'Lanches',
        'Delivery',

        'Transporte',
        'Combustível',
        'Manutenção Veículo',
        'Seguro Veículo',
        'Estacionamento',
        'Transporte Público',
        'Aplicativos de Transporte',

        'Saúde',
        'Plano de Saúde',
        'Medicamentos',
        'Consultas',
        'Exames',
        'Academia',

        'Educação',
        'Mensalidade',
        'Cursos',
        'Livros',
        'Material Escolar',

        'Lazer',
        'Viagens',
        'Eventos',
        'Cinema',
        'Jogos',
        'Hobbies',
        'Assinaturas',

        'Compras',
        'Roupas',
        'Eletrônicos',
        'Casa',
        'Móveis',

        'Financeiro',
        'Impostos',
        'Taxas Bancárias',
        'Juros',
        'Multas',

        'Dívidas',
        'Cartão de Crédito',
        'Empréstimos',
        'Parcelamentos',

        'Família',
        'Filhos',
        'Pensão',
        'Cuidados',

        'Pets',

        'Doações',
        'Igreja',

        'Trabalho',
        'Equipamentos',
        'Ferramentas',

        'Outros'
    ],
    income: [
        'Salário',
        'Freelance',
        'Renda Extra',
        'Corridas de App',
        'Entregas',

        'Negócios',
        'Vendas',
        'Comissões',

        'Investimentos',
        'Dividendos',
        'Juros',
        'Rendimentos',

        'Benefícios',
        'Vale Alimentação',
        'Vale Transporte',
        'Auxílios',

        'Reembolsos',

        'Presentes',

        'Prêmios',

        'Aluguel Recebido',

        'Restituição de Impostos',

        'Outros'
    ]
}

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
    getters: {
        sugestions: () => sugestions
    },
    persist: true
})
