/**Sum of All Odd Length Subarrays */


function sumOddLengthSubarrays(arr) {
  // Stores the sum
  let sum = 0;

  // Size of array
  let l = arr.length;

  // Traverse the given array arr[]
  for (let i = 0; i < l; i += 1) {
    // Add to the sum for each
    // contribution of the arr[i]
    sum += Math.floor(((i + 1) * (l - i) + 1) / 2) * arr[i];
  }

  // Return the final sum
  return sum;
}
