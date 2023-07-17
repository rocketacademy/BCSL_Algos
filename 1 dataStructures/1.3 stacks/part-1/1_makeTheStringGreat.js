/** Make The String Great */

var makeGood = function (s) {
  let stack = []; // Taking an empty stack
  for (let char of s) {
    // loop for traversing string.
    if (
      stack.length &&
      stack[stack.length - 1].toLowerCase() == char &&
      stack[stack.length - 1] == char.toUpperCase()
    )
      stack.pop();
    // if we have char in stack, its a uppercase then we will pop it out from the stack.
    else if (
      stack.length &&
      stack[stack.length - 1].toUpperCase() == char &&
      stack[stack.length - 1] == char.toLowerCase()
    )
      stack.pop();
    // if we have char in stack, its a lowercase then we will pop it out from the stack.
    else stack.push(char); // we add the char in stack if we dont have any char in the stack.
  }
  return stack.join(""); // from resulting stack we are creating required string.
};
