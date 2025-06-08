export const formatYears = (number: number) => {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return number + ' лет';
  }

  switch (lastDigit) {
    case 1:
      return number + ' год';
    case 2:
    case 3:
    case 4:
      return number + ' года';
    default:
      return number + ' лет';
  }
};
