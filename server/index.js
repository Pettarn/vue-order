const http = require('http')
const path = require('path')
const express = require('express')


var app = express()

app.get('/', function (req, res) {
    console.log('111')
    res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})
app.get('/static/*', function (req, res) {
    var fileName = req.path
    fileName = fileName.split('')
    fileName.shift()
    fileName = fileName.join('')
    console.log(path.resolve(__dirname, 'dist', fileName))
    res.sendFile(path.resolve(__dirname, 'dist', fileName))
})

app.listen(3000, function () {
    console.log('Server is running.')
})