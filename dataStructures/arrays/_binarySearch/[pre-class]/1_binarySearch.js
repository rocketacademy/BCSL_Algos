/**Binary Search */

var search = function (nums, target) {
    // Initialise our bounds to start and end of nums array
  let left = 0;
  let right = nums.length - 1;

  // Loop while we have not yet searched all numbers
  while (left <= right) {
    // Search the middle number of our range
    const mid = Math.floor((left + right) / 2);
    // If target found, return mid_index
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
        //If target is greater than mid number
      left = mid + 1;
    } else {
        // If target is less than mid number
      right = mid - 1;
    }
  }
  // If target not found, return -1
  return -1;
};
