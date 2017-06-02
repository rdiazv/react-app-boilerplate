var express = require('express')
var path = require('path')

var app = express()
var PORT = process.env.PORT || 8080

app.use(express.static(path.resolve('dist')))

app.get('*', function(req, res) {
  res.sendFile(path.resolve('dist/index.html'))
})

app.listen(PORT, function() {
  console.log('Server started at http://localhost:' + PORT)
})
