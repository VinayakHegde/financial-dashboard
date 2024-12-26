export const toCurrency = (value: number, locales?: Intl.LocalesArgument, maximumFractionDigits = 0) => {
  return Intl.NumberFormat(locales ?? 'en-US', { style: 'currency', currency: 'USD', maximumFractionDigits }).format(value);
}