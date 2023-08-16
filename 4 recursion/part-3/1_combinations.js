/** Combinations */

var combine = function (n, k) {
  let res = [];
  const backtrack = (combo, start) => {
    if (combo.length === k) {
      res.push([...combo]);
      return;
    }
    // The loop limit can be optimized to avoid unnecessary iterations.
    // The maximum number that can be added to the combination at this point is (n - k + combo.length + 1).
    for (let i = start; i <= n - k + combo.length + 1; i++) {
      combo.push(i);
      backtrack(combo, i + 1);
      combo.pop();
    }
  };
  backtrack([], 1);
  return res;
};
