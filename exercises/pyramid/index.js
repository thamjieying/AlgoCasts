// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (let i=1; i <=n; i++){
    const padding = ' '.repeat(n-i)
    const bricks = '#'.repeat(2*i -1)

    console.log( padding + bricks + padding )
  }
}

module.exports = pyramid;
