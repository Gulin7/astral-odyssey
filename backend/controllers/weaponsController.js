const mongoose = require('mongoose')
const Weapon = require('../models/WeaponSchema')

const isValidId = async (id) => {
	const weapon = await Weapon.findOne({ id: id })
	if (weapon) {
		return true
	}
	return false
}

const getFirstFreeId = async () => {
	let myId = -1
	const weapons = await Weapon.find().sort({ id: 1 })
	for (let i = 0; i < Weapons.length; i++) {
		if (weapons[i].id != i + 1) {
			myId = i + 1
			break
		}
	}
	if (myId == -1) {
		myId = weapons.length + 1
	}
	return myId
}

// get all Weapons
const getWeapons = async (req, res) => {
	const weapons = await Weapon.find().sort({ id: 1 })

	res.status(200).json(weapons)
}

// get a single Weapon
const getWeapon = async (req, res) => {
	const { id } = req.params

	if (isValidId(id) == false) {
		return res.status(404).json({ error: 'Weapon not found' })
	}

	const weapon = await Weapon.findOne({ id: id })

	if (!weapon) {
		return res.status(404).json({ error: 'Weapon not found' })
	}
	res.status(200).json(weapon)
}

// create a new Weapon
const createWeapon = async (req, res) => {
	//TO DO
	console.log(req.body)
	let { itemName, primaryStat, itemRarity, classes, itemDescription, itemPrice } = req.body

	const id = await getFirstFreeId()

	try {
		const newWeapon = await Weapon.create({
			id,
			itemName,
			primaryStat,
			itemRarity,
			classes,
			itemDescription,
			itemPrice,
		})
		res.status(200).json(newWeapon)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

const deleteWeapon = async (req, res) => {
	const { id } = req.params

	if (isValidId(id) == false) {
		return res.status(404).json({ error: 'Weapon not found' })
	}

	const weapon = await Weapon.findOneAndDelete({ id: id })

	if (!weapon) {
		return res.status(404).json({ error: 'Weapon not found!' })
	}

	res.status(200).json(weapon)
}

const updateWeapon = async (req, res) => {
	const { id } = req.params

	if (isValidId(id) == false) {
		return res.status(404).json({ error: 'Weapon not found' })
	}

	const weapon = await Weapon.findOneAndUpdate({ id: id }, { ...req.body })

	if (!weapon) {
		return res.status(404).json({ error: 'Weapon not found' })
	}

	res.status(200).json(weapon)
}

module.exports = {
	createWeapon,
	updateWeapon,
	deleteWeapon,
	getWeapon,
	getWeapons,
}
