/** Two Strings */

function twoStrings(s1, s2) {
    // Write your code here

    // using a set to do this
    let set1 = new Set(s1);

        for(let j=0; j<s2.length; j++){
            // while looping through set2, if set 1 contains it return "yes"
           if(set1.has(s2[j])){
               return "YES";
           }
 }
 return "NO";

}