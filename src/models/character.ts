class Character {
    private id: number;
    private name: string;
    private charClass: string;
    private race: string;
    private skinUrl: string;

    public constructor(
        id: number,
        name: string,
        charClass: string,
        race: string,
        skinUrl: string,
    ) {
        this.id = id;
        this.name = name;
        this.charClass = charClass;
        this.race = race;
        this.skinUrl = skinUrl;
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

    public getcharClass(): string {
        return this.charClass;
    }

    public setcharClass(newClass: string): void {
        this.charClass = newClass;
    }

    public getRace(): string {
        return this.race;
    }

    public setRace(newRace: string): void {
        this.race = newRace;
    }

    public getSkinUrl(): string {
        return this.skinUrl;
    }

    public setSkinUrl(newUrl: string): void {
        this.skinUrl = newUrl;
    }
}

export default Character;
