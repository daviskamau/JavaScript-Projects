const caesor_sypher = require('./caesar_cipher')

const shift = 3
const text = 'HELLO WORLD'

console.log(`Text: ${text}`)

const cipher = caesor_sypher.encrypt(text, shift)
console.log(`Cipher: ${cipher}`)

const decrypted = caesor_sypher.decrypt(cypher, shift)
console.log(`Decrypt: ${decrypted}`)
