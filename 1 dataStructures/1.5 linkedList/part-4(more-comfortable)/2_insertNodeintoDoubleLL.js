/** Insert a node into a sorted DOuble Linked List */

function sortedInsert(llist, data) {
  // Write your code here

  let newNode = new DoublyLinkedListNode(data);

  if (data < llist.data) {
    newNode.next = llist;
    llist = newNode;
    return llist;
  }

  let currentNode = llist;
  let prevNode;
  while (currentNode && currentNode.data < data) {
    prevNode = currentNode;
    currentNode = currentNode.next;
  }

  prevNode.next = newNode;
  newNode.next = currentNode;
  return llist;
}
