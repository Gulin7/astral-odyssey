const cors = require('cors')
const express = require('express')
const playerRoutes = require('./routes/players')

//express app
const app = express()

app.use(cors())

//middleware
app.use(express.json())

app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

//routes
app.use('/api', playerRoutes)

//exports
module.exports = app
