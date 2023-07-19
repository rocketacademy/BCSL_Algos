/** reverse a doubly Linked List */

function reverse(llist) {
    
    let current = llist;
    let reverse = null;
    let temp = null;
    
    while(current !== null){
        temp = current.next;
        current.next = reverse;
        reverse = current;
        current = temp; 
    }
    
    return reverse;

}