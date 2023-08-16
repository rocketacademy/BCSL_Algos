/** Recursive Digit Sum */

function superDigit(n, k) {
  const digArray = String(n).split("");
  // base case
  if (digArray.length === 1) {
    return n;
  }
  // resursive element
  const newDig =
    digArray.reduce((total, num) => {
      return total + Number(num);
    }, 0) * k;
  return superDigit(newDig, 1);
}
