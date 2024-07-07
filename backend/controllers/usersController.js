const mongoose = require('mongoose')
const User = require('../models/UserSchema')
const generateToken = require('../utils/generateToken')

//login user
const loginUser = async (req, res) => {
	const { username, password } = req.body

	try {
		const existingUser = await User.login(username, password)

		//create JWT
		generateToken(existingUser._id, existingUser.role, res)

		res.status(200).json({
			_id: existingUser._id,
			username: existingUser.username,
			role: existingUser.role,
		})
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

//signup user
const signupUser = async (req, res) => {
	const { username, email, password, confirmPassword, role } = req.body

	if (password !== confirmPassword) {
		return res.status(400).json({ error: 'Passwords do not match' })
	}

	try {
		// const id = await getFirstFreeId()

		const user = await User.signup(username, email, password, role)

		generateToken(user._id, user.role, res)

		res.status(200).json({
			_id: user._id,
			username: user.username,
			email: user.email,
			role: user.role,
		})
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

module.exports = {
	loginUser,
	signupUser,
}

// //get first free
// const getFirstFreeId = async () => {
// 	let myId = -1
// 	const users = await User.find().sort({ id: 1 })
// 	for (let i = 0; i < users.length; i++) {
// 		if (users[i].id != i + 1) {
// 			myId = i + 1
// 			break
// 		}
// 	}
// 	if (myId == -1) {
// 		myId = users.length + 1
// 	}
// 	return myId
// }

// //find if an id is valid
// const isValidId = async (id) => {
// 	const user = await User.findOne({ id: id })

// 	if (user) {
// 		return true
// 	}
// 	return false
// }
