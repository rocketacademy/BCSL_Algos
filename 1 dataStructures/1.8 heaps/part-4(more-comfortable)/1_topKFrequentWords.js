/** Top K Frequent Words */


var topKFrequent = function(words, k) {
	if(words.length === 0 || k === 0) {
		return [];
	}
	
	// build a hash map to count words
	const hashMap = {};

	// count words
	words.forEach((w) => hashMap[w]  // O(n)
		? hashMap[w] = hashMap[w] + 1
		: hashMap[w] = 1
	);
	
	// create a max priority queue, with custom compare function
	const maxPQ = new MaxPriorityQueue({ 
	
		// custom compare function, swap if return 1, don't swap if return -1
		compare: (w1, w2) => {
			// compare count first
			if (w1.count > w2.count) {
				return -1;
			}
			if (w1.count < w2.count) {
				return 1;
			}
			
			// if count is the same, compare string(length and alphabetic order )
			return w1.word > w2.word
				? 1
				: -1;
		}
	});

	// iterate word count hash map and put all element into max priority queue
	Object.keys(hashMap).forEach((w) => maxPQ.enqueue({ // O(n log n)
		word: w, 
		count: hashMap[w]
	}));
	
	// var to store result
	const result = [];
	
	// pop k times from max priority queue for top k words
	while(result.length < k) { // O(k log n)
		const top = maxPQ.dequeue();
		result.push(top.word);
	}
	
	return result;
};