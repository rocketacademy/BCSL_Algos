/** Longest Substring Without Repeating Characters */

var lengthOfLongestSubstring = function(s) {
    var obj = {};
    var i = j = 0;
    var n = s.length;
    var len = 0;
    while (i < n && j < n) {
        if (!obj[s[i]]) {
            obj[s[i++]] = 1;
            len = Math.max(len, i - j);
        } else {
            obj[s[j++]] = 0;
        }
    }
    return len;
};