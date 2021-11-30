const express = require('express')
const app = express()
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('<h2>Hello World!</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})