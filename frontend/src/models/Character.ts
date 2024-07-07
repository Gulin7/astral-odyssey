import { Player } from './Player';

class Character {
    private _id: string;
    private name: string;
    private charClass: string;
    private race: string;
    private player: Player;
    private skinURL: string;
    private level: number;

    public constructor(
        id:string,
        name: string,
        charClass: string,
        race: string,
        player: Player,
        skinURL: string,
        level: number,
    ) {
        this._id = id;
        this.name = name;
        this.charClass = charClass.toLowerCase();
        this.race = race.toLowerCase();
        this.player = player;
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

    public getplayer(): Player {
        return this.player;
    }

    public setplayer(newplayer: Player): void {
        this.player = newplayer;
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
