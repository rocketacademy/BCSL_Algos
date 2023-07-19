/** Reverese a linked list */

// recursive
var reverseList = function (head) {
  // Special case...
  if (head == null || head.next == null) {
    return head;
  }
  // Create a new node to call the function recursively and we get the reverse linked list...
  var res = reverseList(head.next);
  // Set head node as head.next.next...
  head.next.next = head;
  //set head's next to be null...
  head.next = null;
  return res; // Return the reverse linked list...
};


// iterative 

var reverseList = function(head) {
    let prev = null;
    let current = head;
    let next = null;
    
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
};