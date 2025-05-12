// 6. Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
// Example: Happy New Year

const checkLeapYear = (year) => {
  if (year % 100 === 0) {
    return year % 400 === 0
      ? `${year} is a leap year`
      : `${year} is not leap year`;
  }
  return year % 4 === 0 ? `${year} is a leap year` : `${year} is not leap year`;
};

const result = checkLeapYear(1900);
console.log(result);
