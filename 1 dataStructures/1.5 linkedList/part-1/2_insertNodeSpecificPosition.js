/** Insert a node at a specific position in a linked list */

function insertNodeAtPosition(llist, data, position) {
  // Write your code here
  let node = new SinglyLinkedListNode(data);

  if (llist == null) {
    return node;
  }

  let current = llist;
  for (let i = 0; i < position - 1; i++) {
    current = current.next;
  }
  node.next = current.next;
  current.next = node;

  return llist;
}
