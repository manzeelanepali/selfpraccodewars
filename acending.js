// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// go through the list of arrays
// Arrange the list of elements in the ascending order
// find the sum of first two elwments in the array
// return sum

// function twoHighest(arr) {
//     res = arr.sort((a, b) => a - b);
//     // console.log(res);
//     let sum = res[0] + res[1]

//     return sum;

//   }

//   console.log(twoHighest([4, 55, 65, 64]))

let numbers = [19, 5, 42, 2, 77];

function finding(numbers) {
  let finalResult = [];
  result = numbers.sort((a, b) => a - b);
  console.log(result);
  finalResult.push(result[0] + result[1]);

  return finalResult;
}
console.log(finding(numbers));
