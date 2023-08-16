/** Binary Tree Zigzag Level Order Traversal */

var zigzagLevelOrder = function (root) {
  // handle edge case
  if (!root) {
    return [];
  }

  // create res and queue, and level size
  const res = [],
    queue = [root];
  let levelSize,
    leftToRight = true;

  // loop while queue is not empty
  while (queue.length > 0) {
    // calc number of nodes at current level
    levelSize = queue.length;
    // init sub-array to store vals at current level
    const levelVals = [];

    // loop until all nodes at current level has traversed
    while (levelSize > 0) {
      // pop from left of queue (FIFO)
      const currNode = queue.shift();

      // push or unshift values to sub-array depending on traversal order
      if (leftToRight) {
        levelVals.push(currNode.val);
      } else {
        levelVals.unshift(currNode.val);
      }

      // push left and right child nodes of current node (if exist)
      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
      // decrement count
      levelSize--;
    }
    // switch direction, and push sub-array to output array
    leftToRight = !leftToRight;
    res.push(levelVals);
  }
  return res;
};
