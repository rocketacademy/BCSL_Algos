/** Grumpy Bookstore Owner */

var maxSatisfied = function (customers, grumpy, X) {
  let satisfied = 0;
  let maxGrumpySatisfied = 0;

  // loop through grumpty state
  for (let i = 0; i < grumpy.length; i++) {
    // check if not grumpy, then everyone is satisfied
    if (grumpy[i] === 0) {
      satisfied += customers[i];
      customers[i] = i === 0 ? 0 : customers[i - 1];
      continue;
    }

    if (i > 0) {
      customers[i] += customers[i - 1];
    }

    // Here we are going to use the "secret" technique to make them not as grumpy
    let grumpySatisfied;
    if (X <= i) {
      grumpySatisfied = customers[i] - customers[i - X];
    } else {
      grumpySatisfied = customers[i];
    }
    maxGrumpySatisfied = Math.max(maxGrumpySatisfied, grumpySatisfied);
  }

  return satisfied + maxGrumpySatisfied;
};
