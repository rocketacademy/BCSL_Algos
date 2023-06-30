/** Richest Customer Wealth */

var maximumWealth = function (accounts) {
  // Declare Variable at 0 to hold richest record
  var output = 0;
  // Loop through the array of arrays
  for (var i = 0; i < accounts.length; i++) {
    // Before each array, store a running customer sum
    var wealth = 0;
    // Loop through the customers array of wealth (could also use reduce)
    for (var j = 0; j < accounts[i].length; j++) {
      wealth += accounts[i][j];
    }
    // compare stored max vs last summed customer's wealth and only keep max
    output = Math.max(output, wealth);
  }
  // return max
  return output;
};
