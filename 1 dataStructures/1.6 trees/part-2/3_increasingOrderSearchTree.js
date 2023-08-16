/** Increasing ORder Search Tree */


var increasingBST = function(root) {
    let data=[]
    // Depth First Search approach
    function dfs(root){
        if(!root) return null
        dfs(root.left)
        data.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    let node = new TreeNode(data[0])
    let curr=node
    for(let i =1; i<data.length; i++){
        curr.right=new TreeNode(data[i])
        curr=curr.right
   }
    return node
};