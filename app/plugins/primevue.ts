import PrimeVue, { type PrimeVueConfiguration } from 'primevue/config'
import Locale from 'primelocale/pt-BR.json'
import { root } from 'postcss'

const ButtonPT = {
    root: ({ props, context }: { props: any; context: any }) => {
        let classes = 'p-2 cursor-pointer flex items-center justify-center '

        if (context.disabled) {
            classes += 'bg-gray-4 cursor-not-allowed opacity-50 '
            return classes
        }

        switch (props.variant) {
            case 'outlined':
                classes +=
                    'border! border-primary! text-primary hover:bg-primary hover:text-light rounded '
                break
            case 'text':
                classes += 'hover:text-primary'
                break
            default:
                classes +=
                    'bg-primary text-sm text-gray-6 font-semibold uppercase rounded hover:bg-primary/80'
                break
        }
        return classes
    },
    icon: ({ props }: { props: any }) => {
        return props.label ? 'mr-2' : 'm-0'
    }
}

const InputPT = {
    root: ({ props }: { props: any }) => {
        let classes =
            'w-full py-1 border-gray-2 focus-visible:outline-0 text-primary font-bold placeholder:text-gray-3 placeholder:font-normal '
        switch (props.variant) {
            case 'outlined':
                classes +=
                    'border rounded focus:outline-none p-2 focus-visible:border-primary'
                break
            case 'text':
                classes += 'focus-visible:border-transparent focus:outline-none'
                break
            default:
                classes +=
                    'border-b focus-visible:border-transparent focus-visible:border-b-primary'
                break
        }

        return classes
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        unstyled: true,
        locale: Locale['pt-BR'],
        pt: {
            button: ButtonPT,
            inputGroup: {
                root: ({ props }: { props: any }) => {
                    let classes = 'flex items-center w-full '
                    switch (props.variant) {
                        case 'outlined':
                            classes += 'border rounded focus-within:ring-2 '
                            break
                        case 'text':
                            classes += 'hover:border-primary'
                            break
                        default:
                            classes += 'border-b focus-within:border-primary'
                            break
                    }
                    return classes
                }
            },
            inputText: InputPT,
            textarea: InputPT,
            radioButton: {
                root: ({ props }: { props: any }) => {
                    let classes =
                        'p-radio-button accent-primary hover:cursor-pointer'
                    return classes
                },
                input: 'cursor-pointer'
            },
            select: {
                root: ({ state }: { state: any }) => {
                    let classes =
                        'py-2 px-3 rounded border-gray-3 border placeholder:text-gray-3 placeholder:font-normal w-full flex items-center gap-4 '
                    if (state.overlayVisible) {
                        classes += 'border-primary '
                    }

                    return classes
                },
                label: ({ state }: { state: any }) => {
                    let classes = 'w-full '
                    if (state.d_value) {
                        classes += 'text-primary font-bold '
                    }
                    return classes
                },
                overlay: 'bg-neutral-50 rounded shadow-md shadow-gray-4 ',
                list: 'py-2',
                option: 'p-2 hover:bg-op-darken cursor-pointer',
                clearIcon: 'hover:text-primary cursor-pointer',
                emptyMessage: 'p-2'
            },
            datepicker: {
                root: 'w-full flex flex-row-reverse items-center gap-2 border-b focus-within:border-b-primary',
                pcInputText: {
                    root: 'w-full py-1 focus-visible:outline-0 text-primary font-bold placeholder:text-gray-3 placeholder:font-normal border-0 focus-visible:border-transparent '
                },
                panel: 'min-w-fit! shadow-md bg-neutral-50 rounded p-3',
                header: 'flex justify-between items-center py-2',
                title: 'flex justify-between items-center gap-4 px-2',
                dayView: 'w-full ',
                dayCell: 'text-center px-1',
                day: ({ context }: any) => {
                    let classes =
                        'inline-flex w-8! h-8! items-center justify-center  rounded-full '
                    if (context.otherMonth) classes += 'text-gray-5 '
                    else {
                        classes += 'hover:bg-op-darken cursor-pointer'
                    }
                    if (context.today) classes += 'border-primary/60 border '

                    console.log(context)

                    return classes
                },
                selectMonth: 'cursor-pointer hover:bg-op-darken p-1 rounded',
                selectYear: 'cursor-pointer hover:bg-op-darken p-1 rounded',
                monthView: 'flex flex-wrap',
                month: 'w-1/4 cursor-pointer hover:bg-op-darken text-center px-2',
                yearView: 'flex flex-wrap justify-start',
                year: 'w-1/2 cursor-pointer hover:bg-op-darken text-center px-2',
                clearIcon: 'hover:text-primary cursor-pointer',
                pcPrevButton: {
                    root: 'bg-transparent cursor-pointer text-gray-2 p-1 rounded hover:bg-op-darken'
                },
                pcNextButton: {
                    root: 'bg-transparent cursor-pointer text-gray-2 p-1 rounded hover:bg-op-darken'
                }
            },
            dataTable: {
                table: 'w-full border-collapse',
                column: {
                    columnHeaderContent: () => 'text-left',
                    bodyCell: () => 'border-b border-gray-4 py-2'
                }
            },
            dialog: {
                root: 'bg-gray-6 p-3 min-w-[35vw] w-full mx-12 md:w-fit rounded',
                mask: 'bg-gray-2/40',
                header: 'flex items-center justify-between',
                pcCloseButton: {
                    root: 'bg-transparent focus-visible:outline-none cursor-pointer hover:text-primary'
                }
            }
        },
        ripple: false
    } as PrimeVueConfiguration)
})
