const mongoose = require('mongoose')
const Armor = require('../models/ArmorSchema')

// get all Armors
const getArmors = async (req, res) => {
	const armors = await Armor.find().sort({ _id: 1 })

	res.status(200).json(armors)
}

// get a single Armor
const getArmor = async (req, res) => {
	const { id } = req.params

	const armor = await Armor.findOne({ _id: id })

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

	const armor = await Armor.findOneAndDelete({ _id: id })

	if (!armor) {
		return res.status(404).json({ error: 'Armor not found!' })
	}

	res.status(200).json(armor)
}

const updateArmor = async (req, res) => {
	const { id } = req.params

	const armor = await Armor.findOneAndUpdate({ _id: id }, { ...req.body })

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
