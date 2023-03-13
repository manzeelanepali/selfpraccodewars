// sum=9;
// Array =[1,2,3,4,5,6,7,8,9]
//  find pair in the array such that their sum equals to 9.

// pseudocode
// 1. go through the list of arrays
// 2. sum every element of the array to one another and if the value matches to 9 . return the pair

function functionaname(array, sum) {
  let newarr = [];
  for (let i = 0; i < array.length; i++) {
    let currVal = array[i];

    for (let j = 0; j < array.length; j++) {
      let secondLoop = array[j];

      if (array[i] + array[j] === sum) {
        newarr.push([array[i], array[j]]);
      }
    }
  }
  return newarr;
}

console.log(functionaname([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
