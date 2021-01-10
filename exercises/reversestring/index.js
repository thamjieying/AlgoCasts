// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const strArr = str.split('')
  const len = strArr.length
  for (let i = 0; i < strArr.length/2 ; i++) {
    const temp = strArr[i]
    const indexToChangeWith = len-1-i

    strArr[i] = strArr[indexToChangeWith]
    strArr[indexToChangeWith] = temp
  }
  return strArr.join('')
}

module.exports = reverse;
