/** Print the Elements of a Linked LIst in reverse */

function reversePrint(llist) {
  let reversedList = [];
  let current = llist;

  // if llist is empty, return nothing there
  if (llist === null) {
    return;
  }

  // push all data into an array
  while (current) {
    reversedList.push(current.data);
    current = current.next;
  }

  // print array in reverse
  for (let i = reversedList.length - 1; i >= 0; i--) {
    console.log(reversedList[i]);
  }
}
