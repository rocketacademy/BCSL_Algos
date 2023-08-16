/** Binary Number with Alternating Bits */

var hasAlternatingBits = function (num) {
  let prev = num & 1;
  num >>= 1;
  while (num) {
    if ((num & 1) == prev) {
      return false;
    }
    prev = num & 1;
    num >>= 1;
  }
  return true;
};
