// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const sign = Math.sign(n)
  const numArr = Math.abs(n).toString().split('')
  const arrLen = numArr.length
  
  for (let i = 0; i < numArr.length/2; i++) {
    let temp = numArr[i]

    numArr[i] = numArr[arrLen - 1 - i]
    numArr[arrLen-1-i] = temp
  }
  return sign * parseInt(numArr.join(''))

}

module.exports = reverseInt;
