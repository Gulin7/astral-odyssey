class Character {
    private _id: string;
    private name: string;
    private charClass: string;
    private race: string;
    private playerId: string;
    private skinURL: string;
    private level: number;

    public constructor(
        _id: string,
        name: string,
        charClass: string,
        race: string,
        playerId: string,
        skinURL: string,
        level: number,
    ) {
        this._id = _id;
        this.name = name;
        this.charClass = charClass.toLowerCase();
        this.race = race.toLowerCase();
        this.playerId = playerId;
        this.skinURL = skinURL;
        this.level = level;
        // this.skinURL = this.getDefaultSkinUrl();
        // this.level = 1;
    }

    public getDefaultSkinUrl(): string {
        if (this.charClass.toLowerCase() === 'warrior') {
            return 'warrior-default.png';
        } else if (this.charClass.toLowerCase() === 'mage') {
            return 'mage-default.png';
        } else if (this.charClass.toLowerCase() === 'fighter') {
            return 'fighter-default.png';
        } else if (this.charClass.toLowerCase() === 'ranger') {
            return 'ranger-default.png';
        }
        return 'warrior-default.png';
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

    public getPlayerId(): String {
        return this.playerId;
    }

    public setPlayerId(newPlayerId: string): void {
        this.playerId = newPlayerId;
    }

    public getSkinUrl(): string {
        return this.skinURL;
    }

    public setSkinUrl(newUrl: string): void {
        this.skinURL = newUrl;
    }

    public getLevel(): number {
        return this.level;
    }

    public setLevel(newLevel: number): void {
        this.level = newLevel;
    }
}

export default Character;
