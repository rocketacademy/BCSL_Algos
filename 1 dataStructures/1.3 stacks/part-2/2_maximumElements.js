/** Maximum Elements */

function getMax(operations) {
  let result = [];
  let maxR = [];

  // loop through the operations array
  for (let i = 0; i < operations.length; i++) {
    // split it up by parts to be used
    let query = operations[i];
    let parts = query.split(" ");
    let oper = parts[0];

    // based on oper... we perform our actions
    if (oper === "1") {
      result.push(parseInt(parts[1]));
    } else if (oper === "2") {
      result.pop();
    } else if (oper === "3") {
      maxR.push(Math.max(...result));
    }
  }
  return maxR;
}
