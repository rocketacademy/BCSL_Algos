/** Power of Three */


var isPowerOfThree = function(n) {
    console.log(`Function called: ${n}`)
    let output = 'notRun'
    // Base Cases
    if(n == 1) {
        output = true
    }
    else if( n<3 ) {
        output = false
    }
    // recursive element
    if( output =='notRun'){
     output = isPowerOfThree(n/3)
    }

    console.log(`Function resolved: ${n}`, output)
    return output
};