/** Print the Elements of a Linked List */

function printLinkedList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
}