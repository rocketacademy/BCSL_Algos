/** Maximum Number of Balloons */

var maxNumberOfBalloons = function (text) {
  const reference = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1,
  };
  const array = text.split("");

  let testObj = {};
  let output = 0;

  array.forEach((letter) => {
    // current run is a
    // Check if I need the letter?
    if (reference[letter]) {
      // Tally up the letters i need to spell the word "balloon"
      if (testObj[letter]) {
        testObj[letter] += 1;
      } else {
        testObj[letter] = 1;
      }
      // Check if i can spell the word "balloon"
      if (testObj[letter] >= reference[letter]) {
        // {n:1, l:1, a:1}
        // check if i can spell the word baloon
        let wordCheck = [];
        for (const x in reference) {
          if (testObj[x] && testObj[x] >= reference[x]) {
            for (let i = 0; i < reference[x]; i += 1) {
              wordCheck.push(x);
            }
          }
        }
        //Check if the word balloon is spelt, if yes 'reset'
        if (wordCheck.length == 7) {
          output += 1;
          for (const x in reference) {
            testObj[x] -= reference[x];
          }
        }
      }
    }
  });

  return output;
};
