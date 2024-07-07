const mongoose = require('mongoose')

const Schema = mongoose.Schema

const characterSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	charClass: {
		type: String,
		required: true,
		enum: ['Warrior', 'Mage', 'Rogue', 'Ranger'],
	},
	race: {
		type: String,
		required: true,
		enum: ['Human', 'Elf', 'Dwarf', 'Orc'],
	},
	player: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Player',
		required: true,
	},
	skinURL: {
		type: String,
		required: true,
	},
	level: {
		type: Number,
		required: true,
		default: 1,
	},
})

module.exports = mongoose.model('Character', characterSchema)
