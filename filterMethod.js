let originalArray = [1, 2, 3, 4, 5, 6];
let evenNumbers = originalArray.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);
