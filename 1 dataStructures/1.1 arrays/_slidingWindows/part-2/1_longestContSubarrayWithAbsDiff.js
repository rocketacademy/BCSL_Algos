/** Longest Continous Subarray with Absolute DIfference Less Than or Equal to limit */

var longestSubarray = function (nums, limit) {
  let left = 0;
  let right = 0;
  let max = [];
  let min = [];
  let num = 0;

  while (right < nums.length) {
    num = nums[right++];
    while (max.length && num > max[max.length - 1]) {
      max.pop();
    }
    while (min.length && num < min[min.length - 1]) {
      min.pop();
    }

    max.push(num);
    min.push(num);
    if (max[0] - min[0] <= limit) {
      continue;
    }

    num = nums[left++];
    if (max[0] == num) {
      max.shift();
    }
    if (min[0] == num) {
      min.shift();
    }
  }

  return right - left;
};
