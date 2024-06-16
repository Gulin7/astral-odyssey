const mongoose = require('mongoose')
const Potion = require('../models/PotionSchema')

const isValidId = async (id) => {
	const potion = await Potion.findOne({ id: id })
	if (potion) {
		return true
	}
	return false
}

const getFirstFreeId = async () => {
	let myId = -1
	const potions = await Potion.find().sort({ id: 1 })
	for (let i = 0; i < potions.length; i++) {
		if (potions[i].id != i + 1) {
			myId = i + 1
			break
		}
	}
	if (myId == -1) {
		myId = potions.length + 1
	}
	return myId
}

// get all Potions
const getPotions = async (req, res) => {
	const potions = await Potion.find().sort({ id: 1 })

	res.status(200).json(potions)
}

// get a single Potion
const getPotion = async (req, res) => {
	const { id } = req.params

	if (isValidId(id) == false) {
		return res.status(404).json({ error: 'Potion not found' })
	}

	const potion = await Potion.findOne({ id: id })

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
			id,
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

	if (isValidId(id) == false) {
		return res.status(404).json({ error: 'Potion not found' })
	}

	const potion = await Potion.findOneAndDelete({ id: id })

	if (!potion) {
		return res.status(404).json({ error: 'Potion not found!' })
	}

	res.status(200).json(potion)
}

const updatePotion = async (req, res) => {
	const { id } = req.params

	if (isValidId(id) == false) {
		return res.status(404).json({ error: 'Potion not found' })
	}

	const potion = await Potion.findOneAndUpdate({ id: id }, { ...req.body })

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
