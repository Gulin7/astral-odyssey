export class User {
	_id
	username
	email
	password
	role

	constructor(_id, username, email, password, role) {
		this._id = _id
		this.username = username
		this.email = email
		this.password = password
		this.role = role
	}

	getId() {
		return this._id
	}

	getUsername() {
		return this.username
	}

	setUsername(newUsername) {
		this.username = newUsername
	}

	getEmail() {
		return this.email
	}

	setEmail(newEmail) {
		this.email = newEmail
	}

	getPassword() {
		return this.password
	}

	setPassword(newPassword) {
		this.password = newPassword
	}

	getRole() {
		return this.role
	}
}
