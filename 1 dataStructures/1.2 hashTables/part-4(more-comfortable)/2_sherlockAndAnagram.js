/** Sherlock And Anagrams */

function sherlockAndAnagrams(s) {
  // Write your code here
  let count = 0;
  const n = s.length;
  function test(arr, arr2) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr[i] === arr2[j]) {
          arr2 = arr2.replace(arr2[j], "");
          break;
        }
      }
    }
    if (arr2.length === 0) count++;
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      for (let k = 0; k < n - i - j; k++) {
        let arr = s.slice(j, i + j);
        let arr2 = s.slice(j + k + 1, i + j + k + 1);
        test(arr, arr2);
      }
    }
  }
  return count;
}
