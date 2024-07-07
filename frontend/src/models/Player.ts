import {User} from './User';

export class Player {
    private _id: string;
    private user: User;
    private nickname: string;
    private pictureUrl: string;

    public constructor(
        id: string,
        user: User,
        nickname: string,
        pictureUrl: string,
    ) {
        this._id = id;
        this.user = user;
        this.nickname = nickname;
        this.pictureUrl = pictureUrl;
    }

    public getId(): string {
        return this._id;
    }

    public setId(newId: string): void {
        this._id = newId;
    }

    public getUser(): User {
        return this.user;
    }

    public setUser(newUser: User): void {
        this.user = newUser;
    }

    public getNickname(): string {
        return this.nickname;
    }

    public setNickname(newNickname: string): void {
        this.nickname = newNickname;
    }

    public getPictureUrl(): string {
        return this.pictureUrl;
    }

    public setPictureUrl(newUrl: string): void {
        this.pictureUrl = newUrl;
    }
}
