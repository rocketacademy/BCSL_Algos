/** Binary Tree Right Side View */

var rightSideView = function (root) {
  const rightValues = []; // return most right values array

  traverse(root, 0, rightValues); // recursion call start from level 0

  //after recursive completed return the rightValues array
  return rightValues;
};

const traverse = (root, level, rightValues) => {
  if (root === null) {
    return;
  } // if root is null then just return it

  //check if there is no value store at this level (the level will represent the index number of the return array), if it is true then we want to add that value to our 'rightValues' array
  //if there is an element at particular index then we will just ignore it
  if (rightValues.length === level) {
    rightValues.push(root.val);
  }

  // always add root.right first because we want to find the most righty nodes AND always increment level by 1
  traverse(root.right, level + 1, rightValues);
  traverse(root.left, level + 1, rightValues);
};
