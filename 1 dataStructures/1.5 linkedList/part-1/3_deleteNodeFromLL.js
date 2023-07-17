/** Delete a node from a linked list */

function deleteNode(llist, position) {
  // Write your code here
  let current = llist;

  if (position == 0) {
    return llist.next;
  }

  for (let i = 0; i < position - 1; i++) {
    current = current.next;
  }
  current.next = current.next.next;

  return llist;
}
