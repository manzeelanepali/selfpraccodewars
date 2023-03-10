//  Suppose you have an array of integers and you want to find a pair of elements that add up to a target value.
//  using two pointer methods

// function twoSum(nums, target) {
//   debugger;
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     const sum = nums[left] + nums[right];

//     if (sum === target) {
//       return [left, right];
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return [];
// }

// console.log(twoSum([2, 3, 5, 7, 9], 12));

function twoPointer(arr, targerValue) {
  //let value = [];
  for (let i = 0; i < arr.length; i++) {
    let currVal = arr[i];
    console.log(currVal, "curval");

    for (let j = i + 1; j < arr.length; j++) {
      let recentVal = arr[j];

      console.log(recentVal, "recntval");
      if (currVal + recentVal === targerValue) {
        return [arr.indexOf(currVal), arr.indexOf(recentVal)];
      }
    }
  }

  //return value;
}
console.log(twoPointer([1, 2, 3, 4, 5, 6, 7], 10));
