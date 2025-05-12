// 08. Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

const array = [23, 53, 64, 23, 65, 35, 23, 96];

const findMax = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max
};

const findMax2 = (arr) => {
 const maxNumber = Math.max(...arr);

 return maxNumber;
};


const result = findMax(array);
const result2 = findMax2(array)
console.log(result, result2);