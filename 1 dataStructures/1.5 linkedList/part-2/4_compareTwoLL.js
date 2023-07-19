/**  Compare Two Linked Lists */

function CompareLists(llist1, llist2) {
  while (llist1 != null && llist2 != null) {
    // if they do not match return 0
    if (llist1.data != llist2.data) {
      return 0;
    }
    llist1 = llist1.next;
    llist2 = llist2.next;
  }
  // if both have run out after going throug the entire lists... return 1
  if (!llist1 && !llist2) {
    return 1;
  }
  // else return 0
  return 0;
}
