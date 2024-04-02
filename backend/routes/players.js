const express = require('express')
const Player = require('../models/PlayerSchema')

// require the controller
const {
	createPlayer,
	updatePlayer,
	deletePlayer,
	getPlayer,
	getPlayers,
} = require('../controllers/playerController')

const router = express.Router()

// GET all players
router.get('/players', getPlayers)

// GET a single player
router.get('/players/:id', getPlayer)

// POST a new player
router.post('/addPlayer', createPlayer)

// DELETE a player
router.delete('/players/:id', deletePlayer)

// UPDATE a player
router.put('/players/:id', updatePlayer)

module.exports = router
