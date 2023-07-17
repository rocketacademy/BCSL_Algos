/** First Bad Version */



var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
     
    // Essentially the same as the pre-class
    return function(n) {
       let start = 1
       let end = n
       while (start <= end) {
           let mid = Math.floor((start + end) / 2)
           if (!isBadVersion(mid)) {
               start = mid + 1
           } else {
               end = mid - 1
           }
       }
       return start
    };
};