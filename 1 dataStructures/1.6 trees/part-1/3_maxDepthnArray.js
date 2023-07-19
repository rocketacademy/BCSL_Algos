/** Maximum Depth of N-array Tree */

var maxDepth = function (root) {
  // base case
  if (!root) {
    return null;
  }
  let max = 0;

  // recursive element (for each of the child nodes)
  if (root.children) {
    root.children.forEach((child) => {
      max = Math.max(maxDepth(child), max);
    });
  }
  return max + 1;
};
