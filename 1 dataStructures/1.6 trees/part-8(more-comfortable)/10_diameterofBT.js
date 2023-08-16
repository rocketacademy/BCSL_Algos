/** Diameter of Binary Tree */

const diameterOfBinaryTree = (root) => {
  // handle empty tree
  if (!root) return 0;

  // initialize to track max
  let maxDiameter = 0;

  const dfs = (node) => {
    // return 0 if node is null
    if (!node) return 0;

    // recursively call dfs on left and right
    let left = dfs(node.left);
    let right = dfs(node.right);

    // Get higher between current max diameter or the heights of the left and right subtrees
    maxDiameter = Math.max(maxDiameter, left + right);

    // return height of current node by taking max of left or right and adding 1 to account for current node
    return Math.max(left, right) + 1;
  };

  // call the dfs function
  dfs(root);

  return maxDiameter;
};
