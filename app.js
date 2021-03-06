'use strict'
const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000
const publicDir = path.join(__dirname, './public')

app.use(express.static(publicDir))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port)