export const toLocaleDate = (dateString: string) => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return formattedDate;
};

export const getWeekday = (dateString: string) => {
  const date = new Date(dateString);

  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });

  return weekday;
};

export const getMonth = (
  dateString: string,
  format: 'long' | 'short' = 'short',
) => {
  const date = new Date(dateString);

  const month = date.toLocaleDateString('en-US', { month: format });

  return month;
};

export const getYear = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.toLocaleDateString('en-US', { year: 'numeric' });

  return year;
};

export const getMonthYear = (
  dateString: string,
  format: 'long' | 'short' = 'long',
) => {
  const date = new Date(dateString);

  const monthYear = date.toLocaleDateString('en-US', {
    month: format,
    year: 'numeric',
  });

  return monthYear;
};
