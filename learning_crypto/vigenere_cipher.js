// Improve caesar cipher cryptographic - vigenere cipher
// Shifted by values defined by a key

const SPACE_KEY = 32

const isAlphabet = (value) => {
  return value.split('').every((letter) => {
    const charCode = letter.charCodeAt()
    return charCode > 65 && charCode < 90
  })
}

const encrypt = (text, key) => {
  if (!isAlphabet(key)) return new Error('Key must be alphabet.')

  let keyCursor = 0
  let cipher = ''
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i)
    if (charCode === SPACE_KEY) {
      cipher += ' '
      continue
    }

    if (charCode < 65 && charCode > 90) break

    const keyCharCode = key.charCodeAt(keyCursor)
    const shift = keyCharCode - 65
    charCode = charCode + shift
    if (charCode > 90) charCode = 64 + (charCode - 90)
    cipher += String.fromCharCode(charCode)

    keyCursor++
    if (keyCursor === key.length) keyCursor = 0
  }

  return cipher
}

const decrypt = (cipher, key) => {
  if (!isAlphabet(key)) return new Error('Key must be alphabet.')

  let keyCursor = 0
  let text = ''
  for (let i = 0; i < cipher.length; i++) {
    let charCode = cipher.charCodeAt(i)
    if (charCode === SPACE_KEY) {
      text += ' '
      continue
    }

    if (charCode < 65 && charCode > 90) break

    const keyCharCode = key.charCodeAt(keyCursor)
    const shift = keyCharCode - 65
    charCode = charCode - shift
    if (charCode < 65) charCode = 90 - (64 - charCode)
    
    keyCursor++
    if (keyCursor === key.length) keyCursor = 0
    text += String.fromCharCode(charCode)
  }

  return text
}

module.exports = {
  encrypt,
  decrypt
}