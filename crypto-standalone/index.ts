import { createCipheriv, createDecipheriv, randomBytes } from "crypto";

const iv = randomBytes(16)
const key = randomBytes(32)
const data = 'test'

const cipher = createCipheriv('aes-256-ctr', key, iv)
const encrypted = cipher.update(data)
const cipherText = Buffer.concat([encrypted, cipher.final()])

const decipher = createDecipheriv('aes-256-ctr', key, iv)
const decrypted = decipher.update(cipherText)
const plaintext = Buffer.concat([decrypted, decipher.final()]).toString('utf8')
console.log(`Plainttext equals source: ${data === plaintext}`)