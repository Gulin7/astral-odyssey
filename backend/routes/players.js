const express = require('express')
const Player = require('../models/PlayerSchema')
const protectRoute = require('../middleware/protectRoute')

// require the controller
const {
	createPlayer,
	updatePlayer,
	deletePlayer,
	getPlayer,
	getPlayers,
} = require('../controllers/playerController')

const playersRouter = express.Router()

// GET all players
playersRouter.get('/', getPlayers)

// GET a single player
playersRouter.get('/:id', getPlayer)

// POST a new player
playersRouter.post('/addPlayer', createPlayer)

// DELETE a player
playersRouter.delete('/:id', deletePlayer)

// UPDATE a player
playersRouter.put('/:id', updatePlayer)

module.exports = playersRouter
