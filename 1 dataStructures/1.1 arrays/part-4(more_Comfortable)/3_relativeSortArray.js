/** Relative Sort Array */


var relativeSortArray = function (arr1, arr2) {
  let k = 0;

  
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[i]) {
        [arr1[k], arr1[j]] = [arr1[j], arr1[k]];
        k++;
      }
    }
  }
  for (k; k < arr1.length - 1; k++) {
    for (let j = k + 1; j < arr1.length; j++) {
      if (arr1[k] > arr1[j]) {
        [arr1[k], arr1[j]] = [arr1[j], arr1[k]];
      }
    }
  }
  return arr1;
};
