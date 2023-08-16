/** Subtree of Another Tree */

/** DFS solution */

const isSubtree = (root, subRoot) => {
  const areEqual = (node1, node2) => {
    if (!node1 || !node2) return !node1 && !node2;
    if (node1.val !== node2.val) return false;
    return areEqual(node1.left, node2.left) && areEqual(node1.right, node2.right);
  }
  const dfs = (node) => {
    if (!node) return false;
    if (areEqual(node, subRoot)) return true;
    return dfs(node.left) || dfs(node.right);
  }
  return dfs(root);
};

/** BFS solution */

const isSubtree = (root, subRoot) => {
    const areEqual = (tree, subTree) => {
      const queue = [[tree, subTree]];
      while (queue.length) {
        const [node1, node2] = queue.pop();
        if (!node1 && !node2) continue;
        if (!node1 || !node2 || node1.val !== node2.val) return false;
        queue.push([node1.right, node2.right], [node1.left, node2.left]);
      }
      return true;
    }
    const queue = [root];
    while (queue.length) {
      const node = queue.pop();
      if (!node) continue;
      if (areEqual(node, subRoot)) return true;
      queue.push(node.right, node.left);
    }
    return false;
  };