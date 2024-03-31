class Character {
    private id: number;
    private name: string;
    private charClass: string;
    private race: string;
    private playerId: number;
    private skinUrl: string;
    private level: number;

    public constructor(
        id: number,
        name: string,
        charClass: string,
        race: string,
        playerId: number,
    ) {
        this.id = id;
        this.name = name;
        this.charClass = charClass;
        this.race = race;
        this.playerId = playerId;
        this.skinUrl = this.getDefaultSkinUrl();
        this.level = 1;
    }

    public getDefaultSkinUrl(): string {
        if (this.charClass === 'Warrior') {
            return 'warrior-default.png';
        } else if (this.charClass === 'Mage') {
            return 'mage-default.png';
        } else if (this.charClass === 'Fighter') {
            return 'fighter-default.png';
        } else if (this.charClass === 'Ranger') {
            return 'ranger-default.png';
        }
        return 'warrior-default';
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

    public getCharClass(): string {
        return this.charClass;
    }

    public setCharClass(newClass: string): void {
        this.charClass = newClass;
        this.setSkinUrl(this.getDefaultSkinUrl());
    }

    public getRace(): string {
        return this.race;
    }

    public setRace(newRace: string): void {
        this.race = newRace;
    }

    public getPlayerId(): number {
        return this.playerId;
    }

    public setPlayerId(newPlayerId: number): void {
        this.playerId = newPlayerId;
    }

    public getSkinUrl(): string {
        return this.skinUrl;
    }

    public setSkinUrl(newUrl: string): void {
        this.skinUrl = newUrl;
    }

    public getLevel(): number {
        return this.level;
    }

    public setLevel(newLevel: number): void {
        this.level = newLevel;
    }
}

export default Character;
