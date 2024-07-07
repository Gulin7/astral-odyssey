const mongoose = require('mongoose')
const { type } = require('os')

const Schema = mongoose.Schema

const guildSchema = new Schema(
	{
		guildName: {
			type: String,
			required: true,
		},
		guildDescription: {
			type: String,
			required: true,
		},
		guildPictureURL: {
			type: String,
			required: true,
		},
		guildLeader: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Player',
			required: true,
		},
		guildCoLeader: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Player',
			required: true,
			default: null,
		},
		guildElites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player', default: [] }],
		guildMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'players', default: [] }],
	},
	{ timestamps: true }
)

const Guild = mongoose.model('Guild', guildSchema)

module.exports = Guild
