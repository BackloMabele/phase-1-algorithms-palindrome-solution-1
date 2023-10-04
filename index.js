function isPalindrome(word) {
  const lowerCaseWord = word.toLowerCase()
  const reversedWord = lowerCaseWord.split('').reverse().join('');
  return lowerCaseWord === reversedWord;
}

/* 
  reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  the function will receive one argument, a string.
   the function will then return true if the string is a palindrome 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("mom"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("abba"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("a"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("hi"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  }

module.exports = isPalindrome;
