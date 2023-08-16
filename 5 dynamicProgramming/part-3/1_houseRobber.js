/** House Robber */

var rob = function (nums) {
  let prev = 0;
  let curr = 0;

  // this assumes that it actually makes no sense not to rob every other house
  for (let i = 0; i < nums.length; i += 1) {
    let temp = Math.max(nums[i] + prev, curr);
    prev = curr;
    curr = temp;
  }
  return curr;
};
