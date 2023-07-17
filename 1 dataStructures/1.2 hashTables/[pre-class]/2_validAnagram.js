/** Valid Anagram */

var isAnagram = function(s, t) {
    const count = {};

    // make a tally out of s
    for(let char of s) {
        if(!(count[char])) {
            count[char] = 0;
        }
        count[char]+=1;
    }

    // for each item in T, we remove it from the count. (or if it doens't exist we return false)
    for(let char of t) {
        if(count[char] === undefined) {
            return false;
        } else {
            count[char]-=1;
        }
    }

    // final check through the hash table to make sure there is nothing that is not 0
    for(let char in count) {
        if(count[char] !== 0) {
            return false;
        }
    }

    return true;
};