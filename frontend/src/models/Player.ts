export class Player {
    private id: number;
    private userId: number;
    private nickname: string;
    private pictureUrl: string;
    private static staticId: number = 1;

    public constructor(userId: number, nickname: string, pictureUrl: string) {
        this.id = Player.staticId;
        this.userId = userId;
        this.nickname = nickname;
        this.pictureUrl = pictureUrl;
        Player.staticId++;
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
