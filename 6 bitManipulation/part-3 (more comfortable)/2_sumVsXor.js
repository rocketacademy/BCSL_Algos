/** Sum VS XOR */

function sumXor(n) {
    const na = Number(n).toString(2);
    if(na.length === 1) return 1
    return 2 ** na.match(/0/g).length
  }