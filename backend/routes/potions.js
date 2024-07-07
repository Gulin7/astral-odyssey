const express = require('express')
const Potion = require('../models/PotionSchema')
const protectRoute = require('../middleware/protectRoute')


//require the controller
const {
	createPotion,
	updatePotion,
	deletePotion,
	getPotion,
	getPotions,
} = require('../controllers/potionsController')

const potionsRouter = express.Router()

//// GET all potions
potionsRouter.get('/', getPotions)

// GET a single potion
potionsRouter.get('/:id', getPotion)

// POST a new potion
potionsRouter.post('/addPotion', createPotion)

// DELETE a potion
potionsRouter.delete('/:id', deletePotion)

// UPDATE a potion
potionsRouter.put('/:id', updatePotion)

// export the router
module.exports = potionsRouter
