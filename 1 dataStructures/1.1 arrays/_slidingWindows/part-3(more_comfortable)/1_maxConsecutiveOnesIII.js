/** Max Consecutive Ones III */

var longestOnes = function (nums, k) {
    // start off with the markers
  let start = 0;
  let count = 0;
  let longest = 0;
  let flip = k;

  // loop to move window
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    const item = nums[windowEnd];

    if (item === 1) {
      count++;
    } else if (item === 0 && flip !== 0) {
      count++;
      flip--;
    } else {
      longest = Math.max(count, longest);
      windowEnd = start;
      start++;
      count = 0;
      flip = k;
    }
  }

  longest = Math.max(count, longest);
  return longest;
};
