// encode a base10 number in the specified alphabet
const encode = (alphabet, n) => (n ? encode(alphabet, Math.floor(n / alphabet.length)) : '') + (n ? alphabet[n % alphabet.length] : '')

// decode a string of the specified alphabet into base10
const decode = (alphabet, [n, ...rest]) =>
  (Math.pow(alphabet.length, rest.length) * alphabet.indexOf(n)) + (rest.length ? decode(alphabet, rest) : 0)

// get an alphabet-specific decode function
const getDecode = (alphabet) => (input) => decode(alphabet, input)

// get an alphabet-specific encode function
const getEncode = (alphabet) => (input) => encode(alphabet, input)

const base10 = '0123456789'
const base26 = 'abcdefghijklmnopqrstuvwxyz'

const fromBase10 = getDecode(base10)
const fromBase26 = getDecode(base26)

console.log(fromBase10('123')) // 123
console.log(fromBase26('dov')) // 2413

const toBase10 = getEncode(base10)
const toBase26 = getEncode(base26)

console.log(toBase10(123)) // '123'
console.log(toBase26(2413)) // 'dov'

const names = [
  'dov',
  'luna',
  'totoro',
  'cat'
].map(fromBase26)

console.log(toBase26(names.reduce((sum, n) => sum + n, 0))) // tpfouc

