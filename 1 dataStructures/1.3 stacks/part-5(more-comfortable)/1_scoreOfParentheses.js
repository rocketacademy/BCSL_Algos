/** Score of Parentheses */

var scoreOfParentheses = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];

    if (curr === "(") {
      stack.push("(");
      continue;
    }

    let currSum = 0;
    while (stack.length && stack[stack.length - 1] !== "(") {
      currSum += stack.pop();
    }

    stack.pop();

    if (currSum === 0) {
      stack.push(1);
    } else {
      stack.push(2 * currSum);
    }
  }

  return stack.reduce((a, b) => a + b, 0);
};
