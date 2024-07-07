export class Player {
    private _id: string;
    private userId: string;
    private nickname: string;
    private pictureUrl: string;

    public constructor(
        id: string,
        userId: string,
        nickname: string,
        pictureUrl: string,
    ) {
        this._id = id;
        this.userId = userId;
        this.nickname = nickname;
        this.pictureUrl = pictureUrl;
    }

    public getId(): string {
        return this._id;
    }

    public setId(newId: string): void {
        this._id = newId;
    }

    public getUserId(): string {
        return this.userId;
    }

    public setUserId(newUserId: string): void {
        this.userId = newUserId;
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
