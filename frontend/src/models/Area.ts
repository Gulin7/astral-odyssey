export class Area {
    private id: number;
    private name: string;
    private description: string;
    private difficulty: number;
    private url: string;

    public constructor(
        id: number,
        name: string,
        description: string,
        difficulty: number,
        url: string,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.difficulty = difficulty;
        this.url = url;
    }

    public getId(): number {
        return this.id;
    }

    public setId(newId: number): void {
        this.id = newId;
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

    public getUrl(): string {
        return this.url;
    }

    public setUrl(newUrl: string): void {
        this.url = newUrl;
    }
}
