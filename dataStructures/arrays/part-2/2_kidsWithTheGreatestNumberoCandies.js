/**Kids with the greatst number of candies */

var kidsWithCandies = function (candies, extraCandies) {
  // First find what the "max" amount of Vandy is
  const maxCandies = Math.max(...candies);

  const output = [];

  // Loop through Candies array
  for (let i = 0; i < candies.length; i += 1) {
    // if candy held + extra candies is over the max candies... push true
    if (candies[i] + extraCandies >= maxCandies) {
      output.push(true);
    } else {
      // else push false
      output.push(false);
    }
  }
  // return the array
  return output;
};
