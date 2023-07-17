/** Simple Text Editor */

function processData(input) {
  let resultStack = [];
  input = input.split("\n");
  let s = "";
  resultStack.push(s);
  for (let i = 1; i < input.length; i++) {
    let operations = input[i].split(" ");
    let oper = operations[0];

    if (parseInt(oper) === 1) {
      let second = operations[1];
      s += second;
      resultStack.push(s);
    }
    if (parseInt(oper) === 2) {
      let second = operations[1];
      s = s.slice(0, parseInt(second) * -1);
      resultStack.push(s);
    }
    if (parseInt(oper) === 3) {
      let second = operations[1];
      console.log(s[parseInt(second) - 1]);
    }
    if (parseInt(oper) === 4) {
      resultStack.pop();
      s = resultStack[resultStack.length - 1];
    }
  }
}
