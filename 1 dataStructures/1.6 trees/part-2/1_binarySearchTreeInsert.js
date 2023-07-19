/** Binary Search Tree Insertion */


function Node(item) {
    this.data = item;
    this.left = null;
    this.right = null;
}
function insert(root, data) {
    if(root == null) root = new Node(data);
    else if(data <= root.data) root.left = insert(root.left, data);
    else root.right = insert(root.right, data);
    return root;
}
function preOrder(root) {
    if(root == null) return;
    process.stdout.write(root.data + " ");
    if(root.left) preOrder(root.left);
    if(root.right) preOrder(root.right);
    
}
function processData(input) {
    //Enter your code here
    const node = input.split(/[\n]/g)[1].split(/[ ]/g);
    let root = null;
    for(let i = 0; i < node.length; i++) {
        root = insert(root, parseInt(node[i]));
    }   
    preOrder(root); 
} 