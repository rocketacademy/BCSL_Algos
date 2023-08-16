/** Merge Two Binary Trees */

const mergeTrees = (root1, root2) => {
  // base case: if one is null then return the other.
  if (!root1 || !root2) return root1 || root2;

  let node = new TreeNode(root1.val + root2.val); // based off the given TreeNode function
  node.left = mergeTrees(root1.left, root2.left);
  node.right = mergeTrees(root1.right, root2.right);

  return node;
};
