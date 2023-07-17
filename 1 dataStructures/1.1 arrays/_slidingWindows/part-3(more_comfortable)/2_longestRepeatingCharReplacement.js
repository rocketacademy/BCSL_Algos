/** Longest Repeating Character Replacement */

var characterReplacement = function(s, k) {
    let left = 0 
    let right = 0
    let mostFreq = 0
    let maxLen = 0;
    let freqMap = {};
    
    for(right = 0; right < s.length; right++) {
        freqMap[s[right]] = freqMap[s[right]] + 1 || 1;
        mostFreq = Math.max(freqMap[s[right]], mostFreq);
        
        while(right-left+1 - mostFreq > k) {
            freqMap[s[left]] -= 1;
            left++;
        }
        maxLen = Math.max(right-left+1, maxLen);
    }
    return maxLen;
};