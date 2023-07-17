/** Minimum Add to Make Parenteses Valid */

var validateStackSequences = function (pushed, popped) {
  let idx = 0;
  let stack = [];

  for (let num of pushed) {
    stack.push(num);

    while (stack.length && stack[stack.length - 1] === popped[idx]) {
      stack.pop();
      idx++;
    }
  }

  return !stack.length;
};
