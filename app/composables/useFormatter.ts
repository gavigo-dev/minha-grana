export default function useFormatter() {
    return {
        currency(value: number, currency = true) {
            return (currency ? ' R$ ' : '') + value.toFixed(2).replace('.', ',')
        }
    }
}
