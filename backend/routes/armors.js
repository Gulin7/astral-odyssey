const express = require('express')
const Armor = require('../models/ArmorSchema')
const protectRoute = require('../middleware/protectRoute')

//require the controller
const {
	createArmor,
	updateArmor,
	deleteArmor,
	getArmor,
	getArmors,
} = require('../controllers/armorsController')

const armorsRouter = express.Router()

//// GET all armor
armorsRouter.get('/', getArmors)

// GET a single armor
armorsRouter.get('/:id', getArmor)

// POST a new armor
armorsRouter.post('/addArmor', createArmor)

// DELETE a armor
armorsRouter.delete('/:id', deleteArmor)

// UPDATE a armor
armorsRouter.put('/:id', updateArmor)

// export the router
module.exports = armorsRouter
