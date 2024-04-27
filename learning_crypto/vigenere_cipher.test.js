const vigenere_cipher = require('./vigenere_cipher')

const key = 'DUH'
const text = 'THEY DRINK THE TEA'

console.log(`Text: ${text}`)

const cipher = vigenere_cipher.encrypt(text, key)
console.log(`Cipher: ${cipher}`)

const decrypt = vigenere_cipher.decrypt(cipher, key)
console.log(`Decrypt: ${decrypt}`)
