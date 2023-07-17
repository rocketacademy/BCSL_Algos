/** Valid Mountain Array */

var validMountainArray = function (arr) {
    // Slvind edge case: if array is shorter than 3, not a valid mountain array
  if (arr.length < 3) {
    return false;
  }
  // Start off declaring that we're on the climb
  let climb = true;
  // For loop to go through each element
  for (let i = 0; i < arr.length; i++) {
    // If there is a "plateu" or "flat ground" this is no longer a valid mountain array
    if (arr[i] === arr[i + 1]) {
      return false;
    }
    // while climbing, we hunt for the peak
    if (climb === true) {
      // when we find the peak, we change our "mode" to "decsend"
      if (arr[i] > arr[i + 1]) {
        climb = false;
      }
    } else {
      // if we find another upward movement, return false
      if (arr[i] < arr[i + 1]) {
        return false;
      }
    }
    // if our first movement is going downhill, this is a valley array, not a mountain array
    if (i === 0 && climb == false) {
      return false;
    }
  }
  // If a peak is never found, also return false
  if (climb === true) {
    return false;
  }
  // If array passes our million and 1 check points, it must be a mountain array
  return true;
};
