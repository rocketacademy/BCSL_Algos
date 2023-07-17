/** Ransom Note */



function checkMagazine(magazine, note) {
  // initiate a Hash Table to be used here
  const magazineWords = {};

  // loop through magazine and make a tally into magazineWords
  for (let i = 0; i < magazine.length; i += 1) {
    if (magazineWords[magazine[i]]) {
      magazineWords[magazine[i]] += 1;
    } else {
      magazineWords[magazine[i]] = 1;
    }
  }


  // loop through notes
  for (let i = 0; i < note.length; i += 1) {
    // if the word doesn't exist in notes or you run out of the word... return a "no"
    if (!magazineWords[note[i]] || magazineWords[note[i]] === 0) {
      console.log("No");
      return;
    } else {
        // other wise, subtract 1 from the tally
      magazineWords[note[i]] -= 1;
    }
  }
// if you gone through the entire tally through the whole notes that means you do have enough letters and return "yes"
  console.log("Yes");
}

