/** Generate Parantheses */

var generateParenthesis = function (n) {
  const stack = [];
  const output = [];
  let open = 0;
  let close = 0;

  const backtrack = () => {
    if (open === close && open === n) {
      console.log("SOLUTION:", stack.join(""));
      output.push(stack.join(""));
      return "look for me";
    }
    if (open < n) {
      stack.push("(");
      console.log(stack.join(""));
      backtrack((open += 1), close);
      stack.pop();
      open -= 1;
    }
    if (close < open) {
      stack.push(")");
      console.log(stack.join(""));
      backtrack(open, (close += 1));
      stack.pop();
      close -= 1;
    }
    return;
  };

  backtrack();

  return output;
};
