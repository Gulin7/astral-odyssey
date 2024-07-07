const cors = require('cors')
const express = require('express')

// Require cookie parser
const cookieParser = require('cookie-parser')

//routes
const playerRoutes = require('./routes/players')
const characterRoutes = require('./routes/characters')
const userRoutes = require('./routes/users')

//routes -> items
const armorRoutes = require('./routes/armors')
const potionRoutes = require('./routes/potions')
const weaponRoutes = require('./routes/weapons')

//routes -> chat
const chatRoutes = require('./routes/chats')
const messageRoutes = require('./routes/messages')

//express app
const app = express()

app.use(cors())

//middleware
app.use(express.json())
app.use(cookieParser())

app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

// Check server on route
app.use('/checkConnection', (req, res) => {
	res.status(200).json('Server is running')
})

//routes
app.use('/api/users', userRoutes)
app.use('/api/players', playerRoutes)
app.use('/api/characters', characterRoutes)

//routes -> items
app.use('/api/armors', armorRoutes)
app.use('./api/weapons', weaponRoutes)
app.use('./api/potions', potionRoutes)

//routes -> chat
app.use('/api/chats', chatRoutes)
app.use('/api/messages', messageRoutes)

//exports
module.exports = app
