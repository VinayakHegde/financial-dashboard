export const toCurrency = (value: number, locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions) => {
  return Intl.NumberFormat(locales ?? 'en-US', options ?? { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value);
}