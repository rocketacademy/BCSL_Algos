/** Sort Integers by The Number of 1 Bits */

function sortByBits(numbers) {
  const map = {};

  for (let i = 0; i < numbers.length; i++) {
    let counter = 0;
    let bit = numbers[i];

    while (bit > 0) {
      counter += bit & 1;
      bit = bit >> 1;
    }

    map[numbers[i]] = counter;
  }

  return numbers.sort((a, b) => map[a] - map[b] || a - b);
}
