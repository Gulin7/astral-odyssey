const mongoose = require('mongoose')

const Schema = mongoose.Schema

const monsterSchema = new Schema({
	monsterName: {
		type: String,
		required: true,
		unique: true,
	},
	monsterDescription: {
		type: String,
		required: true,
	},
	monsterLevel: {
		type: Number,
		required: true,
	},
	isBoss: {
		type: Boolean,
		required: true,
		default: false,
	},
	monsterPictureURL: {
		type: String,
		required: true,
	},
	monsterHealth: {
		type: Number,
		required: true,
	},
	monsterDamage: {
		type: Number,
		required: true,
	},
	monsterDefense: {
		type: Number,
		required: true,
	},
	monsterArea: {
		type: { type: mongoose.Schema.Types.ObjectId, ref: 'Area' },
		required: true,
	},
	armorDrops: {
		type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Armor', default: [] }],
	},
	weaponDrops: {
		type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Weapon', default: [] }],
	},
	potionDrops: {
		type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Potion', default: [] }],
	},
	experienceDrop: {
		type: Number,
		required: true,
	},
})

const Monster = mongoose.model('Monster', monsterSchema)

module.exports = Monster
