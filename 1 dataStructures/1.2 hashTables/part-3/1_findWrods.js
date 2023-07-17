/** Find Words That Can Be Formed By Characters */



/**
Pseudo coding:
1. Tally up all the letters in chars
2. loop through the array of words, and compare it to the Tally, if the word is spellable by the tally, remove the letters form the word, and move on to the next word 
3. for each word that works sum up the the ones that work
4. return output
 */

var countCharacters = function(words, chars) {
    const charTally ={}
    const charArray = chars.split('')
    
    charArray.forEach((letter)=>{
        if(charTally[letter]){
            charTally[letter] +=1
        } else{
            charTally[letter] =1
        }
    })
    let output = 0
    words.forEach((word)=>{
        const tempTally = {...charTally} 
        let found = true
        for (let i =0; i<word.length; i++){
            if(tempTally[word[i]]>0){
                tempTally[word[i]] -=1
            }else {
                found = false
            }
        }
        if(found){
            output += word.length
        }
    })
    return output
    };