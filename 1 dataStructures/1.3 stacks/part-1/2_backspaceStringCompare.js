/** Backspace String Compare */

var backspaceCompare = function (s, t) {
    // create 2 empty stacks to begin
  let stack1 = [];
  let stack2 = [];

  // First stack we get the final output from s into stack 1
  for (let i = 0; i < s.length; i++) {
    if (stack1.length && s[i] === "#") {
      stack1.pop();
      continue;
    }
    if (s[i] !== "#") {
      stack1.push(s[i]);
    }
  }

  // we do the same from t into stack 2
  for (let i = 0; i < t.length; i++) {
    if (stack2.length && t[i] === "#") {
      stack2.pop();
      continue;
    }
    if (t[i] !== "#") {
      stack2.push(t[i]);
    }
  }

  // afterwards we just compare stack 1 to stack 2 to see if they match
  if (stack1.length !== stack2.length) return false;
  for (let i = 0; i < stack1.length; i++) {
    if (stack1[i] !== stack2[i]) {
      return false;
    }
  }
  return true;
};
