/** Permutations */

const permute = (nums) => {
  const result = [];
  const used = new Array(nums.length).fill(false);

  const backtrack = (nums, path) => {
    if (nums.length === path.length) {
      // This is to shallowly copy the path array, or the
      // `push` and `pop` method will change the result.
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      path.push(nums[i]);
      used[i] = true;
      backtrack(nums, path);
      path.pop();
      used[i] = false;
    }
  };

  backtrack(nums, []);

  return result;
};
