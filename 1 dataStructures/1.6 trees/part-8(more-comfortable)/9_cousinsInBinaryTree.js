/** Cousins in Binary Tree */

var isCousins = function(root, x, y) {
    const res = [];
   const  dfs = (root, level, prev, x, y) =>{
       if(!root) return false;
       //find x
         if(root.val === x)
             {
                 res.push([level, level === 0 ? null : prev.val]);
             }
       //find y
         if(root.val === y)
             {
                 res.push([level, level === 0 ? null : prev.val]);
             }
       //if i find both of them
         if(res.length === 2){
             //level and parent comparision
             if(res[0][0] === res[1][0] && res[0][1] !== res[1][1]){
             return true;
             }
             return false;
         }
       // scenarios true in eiother left or right subtree
         return dfs(root.left, level+1, root, x, y) || dfs(root.right, level+1, root, x, y);
   }  
   return dfs(root, 0, null, x, y); 

};
