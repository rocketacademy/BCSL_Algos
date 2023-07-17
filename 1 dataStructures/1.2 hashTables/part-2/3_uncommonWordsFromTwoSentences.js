/** Uncommon words from Two Sentences */

var uncommonFromSentences = function (s1, s2) {
    // start with a hash table
  const occurrences = {};
  // make an array of all the words in both sentances 
  const arr = s1.split(" ").concat(s2.split(" "));
  // another way to just write a tally
  for (let i = 0; i < arr.length; i++) {
    if (occurrences[arr[i]] === undefined) occurrences[arr[i]] = 1;
    else occurrences[arr[i]]++;
  }

  // user a filter function to filter our values that only have a single occurance
  return Object.entries(occurrences)
    .filter((values) => values[1] === 1)
    .map((obj) => obj[0]);
};
