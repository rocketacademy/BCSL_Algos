/** How Many Numbers Are Smaller Than the Current Number */


// try using a map 
var smallerNumbersThanCurrent = function(nums) {
    const hashmap = new Map();
    
    // sort the array
    const array = [...nums].sort((a,b) => a - b);
    
    // loop through the sorted array, and put the index of it into the map
    for (let i = 0; i < array.length; i++) {
        if (!hashmap.has(array[i])) hashmap.set(array[i], i);
    }

    // loop through the nums array  and find out how many numbers are before it
    for (let i = 0; i < nums.length; i++) {
        nums[i] = hashmap.get(nums[i]);
    }
    
    return nums;
};