// const arr = [1, 2, 3, 2, 4, 3, 5];
// const duplicates = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
//       duplicates.push(arr[i]);
//     }
//   }
// }

// console.log(duplicates);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];
// const arr3 = [5, 6, 7, 8, 9];

// const duplicates = arr1.filter((x) => arr2.includes(x) && arr3.includes(x));

// console.log(duplicates);
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const arr3 = [5, 6, 7, 8, 9];

const duplicates = arr1.filter((el) => arr2.includes(el) && arr3.includes(el));

const replacedArr1 = arr1.map((el) => {
  if (duplicates.includes(el)) {
    return "DUPLICATE";
  } else {
    return el;
  }
});

console.log(replacedArr1);
