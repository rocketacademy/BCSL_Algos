/** Longest Turbulent Subarray */

//  start an for loop to loop through each element (var i) [start pointer]
// have a second pointer that always starts with i+1 and checks if it is a turbulent subarray
// keep track of the previous difference of the two numbers
// if second pointer continues, and still is turbulent... second pointer keeps moving
// else if array no longer turbulent, end it, and move on with main loop (after comparing array length)


var maxTurbulenceSize = function(arr) {
    let output = 0
    
    for (i=0; i< arr.length; i+= 1){
        // while conditional
        let turbulent = true
        // tracker
        let currLength = 1
        // start pointer
        let start = i
        // end pointer
        let end = i+1
        // last difference
        let difference = undefined //'greater' || 'smaller' 
        
        while(turbulent){
            let currDiff
            if (arr[start] > arr[end]){
                currDiff = 'greater'
            } else if (arr[start] < arr[end]){
                currDiff = 'smaller'
            } else {
                 turbulent = false
                // record length and compare to output
                output = Math.max(output, currLength)
            }
            if(currDiff === difference){
                turbulent = false
                // record length and compare to output
                output = Math.max(output, currLength)
            } else {
                difference = currDiff
                end+=1
                start +=1
                currLength +=1
            }  
        }
    }
    return output
};