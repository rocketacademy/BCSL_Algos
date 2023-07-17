/** Sort Array by Parity */


var sortArrayByParity = function(nums) {
    // start with a new empty array
    const output = [];

    // loop through the array... here we go!
    for (let i = 0; i < nums.length; i+=1) {
        // Conditional to check if the current number is even 
        if (nums[i]%2)  {
            // if even put it to the start of the output array
            output.push(nums[i]);
        } else {
            // else add it to the end of the output array
            output.unshift(nums[i]);
        }
    }
    // return that output because we need to give leetCode something
    return output;
};