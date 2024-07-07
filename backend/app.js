const cors = require('cors')
const express = require('express')

//routes
const playerRoutes = require('./routes/players')
const characterRoutes = require('./routes/characters')
const userRoutes = require('./routes/users')
const armorRoutes = require('./routes/armors')
const potionRoutes = require('./routes/potions')
const weaponRoutes = require('./routes/weapons')

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
app.use('/api/armors', armorRoutes)
app.use('./api/weapons', weaponRoutes)
app.use('./api/potions', potionRoutes)

//exports
module.exports = app
