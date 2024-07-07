const express = require('express')
const Weapon = require('../models/WeaponSchema')
const protectRoute = require('../middleware/protectRoute')

//require the controller
const {
	createWeapon,
	updateWeapon,
	deleteWeapon,
	getWeapon,
	getWeapons,
} = require('../controllers/weaponsController')

const weaponsRouter = express.Router()

//// GET all weapon
weaponsRouter.get('/', getWeapons)

// GET a single weapon
weaponsRouter.get('/:id', getWeapon)

// POST a new weapon
weaponsRouter.post('/addWeapon', createWeapon)

// DELETE a weapon
weaponsRouter.delete('/:id', deleteWeapon)

// UPDATE a weapon
weaponsRouter.put('/:id', updateWeapon)

// export the router
module.exports = weaponsRouter
