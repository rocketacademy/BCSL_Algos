/** Daily Temepratures */

var dailyTemperatures = function (temperatures) {
  let n = temperatures.length;
  let stack = new Array();
  let res = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let idx = stack.pop();
      res[idx] = i - idx;
    }
    stack.push(i);
  }
  return res;
};
