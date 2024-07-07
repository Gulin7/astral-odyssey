export class User {
    private _id: string;
    private username: string;
    private email: string;
    private password: string;
    private role: boolean;

    public constructor(
        _id: string,
        username: string,
        email: string,
        password: string,
        role: boolean,
    ) {
        this._id = _id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public getId(): string {
        return this._id;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(newUsername: string): void {
        this.username = newUsername;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(newEmail: string): void {
        this.email = newEmail;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(newPassword: string): void {
        this.password = newPassword;
    }

    public getRole(): boolean {
        return this.role;
    }
}
