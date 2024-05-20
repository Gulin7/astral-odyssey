const cors = require('cors')
const express = require('express')

//routes
const playerRoutes = require('./routes/players')
const characterRoutes = require('./routes/characters')
const userRoutes = require('./routes/users')

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
app.use('/api/user', userRoutes)
app.use('/api/players', playerRoutes)
app.use('/api/characters', characterRoutes)

//exports
module.exports = app
