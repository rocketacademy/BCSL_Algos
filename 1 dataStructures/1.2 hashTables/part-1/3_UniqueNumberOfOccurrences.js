/** Unique Number of Occurances */

var uniqueOccurrences = function (arr) {
  let map = {};

  for (let i of arr) {
    if (map[i]) {
      map[i] += 1;
    } else {
      map[i] = 1;
    }
  }

  let values = Object.values(map);
  let uniqueValues = [...new Set(values)];
  return values.length === uniqueValues.length;
};
