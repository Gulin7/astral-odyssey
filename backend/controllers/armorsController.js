const mongoose = require('mongoose')
const Armor = require('../models/armorSchema')

const isValidId = async (id) => {
	const armor = await Armor.findOne({ id: id })
	if (armor) {
		return true
	}
	return false
}

const getFirstFreeId = async () => {
	let myId = -1
	const armors = await Armor.find().sort({ id: 1 })
	for (let i = 0; i < armors.length; i++) {
		if (armors[i].id != i + 1) {
			myId = i + 1
			break
		}
	}
	if (myId == -1) {
		myId = armors.length + 1
	}
	return myId
}

// get all Armors
const getArmors = async (req, res) => {
	const armors = await Armor.find().sort({ id: 1 })

	res.status(200).json(armors)
}

// get a single Armor
const getArmor = async (req, res) => {
	const { id } = req.params

	if (isValidId(id) == false) {
		return res.status(404).json({ error: 'Armor not found' })
	}

	const armor = await Armor.findOne({ id: id })

	if (!armor) {
		return res.status(404).json({ error: 'Armor not found' })
	}
	res.status(200).json(armor)
}

// create a new Armor
const createArmor = async (req, res) => {
	//TO DO
	console.log(req.body)
	let { itemName, primaryStat, itemRarity, classes, itemDescription, itemPrice } = req.body

	const id = await getFirstFreeId()

	try {
		const newArmor = await Armor.create({
			id,
			itemName,
			primaryStat,
			itemRarity,
			classes,
			itemDescription,
			itemPrice,
		})
		res.status(200).json(newArmor)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

const deleteArmor = async (req, res) => {
	const { id } = req.params

	if (isValidId(id) == false) {
		return res.status(404).json({ error: 'Armor not found' })
	}

	const armor = await Armor.findOneAndDelete({ id: id })

	if (!armor) {
		return res.status(404).json({ error: 'Armor not found!' })
	}

	res.status(200).json(armor)
}

const updateArmor = async (req, res) => {
	const { id } = req.params

	if (isValidId(id) == false) {
		return res.status(404).json({ error: 'Armor not found' })
	}

	const armor = await Armor.findOneAndUpdate({ id: id }, { ...req.body })

	if (!armor) {
		return res.status(404).json({ error: 'Armor not found' })
	}

	res.status(200).json(armor)
}

module.exports = {
	createArmor,
	updateArmor,
	deleteArmor,
	getArmor,
	getArmors,
}
