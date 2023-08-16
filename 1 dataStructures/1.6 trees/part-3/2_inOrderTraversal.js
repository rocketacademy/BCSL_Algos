/** In-Order Traversal */ // note different because of use on Hacker Rank and not LeetCode

function inOrder(root) {
	if(root!=null) {
        inOrder(root.left);
        process.stdout.write(`${root.data} `);
        inOrder(root.right);
    }
}