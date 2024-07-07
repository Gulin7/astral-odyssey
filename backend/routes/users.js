const express = require('express')
const usersRouter = express.Router()
const protectRoute = require('../middleware/protectRoute')

const {
	loginUser,
	signupUser,
	logoutUser,
	changePassword,
	deleteUser,
	changeUsername,
	changeEmail,
	getUsersForChat,
} = require('../controllers/usersController')

//Login route
usersRouter.post('/login', loginUser)

//Signup route
usersRouter.post('/signup', signupUser)

//Logout route
usersRouter.post('/logout', logoutUser)

// Change password route
usersRouter.post('/changePassword/:id', changePassword)

// Delete user route
usersRouter.delete('/deleteUser/:id', deleteUser)

// Change username route
usersRouter.post('/changeUsername/:id', changeUsername)

// Change email route
usersRouter.post('/changeEmail/:id', changeEmail)

// Get users for chat route
usersRouter.get('/getUsersForChat', protectRoute, getUsersForChat)

module.exports = usersRouter
