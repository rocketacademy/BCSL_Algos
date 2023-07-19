/** Merge Two Sorted Lists */


// recursive method
var mergeTwoLists = function (l1, l2) {
    // Base cases
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }


  // recursive elements 
  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
  l2.next = mergeTwoLists(l1, l2.next);
  return l2;
};
