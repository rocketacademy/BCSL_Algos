/** permutation in String */

var checkInclusion = function (s1, s2) {
  let map = new Map();

  let left = 0;

  let right = 0;

  let count = s1.length;

  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], (map.get(s1[i]) || 0) + 1);
  }

  while (right < s2.length) {
    if (map.get(s2[right]) > 0) count--;

    map.set(s2[right], (map.get(s2[right]) || 0) - 1);

    if (count === 0) return true;

    if (right - left + 1 >= s1.length) {
      if (map.get(s2[left]) >= 0) count++;

      map.set(s2[left], (map.get(s2[left]) || 0) + 1);

      left++;
    }

    right++;
  }

  return false;
};
