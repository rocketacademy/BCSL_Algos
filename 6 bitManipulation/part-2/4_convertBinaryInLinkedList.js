/** Convert Binary Number in a Linked List to Integer */


var getDecimalValue = function(head) {
    let num = 0;
    
    while (head != null) {
        num <<= 1;
        num |= head.val;
        head = head.next;   
    }
   
    return num;
};