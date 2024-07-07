const express = require('express')
const Character = require('../models/CharacterSchema')
const protectRoute = require('../middleware/protectRoute')

// require the controller
const {
	createCharacter,
	updateCharacter,
	deleteCharacter,
	getCharacter,
	getCharacters,
} = require('../controllers/characterController')

const charactersRouter = express.Router()

// GET all characters
charactersRouter.get('/', getCharacters)

// GET a single character
charactersRouter.get('/:id', getCharacter)

// POST a new character
charactersRouter.post('/addCharacter', createCharacter)

// DELETE a character
charactersRouter.delete('/:id', deleteCharacter)

// UPDATE a character
charactersRouter.put('/:id', updateCharacter)

// export the router
module.exports = charactersRouter
