class Character {
    private id: number;
    private name: string;
    private charClass: string;
    private race: string;
    private playerId: string;
    private skinUrl: string;
    private level: number;

    public constructor(
        id: number,
        name: string,
        charClass: string,
        race: string,
        playerId: string,
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
            return 'src/assets/warrior-default.png';
        } else if (this.charClass === 'Mage') {
            return 'src/assets/mage-default.png';
        } else if (this.charClass === 'Fighter') {
            return 'src/assets/fighter-default.png';
        } else if (this.charClass === 'Ranger') {
            return 'src/assets/ranger-default.png';
        }
        return '';
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

    public getPlayerId(): string {
        return this.playerId;
    }

    public setPlayerId(newPlayerId: string): void {
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
