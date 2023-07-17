/**  Palindrome Linked List*/

var isPalindrome = function(head) {
    let ptr = head;
    let num = [];
    while(ptr.next !== null){
        num.push(ptr.val);
        ptr = ptr.next;
        if(ptr.next === null){
            num.push(ptr.val);
        }
    }
    let end = num.length - 1;
    for(let i=0;i<num.length;i++){
        if(num[i] === num[end]){
            end--;
        }
        else{
            return false;
        }
    }
    return true;
};