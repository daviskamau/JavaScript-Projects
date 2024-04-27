import express from 'express'

import template from './template'

const app = express()
const PORT = 3000

app.use(express.static('public'))

app.get('*', (req, res) => {
  res.send(template())
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
