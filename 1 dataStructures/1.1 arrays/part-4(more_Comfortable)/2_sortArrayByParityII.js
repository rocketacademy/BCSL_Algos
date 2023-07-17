/** Sort Array by Parity II */


var sortArrayByParityII = function(A) {

    // create some starting varaibles, including the output array and the starting index for even and odd
    let output = [];
    let even = 0
    let odd = 1
    
    
    for(let i = 0; i < A.length; i ++) {

        // check if the number is even
        if(A[i] % 2 === 0) {
            // if so, place the number in the next mreserved even spot
            output[even] = A[i];

            // move the index marker fort he next even numbers
            even += 2;
        } else {
            // the same for odd as done to evens above
            output[odd] = A[i];
            odd += 2;
        }
    }
    return output;
};