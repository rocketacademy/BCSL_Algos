/** post Order Traversal */

var postorder = function(root) {
    const res = [];
    traverse(root);
    return res;
    
    function traverse(node) {
        if (!node) return;
        for(child of node.children) {
            traverse(child);
        }
        res.push(node.val);
    } 
};