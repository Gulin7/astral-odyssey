export class Area {
    private _id: string;
    private name: string;
    private description: string;
    private difficulty: number;
    private pictureUrl: string;

    public constructor(
        _id: string,
        name: string,
        description: string,
        difficulty: number,
        pictureUrl: string,
    ) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.difficulty = difficulty;
        this.pictureUrl = pictureUrl;
    }

    public getId(): string {
        return this._id;
    }

    public setId(newId: string): void {
        this._id = newId;
    }

    public getName(): string {
        return this.name;
    }

    public setName(newName: string): void {
        this.name = newName;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(newDescription: string): void {
        this.description = newDescription;
    }

    public getDifficulty(): number {
        return this.difficulty;
    }

    public setDifficulty(newDifficulty: number): void {
        this.difficulty = newDifficulty;
    }

    public getpictureUrl(): string {
        return this.pictureUrl;
    }

    public setpictureUrl(newpictureUrl: string): void {
        this.pictureUrl = newpictureUrl;
    }
}
