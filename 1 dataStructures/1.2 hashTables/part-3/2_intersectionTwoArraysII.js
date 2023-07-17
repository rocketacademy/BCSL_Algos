 /** Intersection of Two Arrays II */
 
 /**
 Pseudo code:

 1. Tally up the elements in the nums 1
 2. for each element in nums 2, compare to see if it exists (quantity more than 1)
 3. if it does, push it to an output array. 
 4. deduct that from the tally for nums1
  */
 var intersect = function (nums1, nums2) {
    const nums1Tally = {}
    const output = [];
    
    nums1.forEach((number)=>{
        if(nums1Tally[number]){
            nums1Tally[number] +=1
        } else{
            nums1Tally[number] =1
        }
    })
    
    nums2.forEach((numberCheck)=>{
        if(nums1Tally[numberCheck]){
            nums1Tally[numberCheck] -=1
            output.push(numberCheck)
        }
    })
    
    return output
    
};