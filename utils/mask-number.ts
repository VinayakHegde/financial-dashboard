export const maskNumber = (number: number): string => {
  const str = number.toString();
  const firstPart = str.slice(0, 4);
  const lastPart = str.slice(-4);
  const maskedPart = '*'.repeat(str.length - 8);

  const spacedMaskedPart = maskedPart
    .match(/.{1,4}/g)
    ?.join(' ') || '';

  const formatted = `${firstPart} ${spacedMaskedPart} ${lastPart}`;

  return formatted.trim();
}