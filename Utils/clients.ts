export function calculateAge(birthday: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();
  const dayDiff = today.getDate() - birthday.getDate();

  // Adjust age if birthday has not occurred this year
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}
