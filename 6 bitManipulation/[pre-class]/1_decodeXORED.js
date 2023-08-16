/** Decode XORed Array */

var decode = function(encoded, first) {
    let output = [first];
    for(var i=0;i<encoded.length;i++){
        first = encoded[i]^first;
        output.push(first);
    }
    return output;
};