/** Remove Linked List Elements */

var removeElements = function(head, val) {
    
    let tempHead = head,prev
    while (tempHead){
        if (tempHead.val ===val){
            // when head is present at 0th index
            if (!prev){
                head = head.next
                tempHead=tempHead.next
            }else{
                prev.next =tempHead.next
                tempHead=tempHead.next
                
            }
        }else{
            prev=tempHead
            tempHead= tempHead.next   
        }
    }
    
    return head
};