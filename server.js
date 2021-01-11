const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
console.log('server started on port: ', PORT)

const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(PORT)
