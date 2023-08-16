/** Power of Four */

var isPowerOfFour = function (n) {
  if (n === 1) {
    return true;
  } else if (n < 4 && n !== 1) {
    return false;
  }
  return isPowerOfFour(n / 4);
};
