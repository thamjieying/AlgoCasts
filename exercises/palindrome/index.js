// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const len = str.length
  let index = 0
  while(index < len/2){
    const oppIndex = len-1-index
    if(str[index] !== str[oppIndex]){
      return false
    }
    index++
  }

  return true
}

module.exports = palindrome;
