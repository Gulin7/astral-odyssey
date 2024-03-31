export class Player {
    private id: number;
    private username: string;
    private nickname: string;
    private pictureUrl: string;

    public constructor(
        id: number,
        username: string,
        nickname: string,
        pictureUrl: string,
    ) {
        this.id = id;
        this.username = username;
        this.nickname = nickname;
        this.pictureUrl = pictureUrl;
    }

    public getId(): number {
        return this.id;
    }

    public setId(newId: number): void {
        this.id = newId;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(newUsername: string): void {
        this.username = newUsername;
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
