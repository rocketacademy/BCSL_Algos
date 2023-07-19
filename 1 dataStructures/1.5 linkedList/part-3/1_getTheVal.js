/** Get the value of the node at a specific position from the tail */

function getNode(llist, positionFromTail) {
  // setting up the things i need
  let current = llist;
  let reverse = null;
  let temp = null;

  // if list is empty just return it
  if (!llist) {
    return llist;
  }

  // reversing the list
  while (current !== null) {
    temp = current.next;
    current.next = reverse;
    reverse = current;
    current = temp;
  }
  let currentIndex = 0;
  let current2 = reverse;
  // now "position from tail" is now "position from head"
  while (current2 !== null) {
    // at the position ... break from the while
    if (currentIndex === positionFromTail) {
      break;
    }
    currentIndex++;
    current2 = current2.next;
  }

  return current2.data;
}
