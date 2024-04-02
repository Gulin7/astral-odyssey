const Player = require('../models/PlayerSchema')
const mongoose = require('mongoose')

// GET all players
const getPlayers = async (req, res) => {
	const players = await Player.find().sort({ createdAt: -1 })

	res.status(200).json(players)
}

// GET a single player
const getPlayer = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Player not found' })
	}

	const player = await Player.findById(id)

	if (!player) {
		return res.status(404).json({ error: 'Player not found' })
	}

	res.status(200).json(player)
}

// POST a new player
let id = 0
const createPlayer = async (req, res) => {
	const { username, nickname, pictureURL } = req.body
	id++
	// add doc to db
	try {
		const newPlayer = await Player.create({ id, username, nickname, pictureURL })
		res.status(200).json(newPlayer)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// DELETE a player
const deletePlayer = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Player not found' })
	}

	const player = await Player.findOneAndDelete({ _id: id })

	if (!player) {
		return res.status(404).json({ error: 'Player not found' })
	}

	res.status(200).json(player)
}

// UPDATE a player
const updatePlayer = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Player not found' })
	}

	const player = await Player.findOneAndUpdate({ _id: id }, { ...req.body })

	if (!player) {
		return res.status(404).json({ error: 'Player not found' })
	}

	res.status(200).json(player)
}

// Exports
module.exports = {
	getPlayer,
	getPlayers,
	createPlayer,
	deletePlayer,
	updatePlayer,
}
