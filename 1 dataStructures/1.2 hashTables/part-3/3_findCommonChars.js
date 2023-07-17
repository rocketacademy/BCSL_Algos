 /** Find Common Characters */
 
 /*
 Pseudo Code:
 1. tally up the first word and save it down
 2. for each subsequent word, also create a tally, and compare
 3. if the letter in tally does not exists int he words tally, delete it
 4. if it does exist in the words tally, take the minimum number between thy two tallys
 5. use the editted tally to build out an array with the remaining letters into output
 6. return output
  **/
 var commonChars = function(words) {
    const tally = {} // go to benchmark (tally first word)
    const output =[]

// creating my "global Tally"
    words[0].split('').forEach((letter)=>{
        if(tally[letter]){
            tally[letter]+=1
        } else{
            tally[letter]=1}
    })

    words.forEach((word)=>{
        const wordTally = {}
        // creating my word tally
        word.split('').forEach((letter)=>{
        if(wordTally[letter]){
            wordTally[letter]+=1
        } else{
            wordTally[letter]=1}
        })


        for (const letter in tally){
            // eliminating words that are not in word Tally
            if(!wordTally[letter]){
                delete tally[letter]
            } else{
                // take the minimum number between the two tallys
                tally[letter] = Math.min(tally[letter], wordTally[letter])
            }
        }

        })
        // fill out the array
        /**
        {
        a:2,
        h:1,
        m:4
        }
         */
        // Array(2).fill('a') --> 'a','a'

    for (const letter in tally){
        output.push(...Array(tally[letter]).fill(letter))
    }
    
    return output

};