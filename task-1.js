// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.


const peoples = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 22, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Eve", age: 35, gender: "female" },
  { name: "Frank", age: 40, gender: "male" },
];


function findMaleNames(persons){
   const males = persons.filter(people => people.gender !== 'female');
   const malesName = males.map(male => male.name)

   return malesName;
};

const result = findMaleNames(peoples);
console.log(result);