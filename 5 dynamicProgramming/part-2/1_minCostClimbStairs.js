/** Min Cost Climbing Stairs */

var minCostClimbingStairs = function (cost) {
  let n = cost.length;
  return Math.min(minCost(n - 1, cost), minCost(n - 2, cost));

  function minCost(n, cost) {
    if (n < 0) {
      return 0;
    }
    if (n == 1 || n == 0) {
      return cost[n];
    }
    return cost[n] + Math.min(minCost(n - 1, cost), minCost(n - 2, cost));
  }
};
