// const numbers = [20, 40, 17, 99, 59, 77];
// const filteredNumbers = numbers.filter(function (number) {
//   return number > 20;
// });

// console.log(filteredNumbers);

// const numbers = [20, 40, 17, 99, 59, 77];
// const filteredNumbers = numbers.filter((number) => {
//   return number > 20;
// });

// console.log(filteredNumbers);

const myArray = [
  -7, -5, -2, 2, 1, 3, 12, 14, 13, 15, 70, 17, 33, 25, 27, 30, 97,
];

const primeNumbers = myArray.filter((element) => {
  for (let i = 2; element > i; i++) {
    if (element % i === 0) {
      return false;
    }
  }
  return element > 1;
});

console.log(primeNumbers);
