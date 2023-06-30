/** Jewels and Stones  */

var numJewelsInStones = function(J, S) {

	// declare a count & length variable 
    let count = 0
    let len = S.length
	
	// Iterate through the longest array S. Increment count by 1 if it exists in J
    for (let i = 0; i < len; i++){
        // if S exists in J, add to count
        if (J.indexOf(S[i]) >= 0){
            count+=1
        }
    }
    return count
};