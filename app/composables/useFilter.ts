export const useFilter = () => {
    const money = (num: any) => {
        const float = parseFloat(num)
        const decimal = (isNaN(float) ? 0 : float).toFixed(2).replace('.', ',')
        return `R$ ${decimal}`
    }
    const percentValue = (part: any, total: any) => {
        const result = (parseFloat(part) / parseFloat(total)) * 100
        return parseFloat((isNaN(result) ? 0 : result).toFixed(2))
    }

    return {
        money,
        percentValue
    }
}
