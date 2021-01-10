// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* SOLUTION 1 */
function anagrams(stringA, stringB) {
  const regex = /[^\w]/g
  let newStringA = stringA.replace(regex, "").toLowerCase()
  let newStringB = stringB.replace(regex, "").toLowerCase()
  
  for (let char of newStringA) {
    newStringB = newStringB.replace(char, "")
  }

  return newStringB.length === 0
}
/* SOLUTION 2 */
// function anagrams(stringA, stringB) {
//   const stringASorted = stringA.split('').sort().join()
//   const stringBSorted = stringB.split('').sort().join()
  
//   return stringASorted === stringBSorted
// }

module.exports = anagrams;
