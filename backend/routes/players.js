const express = require('express')
const Player = require('../models/Player')

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
router.post('/addPlayer', async (req, res) => {
	const { id, username, nickname, pictureURL } = req.body

	try {
		const newPlayer = await Player.create({ id, username, nickname, pictureURL })
		res.status(200).json(newPlayer)
	} catch (error) {
		// respond w 400, an error code
		res.status(400).json({ error: error.message })
	}
})

// DELETE a player
router.delete('/players/:id', deletePlayer)

// UPDATE a player
router.put('/players/:id', updatePlayer)

module.exports = router
