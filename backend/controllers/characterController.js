const Character = require('../models/CharacterSchema')
const mongoose = require('mongoose')

// get the first free id
const getFirstFreeId = async () => {
	let myId = -1
	const characters = await Character.find().sort({ id: 1 })
	for (let i = 0; i < characters.length; i++) {
		if (characters[i].id != i + 1) {
			myId = i + 1
			break
		}
	}
	if (myId == -1) {
		myId = characters.length + 1
	}
	return myId
}

// find if an id is valid
const isValidId = async (id) => {
	const character = await Character.findOne({ id: id })
	if (character) {
		return true
	}
	return false
}

// get default skin url
const getDefaultSkinUrl = (charClass) => {
	if (charClass === 'warrior') {
		return 'warrior-default.png'
	} else if (charClass === 'mage') {
		return 'mage-default.png'
	} else if (charClass === 'fighter') {
		return 'fighter-default.png'
	} else if (charClass === 'ranger') {
		return 'ranger-default.png'
	}
	return 'warrior-default.png'
}

// GET all characters
const getCharacters = async (req, res) => {
	const characters = await Character.find().sort({ id: 1 })

	res.status(200).json(characters)
}

// GET a single character
const getCharacter = async (req, res) => {
	const { id } = req.params

	if (!isValidId(id)) {
		return res.status(404).json({ error: 'Character not found' })
	}

	const character = await Character.findOne({ id: id })

	if (!character) {
		return res.status(404).json({ error: 'Character not found' })
	}

	res.status(200).json(character)
}

// POST a new character
const createCharacter = async (req, res) => {
	console.log(req.body)
	let { name, charClass, race, playerId } = req.body

	// fields properly
	charClass = charClass.toLowerCase()
	race = race.toLowerCase()

	// add doc to db
	const id = await getFirstFreeId()
	try {
		const newCharacter = await Character.create({
			id,
			name,
			charClass,
			race,
			playerId,
			skinURL: getDefaultSkinUrl(charClass),
			level: 1,
		})
		res.status(200).json(newCharacter)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// DELETE a character
const deleteCharacter = async (req, res) => {
	const { id } = req.params

	if (isValidId(id) == false) {
		return res.status(404).json({ error: 'Character not found' })
	}

	const character = await Character.findOneAndDelete({ id: id })

	if (!character) {
		return res.status(404).json({ error: 'Character not found' })
	}

	res.status(200).json(character)
}

// UPDATE a character
const updateCharacter = async (req, res) => {
	const { id } = req.params

	if (isValidId(id) == false) {
		return res.status(404).json({ error: 'Character not found' })
	}

	console.log(req.body)

	const character = await Character.findOneAndUpdate({ id: id }, { ...req.body })

	if (!character) {
		return res.status(404).json({ error: 'Character not found' })
	}

	res.status(200).json(character)
}

// Exports
module.exports = {
	getCharacter,
	getCharacters,
	createCharacter,
	deleteCharacter,
	updateCharacter,
}
