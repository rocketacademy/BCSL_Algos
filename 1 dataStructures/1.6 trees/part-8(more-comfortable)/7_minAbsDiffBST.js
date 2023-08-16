/** MInimum Absolute Difference in BST */

var getMinimumDifference = function(root) {
    const DFS = (node, lo, hi) => {
        if (!node) return hi - lo;
        const left = DFS(node.left, lo, node.val);
        const right = DFS(node.right, node.val, hi);
        return Math.min(left, right);
    };
    return DFS(root, -Infinity, Infinity);
};