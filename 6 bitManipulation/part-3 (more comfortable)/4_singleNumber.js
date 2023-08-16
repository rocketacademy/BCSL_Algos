/** Single Number */

var singleNumber = function (nums) {
  let single = nums[0];

  for (let i = 1; i < nums.length; i++) {
    single = single ^ nums[i];
  }
  return single;
};
