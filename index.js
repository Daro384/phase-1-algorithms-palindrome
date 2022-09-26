function isPalindrome(word) {
  const reversed = word.split("").reverse().join("")
  if (word === reversed) return true
  return false
  
}

/* 
  first split the string
  then reverse the new created array
  then join the array into a string
  compare word to new reversed string
  if they are the same return true
  else return false
*/

/*
psudo code explains it well enough
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
