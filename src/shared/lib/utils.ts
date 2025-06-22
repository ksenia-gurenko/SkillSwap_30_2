export const formatYears = (number: number) => {
  if (number <= 0) {
    return '';
  }

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

export const calculateAge = (birthDate: Date) => {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}