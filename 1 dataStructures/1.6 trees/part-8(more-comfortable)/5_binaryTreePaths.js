/** Binary Tree Paths */


const binaryTreePaths = function(root) {
    if (!root) return null;
  
    const stack = [[root, ""]];
    const paths = [];
  
    while (stack.length) {
      const [node, path] = stack.pop();
      const newPath = path + node.val;
  
      if (!node.left && !node.right) {
        paths.push(newPath);
      } else {
        if (node.left) stack.push([node.left, newPath + "->"]);
        if (node.right) stack.push([node.right, newPath + "->"]);
      }
    }
  
    return paths;
  };