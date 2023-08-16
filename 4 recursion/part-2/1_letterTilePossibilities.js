/** Letter Tile Possibilities */

var numTilePossibilities = function (tiles) {
  // the setup
  let letters = {};
  for (let i of tiles) {
    if (letters[i]) {
      letters[i] += 1;
    } else {
      letters[i] = 1;
    }
  }
  
  // resursive function starts here
  let backTrack = (obj) => {
    let sum = 0;
    

    for (let key in obj) {
      if (letters[key] > 0) {
        sum += 1;
        letters[key] -= 1;
        sum += backTrack(letters);
        letters[key] += 1;
      }
    }
    
    return sum;
  };

  return backTrack(letters);
};
