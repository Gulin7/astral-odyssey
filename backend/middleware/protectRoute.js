const jwt = require('jsonwebtoken')
require('dotenv').config()

const User = require('../models/UserSchema')

const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies.token

		if (!token) {
			return res.status(401).json({ error: 'Unauthorized - no token provided' })
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET || 'suP3rS3cr3tJWT12sojgj*&nfk')

		if (!decoded) {
			return res.status(401).json({ error: 'Unauthorized - invalid token' })
		}

		//Debugging :p
		console.log('decoded: ', decoded)

		console.log('decoded.id: ', decoded.userId)

		const user = await User.findById(decoded.userId).select('-password')

		if (!user) {
			return res.status(404).json({ error: 'User not found' })
		}

		req.user = user

		next()
	} catch (error) {
		console.log('Error in protectRoute: ', error.message)
		res.status(400).json({ error: 'Internal server error' })
	}
}

module.exports = protectRoute
