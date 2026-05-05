import moment from 'moment/min/moment-with-locales'

moment.locale('pt-br')

export default function useMoment(...args: Parameters<typeof moment>) {
    return moment(...args)
}
