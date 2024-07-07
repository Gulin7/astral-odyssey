class PlayerClass {
	_id
	userId
	nickname
	pictureUrl
	guildId
	balance

	constructor(_id, userId, nickname, pictureUrl, guildId, balance) {
		this._id = _id
		this.userId = userId
		this.nickname = nickname
		this.pictureUrl = pictureUrl
		this.guildId = guildId
		this.balance = balance
	}

	getId() {
		return this._id
	}

	getUserId() {
		return this.userId
	}

	setUserId(newuserId) {
		this.userId = newuserId
	}

	getNickname() {
		return this.nickname
	}

	setNickname(newNickname) {
		this.nickname = newNickname
	}

	getPictureUrl() {
		return this.pictureUrl
	}

	setPictureUrl(newUrl) {
		this.pictureUrl = newUrl
	}

	getGuildId() {
		return this.guildId
	}

	setGuildId(newGuildId) {
		this.guildId = newGuildId
	}

	getBalance() {
		return this.balance
	}

	setBalance(newBalance) {
		this.balance = newBalance
	}
}

module.exports = PlayerClass
