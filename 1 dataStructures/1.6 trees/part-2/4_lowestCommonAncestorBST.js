/** Lowest Common Ancestory of a Binary Search Tree */

var lowestCommonAncestor = function (root, p, q) {
  // both p and q are in the left subtree
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  // both p and q are in the right subtree
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  return root;
};
