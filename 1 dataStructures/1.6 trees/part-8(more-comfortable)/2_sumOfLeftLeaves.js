/** Sum of Left Leaves */

var sumOfLeftLeaves = function (root) {
  function isLeaveNode(root) {
    if (root && root.left == null && root.right == null) {
      return true;
    }
    return false;
  }

  if (!root) {
    return 0;
  }
  if (isLeaveNode(root.left)) {
    return root.left.val + sumOfLeftLeaves(root.right);
  }
  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
