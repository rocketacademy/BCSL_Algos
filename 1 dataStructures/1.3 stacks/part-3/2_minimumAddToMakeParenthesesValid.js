/** Minimum Add to Make Parentheses Valid */

function minAddToMakeValid(s) {
  if (s.length < 1 || s.length > 1000) {
    // dealing with the contraints as dictated in the contraints
    return;
  }
  // start with a new stack
  let stack = [];

  // loop through s
  for (let i = 0; i < s.length; i++) {
    // if stack still has length and the parentheses match... pop it
    if (stack.length && stack[stack.length - 1] === "(" && s[i] === ")") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length;
}
