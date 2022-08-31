require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./routes/index')

app.use(cors()) // to override browser data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(PORT, (req, res) => {
    console.log(`App is listening on port ${PORT}`)
})