/** Crawler Log Folder */

var minOperations = function (logs) {
  let stack = []; // Taking an empty stack.

  // Loop for traversing the logs.
  for (let elem of logs) {
    if (elem == "./") {
      // As mentioned in question 'Remain in the same folder'. So if we encounter "./" the skip the iteration.
      continue;
    }
    if (!stack.length && elem == "../") {
      // If we dont have anything in the stack and we encountered "../", then also we will skip this iteration as we dont have any parent folder yet.
      continue;
    }
    if (stack.length && elem == "../") {
      // If we have parent folder then go to its previous one. i.e 'Move to the parent folder of the current folder', by removing the last element of the stack.
      stack.pop();
    } else {
      // 'Move to the child folder named x', in this we add it in the stack.
      stack.push(elem);
    }
  }
  return stack.length; // Returing the resulting stack length.
};
