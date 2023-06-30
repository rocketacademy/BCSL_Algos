/** Number of Good Pairs */

// using slow array method

var numIdenticalPairs = function (nums) {
  // start with a count
  let count = 0;
  // start by looping over the array
  for (let i = 0; i < nums.length; i++) {
    // loop through the array, starting from 1 ahead of i
    for (let j = i + 1; j < nums.length; j++) {
      // if both those numbers equal each other, add to count
      if (nums[i] === nums[j]) {
        count += 1;
      }
    }
  }

  return count;
};
