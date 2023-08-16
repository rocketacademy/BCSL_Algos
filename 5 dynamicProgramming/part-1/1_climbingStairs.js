/** Climbing Stairs */

// resursive way
var climbStairs = function (n) {
  if (n <= 2) {
    // base case
    return n;
  }
  var output = climbStairs(n - 2) + climbStairs(n - 1);
  return output;
};

// DP way
var climbStairs = function (n) {
  const cache = {};
  var recurse = function (n) {
    if (n <= 3) {
      // base case
      return n;
    }
    if (cache[n]) {
      // secondary base case
      return cache[n];
    }
    var output = recurse(n - 2) + recurse(n - 1);
    cache[n] = output;
    return output;
  };
  return recurse(n);
};
