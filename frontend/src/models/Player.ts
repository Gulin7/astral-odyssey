export class Player {
    private id: number;
    private userId: number;
    private nickname: string;
    private pictureUrl: string;

    public constructor(
        id: number,
        userId: number,
        nickname: string,
        pictureUrl: string,
    ) {
        this.id = id;
        this.userId = userId;
        this.nickname = nickname;
        this.pictureUrl = pictureUrl;
    }

    public getId(): number {
        return this.id;
    }

    public setId(newId: number): void {
        this.id = newId;
    }

    public getuserId(): number {
        return this.userId;
    }

    public setuserId(newuserId: number): void {
        this.userId = newuserId;
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
