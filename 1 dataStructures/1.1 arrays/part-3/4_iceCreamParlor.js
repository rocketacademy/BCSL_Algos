/** Ice Cream Parolor */

function icecreamParlor(m, arr) {
    let results = {};
    
    for(let i = 0; i <= arr.length; i++){

        // as you loop check if this entry already exists
        if(results[arr[i]]!== undefined) { // hackerRank does not allow for "falsey" check
            // if it does, return the prices of the two flavors
            return [results[arr[i]] + 1, i + 1]
        }
        // else store the value of the first
        results[m - arr[i]] = i;
    }
}