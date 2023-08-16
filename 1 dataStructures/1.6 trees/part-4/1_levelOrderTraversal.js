/** Level-Order Traversal */

function levelOrder(root) {
    const queue = []
    
    queue.push(root)
    
    while(queue.length){
      node = queue.shift()
      process.stdout.write(`${node.data} `);
      
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }  
  }