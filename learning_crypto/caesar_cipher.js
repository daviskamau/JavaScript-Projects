// Simplest form of cryptography
// shift alphabetic letters by a number
// ex: ABC -> DEF (shift by 3)

const encrypt = (text, shift) => {
  let cipher = ''
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i)
    if (charCode === 32) {
      cipher += ' '
    } else {
      if (charCode < 65 && charCode > 90) break
      charCode = charCode + shift
      if (charCode > 90) charCode = 64 + (charCode - 90)
      cipher += String.fromCharCode(charCode)
    }
  }

  return cipher
}

const decrypt = (cipher, shift) => {
  let text = ''

  for (let i = 0; i < cipher.length; i++) {
    let charCode = cipher.charCodeAt(i)
    if (charCode === 32) {
      text += ' '
    } else {
      if (charCode < 65 && charCode > 90) break
      charCode = charCode - shift
      if (charCode < 65) charCode = 90 - (64 - charCode)
      text += String.fromCharCode(charCode)
    }
  }

  return text
}


module.exports = {
  encrypt,
  decrypt
}
