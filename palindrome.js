//  Suppose you have an array of integers and you want to find a pair of elements that add up to a target value.
//  using two pointer methods

function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

console.log(twoSum([2, 3, 5, 7, 9], 12));
