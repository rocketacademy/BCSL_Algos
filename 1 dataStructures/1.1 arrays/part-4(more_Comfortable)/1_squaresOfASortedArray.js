/** Squares of a Sorted Array */

const sortedSquares = function(nums) {
    // make a new array that squares everything
    const output =  nums.map(value => Math.pow(value,2));

    // then sort it in increaseing order
    return output.sort((a,b)=> a-b);
    
  };