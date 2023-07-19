/*
#########
# Trees #
#########

# What is a tree data structure?
# What is the root of a tree?
# What is a binary tree,
#         a tenary tree,
#            n-ary tree,
#     or simply, a tree?

We will be implementing a binary tree
    
        node
       /    \
   node      node
  /   \      /   \
node  node node node


Each node consists of three attributes:
.val : given when initializing the node
.left  : initializes as null
.right : initializes as null
*/

class Node {
    constructor(val) {
      this.val = val
      this.left = null
      this.right = null
    }
  }
  
  // Creating a binary tree
  const root0 = new Node(3)
  root0.left = new Node(1)
  root0.right = new Node(2)
  root0.left.left = new Node(3)
  root0.left.right = new Node(4)
  root0.right.left = new Node(5)
  root0.right.right = new Node(3)
  //      3
  //    /   \
  //   1     2
  //  / \   / \
  // 3   4 5   3
  
  // Creating another binary tree
  const root1 = new Node("a")
  root1.left = new Node("b")
  root1.right = new Node("e")
  root1.left.left = new Node("c")
  root1.left.right = new Node("d")
  //      a
  //    /   \
  //   b     e
  //  / \
  // c   d
  
  /*
  ###############
  # Key insight #
  ###############
  
  Since a binary tree starts from a root node and branches left and right,
  each left and right node is also a "sub-tree".
  
  Every tree is made out of many smaller trees, making most tree problems easily solved via recursion.
  */
  
  /*
  #######################
  # Basic Tree Problems #
  #######################
  */
  
  // Return the total number of nodes in the tree
  const size = (tree) => {
    if (!tree) {
      return 0;
    }
    return 1 + size(tree.left) + size(tree.right);
  };
  
  
  // Return the total sum of all values in the tree. Assume integer values only
  const total = (tree) => {
    if (!tree) {
      return 0;
    }
    return tree.val + total(tree.left) + total(tree.right);
  };
  
  
  // Return true if the value x is contained in tree, false otherwise
  const contains = (tree, x) => {
    if (!tree) {
      return false;
    }
    return tree.val === x || contains(tree.left, x) || contains(tree.right, x);
  };
  
  
  // Return the number of occurrences of x in tree
  const count = (tree, x) => {
    // Base case: Return 0 if below leaf node
    if (!tree) {
      return 0;
    }
    // Determine current node's contribution
    if (tree.val === x) {
      curr_node_count = 1;
    } else {
      curr_node_count = 0;
    }
    // Return count of left and right subtrees plus current node's contribution
    return curr_node_count + count(tree.left, x) + count(tree.right, x);
  };
    
  console.log("\n== size ==")
  console.log(size(root0)) // 7
  console.log(size(root1)) // 5
  
  console.log("\n== total ==")
  console.log(total(root0)) // 21
  
  console.log("\n== contains ==")
  console.log(contains(root0, 5))          // true
  console.log(contains(root0, 3))          // true
  console.log(contains(root0, 1))          // true
  console.log(contains(root0, 0) == false) // true
  
  console.log("\n== count ==")
  console.log(count(root0, 5)) // 1
  console.log(count(root0, 3)) // 3
  console.log(count(root0, 1)) // 1
  console.log(count(root0, 0)) // 0
  
  /*
  ##############################
  # (Extra) More Tree Problems #
  ##############################
  */
  
  // Return the largest value in the tree
  const largest = (tree) => {
    if (!tree) {
      // Smallest possible number
      return -Number.MAX_VALUE;
    }
    return Math.max(tree.val, largest(tree.left), largest(tree.right));
  };
  
  
  // Return the smallest value in the tree
  const smallest = (tree) => {
    if (!tree) {
      // Largest possible number
      return Number.MAX_VALUE;
    }
    return Math.min(tree.val, smallest(tree.left), smallest(tree.right));
  };
  
  
  // Return the total number of leaf nodes in the tree
  // Leaf nodes are nodes with no children
  const count_leaves = (tree) => {
    if (!tree) {
      return 0;
    }
    if (!tree.left && !tree.right) {
      return 1;
    }
    return count_leaves(tree.left) + count_leaves(tree.right);
  };
  
  
  console.log("\n== largest ==")
  console.log(largest(root0)) // 5
  
  console.log("\n== smallest ==")
  console.log(smallest(root0)) // 1
  
  console.log("\n== count_leaves ==")
  console.log(count_leaves(root0)) // 4
  console.log(count_leaves(root1)) // 3
  