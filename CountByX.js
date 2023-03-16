// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

function countByx(array, totalnumofElemnts) {
  //   let DoubledNum = [curVal * array[0]];

  let result = [];

  for (let i = 0; i < array.length; i++) {
    let curVal = array[i];

    // console.log(curVal);
    if (curVal * array) {
      result.push(curVal);
    }
  }

  return result;
}

console.log(countByx([1, 2, 3, 4, 5], 5));
