/**Left Rotation */

function rotateLeft(d, arr) {
  // just slice it..and dice it... and put it back together
  const output = [...arr.slice(d), ...arr.slice(0, d)];
  return output;
}
