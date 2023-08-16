/** Average of Levels in Binary Tree */

var averageOfLevels = function (root) {
  let list = [];
  let count = [];
  function level_sum(root, level) {
    if (root == null) return;
    if (list.length <= level) {
      list.push(0.0);
      count.push(0);
    }
    list[level] += root.val;
    count[level] += 1;
    level_sum(root.left, level + 1);
    level_sum(root.right, level + 1);
  }
  level_sum(root, 0);
  for (let level = 0; level < list.length; level++) {
    list[level] = list[level] / count[level];
  }
  return list;
};
