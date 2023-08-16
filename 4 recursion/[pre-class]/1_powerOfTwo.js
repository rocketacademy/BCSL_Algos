/** Power of Two */

var isPowerOfTwo = function (n) {
  //base condition
  if (n == 1) return true;
  // false condition
  if (n < 2) return false;
  //base formula
  return isPowerOfTwo(n / 2);
};
