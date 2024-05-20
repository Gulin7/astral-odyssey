const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../models/UserSchema')

//generate JWT token
const generateToken = (id) => {
	const JWT_SECRET = process.env.JWT_SECRET || 'suP3rS3cr3tJWT12sojgj*&nfk'

	return jwt.sign({ id: id }, JWT_SECRET, { expiresIn: '7d' })
}

//get first free
const getFirstFreeId = async () => {
	let myId = -1
	const users = await User.find().sort({ id: 1 })
	for (let i = 0; i < users.length; i++) {
		if (users[i].id != i + 1) {
			myId = i + 1
			break
		}
	}
	if (myId == -1) {
		myId = users.length + 1
	}
	return myId
}

// find if an id is valid
const isValidId = async (id) => {
	const user = await User.findOne({ id: id })

	if (user) {
		return true
	}
	return false
}

//login user
const loginUser = async (req, res) => {
	const { username, password } = req.body

	try {
		const existingUser = await User.login(username, password)

		//create JWT
		const token = generateToken(existingUser.id)

		res.status(200).json({ user: existingUser, token })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

//signup user
const signupUser = async (req, res) => {
	const { username, email, password, role } = req.body

	try {
		const id = await getFirstFreeId()

		const user = await User.signup(id, username, email, password, role)

		const token = generateToken(user.id)

		res.status(200).json({ user, token })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

module.exports = {
	loginUser,
	signupUser,
}
