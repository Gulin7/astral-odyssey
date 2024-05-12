const mongoose = require('mongoose')
const Armor = require('../models/armorSchema')

const isValidId = async (id) => {
	const Armor = await Armor.findOne({ id: id })
	if (Armor) {
		return true
	}
	return false
}

const getFirstFreeId = async () => {
	let myId = -1
	const Armors = await Armor.find().sort({ id: 1 })
	for (let i = 0; i < Armors.length; i++) {
		if (Armors[i].id != i + 1) {
			myId = i + 1
			break
		}
	}
	if (myId == -1) {
		myId = Armors.length + 1
	}
	return myId
}

// get all Armors
const getArmors = async (req, res) => {
	const Armors = await Armor.find().sort({ id: 1 })

	res.status(200).json(Armors)
}

// get a single Armor
const getArmor = async (req, res) => {
	const { id } = req.params

	if (isValidId(id) == false) {
		return res.status(404).json({ error: 'Armor not found' })
	}

	const Armor = await Armor.findOne({ id: id })

	if (!Armor) {
		return res.status(404).json({ error: 'Armor not found' })
	}
	res.status(200).json(Armor)
}

// create a new Armor
const createArmor = async (req, res) => {
	//TO DO
	const id = await getFirstFreeId()
	try {
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' })
	}
}

const deleteArmor = async (req, res) => {
	const { id } = req.params

	if (isValidId(id) == false) {
		return res.status(404).json({ error: 'Armor not found' })
	}

	const Armor = await Armor.findOneAndDelete({ id: id })
}

const updateArmor = async (req, res) => {
	const { id } = req.params

	if (isValidId(id) == false) {
		return res.status(404).json({ error: 'Armor not found' })
	}

	const Armor = await Armor.findOneAndUpdate({ id: id }, { ...req.body })

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
