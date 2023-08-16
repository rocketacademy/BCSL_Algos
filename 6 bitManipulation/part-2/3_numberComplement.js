/** Number Complements */


function countBits(num) {
    let counter = 0;
    while (num) {
        counter++;
        num = num >> 1;
    }
    return counter;
}
var findComplement = function (num) {
    let mask = (1 << countBits(num)) - 1;
    return num ^ mask;
};