const prettifyNumber = (num: number): string => new Intl.NumberFormat().format(num)

export { prettifyNumber }
