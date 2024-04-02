require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')

// connect to mongodb
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		//listen for requests
		app.listen(process.env.PORT, () => {
			console.log('Server started on port ' + process.env.PORT)
		})
	})
	.catch((err) => {
		console.log(err)
	})
