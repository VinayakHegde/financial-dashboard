export const toLocaleDate = (dateString: string) => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return formattedDate;
}

export const getWeekday = (dateString: string) => {
  const date = new Date(dateString);

  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });

  return weekday;
}