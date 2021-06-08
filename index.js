const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static(__dirname + '/public_html'));

app.listen(port, () => {
  console.log(`Calculadora listening at http://localhost:${port}`)
})