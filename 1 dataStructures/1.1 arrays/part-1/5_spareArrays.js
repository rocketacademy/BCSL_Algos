/** Sparse Arrays */

function matchingStrings(stringList, queries) {
    
    let count = 0;
    let result = [];
    
    for(let i = 0 ; i < queries.length;i++){
        let query = queries[i];
        
        for(let q = 0; q < stringList.length; q++){
            if(query === stringList[q]){
                count++;
            }
        }
        result.push(count);
        count = 0;
    }
    
    return result;
}