/** Delete duplicate value nodes from a sorted linked list */

// iterate through the linked list
// Check the current value, see if the next value === the current value
// if it does.... delete said value and move on

var deleteDuplicates = function (head) {
  let currentNode = head;
  while (currentNode) {
    if (currentNode.next && currentNode.val === currentNode.next.val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return head;
};
