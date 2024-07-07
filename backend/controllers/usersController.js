const mongoose = require('mongoose')
const User = require('../models/UserSchema')
const generateToken = require('../utils/generateToken')

//login user
const loginUser = async (req, res) => {
	const { username, password } = req.body

	console.log('Logging in user: ', username)

	try {
		const existingUser = await User.login(username, password)

		//create JWT
		generateToken(existingUser._id, existingUser.role, res)

		res.status(200).json({
			_id: existingUser._id,
			username: existingUser.username,
			email: existingUser.email,
			role: existingUser.role,
		})
	} catch (error) {
		res.status(400).json({ 'Error logging in': error.message })
	}
}

//signup user
const signupUser = async (req, res) => {
	const { username, email, password, confirmedPassword, role } = req.body

	console.log(password)
	console.log(confirmedPassword)

	if (password != confirmedPassword) {
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
		res.status(400).json({ 'Error signing up': error })
	}
}

const logoutUser = async (req, res) => {
	try {
		res.cookie('token', '', {
			maxAge: 0,
		})
		res.status(200).json({ message: 'Logged out' })
	} catch (error) {
		console.log('Error logging out', error.message)
		res.status(500).json({ error: 'Internal server error' })
	}
}

const changePassword = async (req, res) => {
	try {
		const { oldPassword, newPassword, confirmPassword } = req.body
		const userId = req.params.id

		if (newPassword !== confirmPassword) {
			return res.status(400).json({ error: 'Passwords do not match' })
		}

		const user = await User.findById(userId)

		if (!user) {
			return res.status(404).json({ error: 'User not found' })
		}

		const isMatch = await user.matchPassword(oldPassword)

		if (!isMatch) {
			return res.status(400).json({ error: 'Invalid password' })
		}

		user.password = newPassword
		await user.save()

		console.log('New user: ', user)

		res.status(200).json({ message: 'Password updated' })
	} catch (error) {
		console.log('Error changing password: ', error.message)
		res.status(500).json({ error: 'Internal server error' })
	}
}

const deleteUser = async (req, res) => {
	try {
		const userId = req.params.id

		const user = await User.findById(userId)

		if (!user) {
			return res.status(404).json({ error: 'User not found' })
		}

		const player = await Player.findOne({ userId: userId })

		if (player) {
			await player.remove()
		}

		await user.remove()

		res.status(200).json({ message: 'User deleted' })
	} catch (error) {
		console.log('Error deleting user: ', error.message)
		res.status(500).json({ error: 'Internal server error' })
	}
}

const changeUsername = async (req, res) => {
	try {
		const { username } = req.body
		const userId = req.params.id

		const user = await User.findById(userId)

		if (!user) {
			return res.status(404).json({ error: 'User not found' })
		}

		user.username = username
		await user.save()

		res.status(200).json({ message: 'Username updated' })
	} catch (error) {
		console.log('Error changing username: ', error.message)
		res.status(500).json({ error: 'Internal server error' })
	}
}

const changeEmail = async (req, res) => {
	try {
		const { email } = req.body
		const userId = req.params.id

		const user = await User.findById(userId)

		if (!user) {
			return res.status(404).json({ error: 'User not found' })
		}

		user.email = email
		await user.save()

		res.status(200).json({ message: 'Email updated' })
	} catch (error) {
		console.log('Error changing email: ', error.message)
		res.status(500).json({ error: 'Internal server error' })
	}
}

const getUsersForChat = async (req, res) => {
	try {
		const loggedInUserId = req.user._id

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } })

		res.status(200).json(filteredUsers)
	} catch (error) {
		console.log('Error getting users for chat: ', error.message)
		res.status(500).json({ error: 'Internal server error' })
	}
}

module.exports = {
	loginUser,
	signupUser,
	logoutUser,
	changePassword,
	deleteUser,
	changeUsername,
	changeEmail,
	getUsersForChat,
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
