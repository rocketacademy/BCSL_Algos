/** Maximizing XOR  */

function maximizingXor(l, r) {
  let max_value = 0;
  for (let i = l; i <= r; i++) {
    for (let j = i; j <= r; j++) {
      const v = i ^ j;
      if (max_value < v) {
        max_value = v;
      }
    }
  }
  return max_value;
}
