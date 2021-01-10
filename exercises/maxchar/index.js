// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxCharCount = 0
  let maxChar = ''
  let charCountObj = {}
  for(let char of str) {
    charCountObj[char] = charCountObj[char] ? charCountObj[char]+1 : 1
    if(charCountObj[char] > maxCharCount) {
      maxCharCount = charCountObj[char]
      maxChar = char
    }
  }

  return maxChar
}

module.exports = maxChar;
