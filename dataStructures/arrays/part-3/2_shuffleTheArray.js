/** Shuffle The Array */


var shuffle = function(nums, n) {
    // again we start with an empty output array
    let output = [];
    // Another loop here we go!
    for (i = 0; i < n; i+=1) {
        // for each element, we just push the element and the nth position after that element
        output.push(nums[i],nums[i+n]);
    }

    // return it for good will
    return output;
};