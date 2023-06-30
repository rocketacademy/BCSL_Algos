/**Running Sum of 1D Array */

var runningSum = function (nums) {
  // Start be declaring a variable that will keep track of the sum as we progress through
  let sums = 0;
  // Empty array that will used to store our new array
  let output = [];
  for (let i of nums) {
    sums += i;
    // Push sum into the correct position of the new array
    output.push(sums);
  }
  // return new array
  return output;
};
