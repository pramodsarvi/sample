const express = require('express')
const app = express()
var port = normalizePort(process.env.PORT || '8081');

app.get('/', (req, res) => {
  res.send('<h2>Hello World!</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})