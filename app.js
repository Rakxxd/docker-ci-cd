const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')))

app.get('/about', (req, res) => res.sendFile(path.join(__dirname+'/about.html')))

app.get('/sitemap', (req, res) => res.sendFile(path.join(__dirname+'/sitemap.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))