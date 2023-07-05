/** String Matching in an Array */


var stringMatching = function(words) {
    // start my sorting the array
    words.sort((a, b) => a.length - b.length)

    // again have an output array ready for us
    const output = []
    
    // we love looping over arrays
    for(let i=0; i<words.length; i+=1) {
        const currentWord = words[i]
        
        // a second loop to loop starting from 1 ahead of I
        for(let j=i+1; j<words.length; j+=1) {

            // check if the current word is a substring of the next word
            if(words[j].includes(currentWord)) {
                // if so... push it into the output
                output.push(currentWord)
                break
            }
        }
    }
    
    return output
};