class PlayerClass {
	_id
	userId
	nickname
	pictureUrl
	guildId

	constructor(_id, userId, nickname, pictureUrl, guildId) {
		this._id = _id
		this.userId = userId
		this.nickname = nickname
		this.pictureUrl = pictureUrl
		this.guildId = guildId
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
}

module.exports = PlayerClass
