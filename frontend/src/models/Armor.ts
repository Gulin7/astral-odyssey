class Armor {
    private id: number;
    private name: string;
    private defense: number;
    private durability: number;
    private classes: Array<string>;
    private skinURL: string;
    private cost: number;
    private rarity: string;

    public constructor(
        id: number,
        name: string,
        defense: number,
        durability: number,
        classes: Array<string>,
        skinURL: string,
        cost: number,
        rarity: string,
    ) {
        this.id = id;
        this.name = name;
        this.defense = defense;
        this.durability = durability;
        this.classes = classes;
        this.skinURL = skinURL;
        this.cost = cost;
        this.rarity = rarity;
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

    public getDefense(): number {
        return this.defense;
    }

    public setDefense(newDefense: number): void {
        this.defense = newDefense;
    }

    public getDurability(): number {
        return this.durability;
    }

    public setDurability(newDurability: number): void {
        this.durability = newDurability;
    }

    public getClasses(): Array<string> {
        return this.classes;
    }

    public setClasses(newClasses: Array<string>): void {
        this.classes = newClasses;
    }

    public getSkinUrl(): string {
        return this.skinURL;
    }

    public setSkinUrl(newUrl: string): void {
        this.skinURL = newUrl;
    }

    public getCost(): number {
        return this.cost;
    }

    public setCost(newCost: number): void {
        this.cost = newCost;
    }

    public getRarity(): string {
        return this.rarity;
    }

    public setRarity(newRarity: string): void {
        this.rarity = newRarity;
    }
}

export default Armor;
