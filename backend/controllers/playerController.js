const Player = require('../models/PlayerSchema')
const mongoose = require('mongoose')
const Character = require('../models/CharacterSchema')

// GET all players
const getPlayers = async (req, res) => {
	try {
		console.log(page)
		const players = await Player.find().sort({ nickname: 1 })

		res.status(200).json(players)
	} catch (error) {
		console.error('Error getting devices: ', error)
		res.status(500).json({ error: 'Internal error' })
	}
}

// GET a single player
const getPlayer = async (req, res) => {
	const { id } = req.params

	// if (isValidId(id) == false) {
	// 	return res.status(404).json({ error: 'Player not found' })
	// }

	const player = await Player.findOne({ _id: id })

	if (!player) {
		return res.status(404).json({ error: 'Player not found' })
	}

	res.status(200).json(player)
}

// POST a new player
const createPlayer = async (req, res) => {
	console.log(req.body)
	const { userId, nickname, pictureURL } = req.body

	// add doc to db
	// const id = await getFirstFreeId()

	try {
		const newPlayer = await Player.create({
			_id: userId,
			userId: userId,
			nickname: nickname,
			pictureURL: pictureURL,
		})
		res.status(200).json(newPlayer)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// DELETE a player
const deletePlayer = async (req, res) => {
	const { id } = req.params

	// if (isValidId(id) == false) {
	// 	return res.status(404).json({ error: 'Player not found' })
	// }

	const player = await Player.findOneAndDelete({ _id: id })

	const characters = await Character.find().sort({ id: 1 })

	// Delete all characters of the player
	for (let i = 0; i < characters.length; i++) {
		if (characters[i].playerId == id) {
			await Character.findOneAndDelete({ _id: characters[i]._id })
		}
	}

	if (!player) {
		return res.status(404).json({ error: 'Player not found' })
	}

	res.status(200).json(player)
}

// UPDATE a player
const updatePlayer = async (req, res) => {
	const { id } = req.params

	// if (isValidId(id) == false) {
	// 	return res.status(404).json({ error: 'Player not found' })
	// }

	console.log(req.body)

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

// get the first free id
// const getFirstFreeId = async () => {
// 	let myId = -1
// 	const players = await Player.find().sort({ id: 1 })
// 	for (let i = 0; i < players.length; i++) {
// 		if (players[i].id != i + 1) {
// 			myId = i + 1
// 			break
// 		}
// 	}
// 	if (myId == -1) {
// 		myId = players.length + 1
// 	}
// 	return myId
// }

// find if an id is valid
// const isValidId = async (id) => {
// 	const player = await Player.findOne({ id: id })
// 	if (player) {
// 		return true
// 	}
// 	return false
// }
