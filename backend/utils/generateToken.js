const jwt = require('jsonwebtoken')
require('dotenv').config()

//generate JWT token
const generateToken = (userId, role, res) => {
	const JWT_SECRET = process.env.JWT_SECRET || 'suP3rS3cr3tJWT12sojgj*&nfk'

	const token = jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: '7d' })

	res.cookie('token', token, {
		maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: 'strict', // CSRF attacks cross-site request forgery attacks
	})
}

module.exports = generateToken
