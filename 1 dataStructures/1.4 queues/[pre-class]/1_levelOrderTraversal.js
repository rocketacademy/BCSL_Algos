/** Level-Order Traversal*/

const levelOrderTraversal = (nestedArray) => {
    flattenedArray = [];
  
    // Dequeue elements from nested array until empty
    while (nestedArray.length > 0) {
      // Get current first element in nested array
      firstElement = nestedArray.shift();
  
      // If first element is number, push to flattenedArray
      if (typeof firstElement === 'number') {
        flattenedArray.push(firstElement);
        continue;
      }
  
      // If first element is array, enqueue nested elements to nestedArray
      nestedArray.push(...firstElement);
    }
  
    // Return final flattenedArray
    return flattenedArray
  }