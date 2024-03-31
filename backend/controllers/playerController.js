const Player = require('../models/Player')
const mongoose = require('mongoose')

// GET all players
const getPlayers = async (req, res) => {
	try {
		const players = await Player.find().sort({ createdAt: -1 })
		res.status(200).json(players)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// GET a single player
const getPlayer = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Player not found' })
	}

	try {
		const player = await Player.findById(id)
		res.status(200).json(player)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// POST a new player
const createPlayer = async (req, res) => {
	const { id, username, nickname, pictureURL } = req.body

	// add doc to db
	try {
		const newPlayer = await Player.create({ id, username, nickname, pictureURL })
		res.status(200).json(newPlayer)
	} catch (error) {
		// respond w 400, an error code
		res.status(400).json({ error: error.message })
	}
}

// DELETE a player
const deletePlayer = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Player not found' })
	}

	try {
		const player = await Player.findByIdAndDelete({ _id: id })
		res.status(200).json(player)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// UPDATE a player
const updatePlayer = async (req, res) => {
	const { id } = req.params
	const { username, nickname, pictureURL } = req.body

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Player not found' })
	}

	try {
		const player = await Player.findByIdAndUpdate({ _id: id }, { ...req.body })
		res.status(200).json(player)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// Exports
module.exports = {
	createPlayer,
	deletePlayer,
	updatePlayer,
	getPlayer,
	getPlayers,
}
