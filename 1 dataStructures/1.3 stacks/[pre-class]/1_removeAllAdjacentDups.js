/** Remove All Adjacent Duplicates in String */


var removeDuplicates = function(s) {
    let output = [];
    
    // loop through the entire word
    for (let i = 0; i < s.length; i++) {
        // if this letter is equal to the last the pop it from the array
        if (s[i] === output[output.length - 1]) {
            output.pop();
        } else {
            // if not add it in
            output.push(s[i]);
        }
    }
    
    return output.join('');
};