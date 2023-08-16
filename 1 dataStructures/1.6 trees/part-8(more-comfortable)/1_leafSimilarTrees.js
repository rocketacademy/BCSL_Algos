/** Leaf-Similar Trees */

var leafSimilar = function(root1, root2) {
    let leaf1 = [];
    let leaf2 = [];

    let dfs = function(node, leaf) {
        if (!node) return;
        if (!node.left && !node.right) {
            leaf.push(node.val);
            return;
        }
        dfs(node.left, leaf);
        dfs(node.right, leaf);
    }

    dfs(root1, leaf1);
    dfs(root2, leaf2);
    return leaf1.join('_') == leaf2.join('_')
};