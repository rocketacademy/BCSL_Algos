/** Valid Parentheses */

var isValid = function (s) {
  let stack = []; // create an empty stack to store opening brackets
  for (let char of s) {
    // loop through each character in the string
    if (char === "(" || char === "{" || char === "[") {
      // if the character is an opening bracket
      stack.push(char); // push it onto the stack
    } else {
      // if the character is a closing bracket
      if (
        !stack.length || // if the stack is empty or
        (char === ")" && stack[stack.length - 1] !== "(") || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
        (char === "}" && stack[stack.length - 1] !== "{") ||
        (char === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false; // the string is not valid, so return false
      }
      stack.pop(); // otherwise, pop the opening bracket from the stack
    }
  }
  return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
  // so the string is valid, otherwise, there are unmatched opening brackets, so return false
};
