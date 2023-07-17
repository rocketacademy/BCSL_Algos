/** Insert a node at the Tail of a Linked List */

function insertNodeAtTail(head, data) {
  let node = new SinglyLinkedListNode(data);
  if (head != null) {
    let temp = head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = node;
  } else {
    head = node;
  }
  return head;
}
