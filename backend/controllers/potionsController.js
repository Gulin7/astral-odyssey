const mongoose = require('mongoose')
const Potion = require('../models/PotionSchema')

// get all Potions
const getPotions = async (req, res) => {
	const potions = await Potion.find().sort({ id: 1 })

	res.status(200).json(potions)
}

// get a single Potion
const getPotion = async (req, res) => {
	const { id } = req.params

	const potion = await Potion.findOne({ _id: id })

	if (!potion) {
		return res.status(404).json({ error: 'Potion not found' })
	}
	res.status(200).json(potion)
}

// create a new Potion
const createPotion = async (req, res) => {
	//TO DO
	console.log(req.body)
	let { itemName, itemRarity, itemDescription, itemPrice } = req.body

	const id = await getFirstFreeId()

	try {
		const newPotion = await Potion.create({
			itemName,
			itemRarity,
			itemDescription,
			itemPrice,
		})
		res.status(200).json(newPotion)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

const deletePotion = async (req, res) => {
	const { id } = req.params

	const potion = await Potion.findOneAndDelete({ _id: id })

	if (!potion) {
		return res.status(404).json({ error: 'Potion not found!' })
	}

	res.status(200).json(potion)
}

const updatePotion = async (req, res) => {
	const { id } = req.params

	const potion = await Potion.findOneAndUpdate({ _id: id }, { ...req.body })

	if (!potion) {
		return res.status(404).json({ error: 'Potion not found' })
	}

	res.status(200).json(potion)
}

module.exports = {
	createPotion,
	updatePotion,
	deletePotion,
	getPotion,
	getPotions,
}
