/** Sherlock and Array */

// Note the different style due to this being a Hacker Rank Problem

function balancedSums(arr) {
    // we first get the total sum of the array using the reduce function
  let rightsum = arr.reduce((a, b) => a + b);
  let leftsum = 0;
  for (let i = 0; i < arr.length; i++) {
    // as we loop through the array, we subtract the current index we're on
    rightsum -= arr[i];
    // we compare (without current index) if the left side and the right side are equal
    if (leftsum == rightsum) {
        // if so return "YES"
      return "YES";
    }
    // else before we move on to the next roun, make sure we add the current element to left index
    leftsum += arr[i];
  }
  // If loop finishes and we never find that balance, return "NO"
  return "NO";
}
