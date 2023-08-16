/** Two Sum IV - Input is a BST */

const findTarget = (root, k) => {
  // If root is null, we can't find k so return false
  if (!root) return false;

  // In the original 2sum problem we use a hashamp for O(1) lookup
  const hash = {};
  // This will allow us to traverse all the nodes
  const stack = [root];

  // When there's no more nodes we stop
  while (stack.length) {
    const node = stack.pop();

    // If we have found a node that makes the curr val sum to target, we return true
    if (hash[k - node.val]) return true;

    // Log in hashmap we saw this value
    hash[node.val] = true;

    // push to stack if there's nodes to traverse
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }

  // no luck :(
  return false;
};
