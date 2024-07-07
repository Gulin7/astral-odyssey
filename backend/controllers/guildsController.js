const mongoose = require('mongoose')

// Require Schemas
const Guild = require('../models/GuildSchema')
const Player = require('../models/PlayerSchema')

// Get all guilds
const getGuilds = async (req, res) => {
	try {
		const guilds = await Guild.find()
		res.json(guilds)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Get a single guild
const getGuild = async (req, res) => {
	const { id } = req.params

	try {
		const guild = await Guild.findById(id)
		if (!guild) {
			return res.status(404).json({ message: 'Guild not found' })
		}
		res.json(guild)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Create a new guild
const createGuild = async (req, res) => {
	const { name, description, pictureURL } = req.body

	const guildLeader = await Player.findOne({ userId: req.user._id })

	try {
		const newGuild = await Guild.create({
			guildName: name,
			guildDescription: description,
			guildPictureURL: pictureURL,
			guildLeader: guildLeader._id,
			guildCoLeader: null,
			guildElites: [],
			guildMembers: [guildLeader._id],
		})
		res.status(201).json(newGuild)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const assignCoLeader = async (req, res) => {
	const guildId = req.params.id

	const { coLeaderId } = req.body

	const player = await Player.findOne({ userId: req.user._id })

	try {
		const guild = await Guild.findById(guildId)
		if (!guild) {
			return res.status(404).json({ message: 'Guild not found' })
		}

		const player = await Player.findById(playerId)
		if (!player) {
			return res.status(404).json({ message: 'Player not found' })
		}

		if (guild.guildLeader.toString() !== player._id.toString()) {
			return res.status(401).json({ message: 'You are not the guild leader' })
		}

		guild.guildCoLeader = player._id
		await guild.save()
		res.json(guild)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const assignElite = async (req, res) => {
	const guildId = req.params.id

	const { eliteId } = req.body

	const player = await Player.findOne({ userId: req.user._id })

	try {
		const guild = await Guild.findById(guildId)
		if (!guild) {
			return res.status(404).json({ message: 'Guild not found' })
		}

		const player = await Player.findById(playerId)
		if (!player) {
			return res.status(404).json({ message: 'Player not found' })
		}

		if (
			guild.guildLeader.toString() !== player._id.toString() ||
			guild.guildCoLeader.toString() !== player._id.toString()
		) {
			return res
				.status(401)
				.json({ message: 'Only the guild leader and co-leader can add Elites!' })
		}

		guild.guildElites.push(player._id)
		await guild.save()
		res.json(guild)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const addMember = async (req, res) => {
	const guildId = req.params.id

	const { memberId } = req.body

	const player = await Player.findOne({ userId: req.user._id })

	try {
		const guild = await Guild.findById(guildId)
		if (!guild) {
			return res.status(404).json({ message: 'Guild not found' })
		}

		const player = await Player.findById(playerId)
		if (!player) {
			return res.status(404).json({ message: 'Player not found' })
		}

		if (
			guild.guildLeader.toString() !== player._id.toString() ||
			guild.guildCoLeader.toString() !== player._id.toString() ||
			guild.guildElites.includes(player._id.toString())
		) {
			return res.status(401).json({ message: 'Members cannot add other members!' })
		}

		guild.guildMembers.push(player._id)
		await guild.save()
		res.json(guild)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const removeMember = async (req, res) => {
	const guildId = req.params.id

	const { memberId } = req.body

	const player = await Player.findOne({ userId: req.user._id })

	try {
		const guild = await Guild.findById(guildId)
		if (!guild) {
			return res.status(404).json({ message: 'Guild not found' })
		}

		const player = await Player.findById(playerId)
		if (!player) {
			return res.status(404).json({ message: 'Player not found' })
		}

		if (
			guild.guildLeader.toString() !== player._id.toString() ||
			guild.guildCoLeader.toString() !== player._id.toString() ||
			guild.guildElites.includes(player._id.toString())
		) {
			return res.status(401).json({ message: 'Members cannot remove other members!' })
		}

		guild.guildMembers = guild.guildMembers.filter(
			(member) => member.toString() !== player._id.toString()
		)
		await guild.save()
		res.json(guild)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const removeElite = async (req, res) => {
	const guildId = req.params.id

	const { eliteId } = req.body

	const player = await Player.findOne({ userId: req.user._id })

	try {
		const guild = await Guild.findById(guildId)
		if (!guild) {
			return res.status(404).json({ message: 'Guild not found' })
		}

		const player = await Player.findById(playerId)
		if (!player) {
			return res.status(404).json({ message: 'Player not found' })
		}

		if (
			guild.guildLeader.toString() !== player._id.toString() ||
			guild.guildCoLeader.toString() !== player._id.toString()
		) {
			return res
				.status(401)
				.json({ message: 'Only the guild leader and co-leader can remove Elites!' })
		}

		guild.guildElites = guild.guildElites.filter(
			(elite) => elite.toString() !== player._id.toString()
		)
		await guild.save()
		res.json(guild)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const removeCoLeader = async (req, res) => {
	const guildId = req.params.id

	const { coLeaderId } = req.body

	const player = await Player.findOne({ userId: req.user._id })

	try {
		const guild = await Guild.findById(guildId)
		if (!guild) {
			return res.status(404).json({ message: 'Guild not found' })
		}

		const player = await Player.findById(playerId)
		if (!player) {
			return res.status(404).json({ message: 'Player not found' })
		}

		if (guild.guildLeader.toString() !== player._id.toString()) {
			return res.status(401).json({ message: 'You are not the guild leader' })
		}

		guild.guildCoLeader = null
		await guild.save()
		res.status(200).json(guild)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const deleteGuild = async (req, res) => {
	const guildId = req.params.id

	const player = await Player.findOne({ userId: req.user._id })

	try {
		const guild = await Guild.findById(guildId)
		if (!guild) {
			return res.status(404).json({ message: 'Guild not found' })
		}

		if (guild.guildLeader.toString() !== player._id.toString()) {
			return res.status(401).json({ message: 'You are not the guild leader.' })
		}

		await guild.remove()
		res.status(200).json({ message: 'Guild deleted' })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Export functions
module.exports = {
	getGuilds,
	getGuild,
	createGuild,
	assignCoLeader,
	assignElite,
	addMember,
	removeMember,
	removeElite,
	removeCoLeader,
	deleteGuild,
}
