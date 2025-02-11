// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const wordArr = str.split(' ')
  return wordArr.map(word=> {
    return word[0].toUpperCase() + word.substring(1,word.length)
  }).join(' ')
}

module.exports = capitalize;
