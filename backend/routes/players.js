const express = require('express')

const router = express.Router()

// GET all players
router.get('/', (req, res) => {
	res.json({ msg: 'GET all players' })
})

// GET a single player
router.get('/:id', (req, res) => {
	res.json({ msg: 'GET a single player' })
})

// POST a new player
router.post('/', (req, res) => {
	res.json({ msg: 'POST a new player' })
})

// DELETE a player
router.delete('/:id', (req, res) => {
	res.json({ msg: 'DELETE a player' })
})

// UPDATE a player
router.patch('/:id', (req, res) => {
	res.json({ msg: 'UPDATE a player' })
})

module.exports = router
