/** Insert a node at the head of a linked list */


function insertNodeAtHead(head, data) {
    let node = new SinglyLinkedList();
    node.data = data;
    let current = head;
    if(!current) return node;
    node.next = current;
    return node;
}