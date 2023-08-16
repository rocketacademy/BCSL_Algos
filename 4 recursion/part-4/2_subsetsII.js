// subsets II

var subsetsWithDup = function (nums) {
  const result = [];
  nums.sort();

  const dfs = (arr, i) => {
    if (i === nums.length) {
      result.push(arr);
      return;
    }
    // take the current number
    dfs([...arr, nums[i]], i + 1);
    // while not at end of array and duplicate after current number
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }
    // leave the current number
    dfs([...arr], i + 1);
  };

  dfs([], 0);
  return result;
};
