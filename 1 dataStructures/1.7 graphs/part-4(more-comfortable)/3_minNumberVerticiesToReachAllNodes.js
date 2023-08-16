/** Minimum Number of Verticies to Reach All Nodes */

var findSmallestSetOfVertices = function (n, edges) {
  let set = new Set();
  //find the Indegree Vertices
  for (let [from, to] of edges) {
    set.add(to);
  }
  // if any vertices that does not have indegree  then those will be starting point to reach to the other nodes , check it in all of n nodes, from 0 to n , then after filter will push the result into ans array.
  let ans = [];
  for (let i = 0; i < n; i++) {
    if (!set.has(i)) {
      ans.push(i);
    }
  }
  return ans;
};
