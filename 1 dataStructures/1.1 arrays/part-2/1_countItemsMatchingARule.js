/**Count Items Matching A Rule */


var countMatches = function (items, ruleKey, ruleValue) {
  let keyname = {
    type: 0,
    color: 1,
    name: 2,
  };
  // ientify the rule key and get the right index
  let index = keyname[ruleKey];
  let count = 0;
  // loop through array of items
  for (const val of items) {
    // if the value of the item matches the rule Value, add 1
    if (val[index] == ruleValue) {
      count += 1;
    }
  }
  return count;
};
