/** Missing Numbers */

function missingNumbers(arr, brr) {
    // start a loop of the first array
    for(let i = 0; i < arr.length; i++){
        // See if the element exists in brr
        const checkIndex = brr.indexOf(arr[i]);
        
        // If it DOES exist in brr
        if(checkIndex !== -1){
            // remove it from brr
            brr.splice(checkIndex, 1);
        }
    }
    // use a Set to get only unique numbers, and we sort whatever is remaining in brr
    return [...new Set(brr.sort((a, b) => a - b))];
}