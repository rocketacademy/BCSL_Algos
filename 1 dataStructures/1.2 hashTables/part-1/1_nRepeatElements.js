/** N-Repeated Elements in Size 2N Array */


var repeatedNTimes = function(nums) {
    let map = {};

    // loop through the array of maps
    for (let i = 0; i < nums.length; i++) {
        // if number doesn't exist inside of hash table put it in
        if(!map[nums[i]]) {
            const element = nums[i];
            map[element] = true;
        } else {
            return nums[i];
        }
    }
};