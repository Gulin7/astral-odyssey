class Weapon {
    private id: number
    private name: string
    private damage: number
    private classes: Array<string>
    private skinUrl: string
    private cost: number
    private rarity: string

    public constructor(
        id: number,
        name: string,
        damage: number,
        classes: Array<string>,
        skinUrl: string,
        cost: number,
        rarity: string,
    ) {
        this.id = id
        this.name = name
        this.damage = damage
        this.classes = classes
        this.skinUrl = skinUrl
        this.cost = cost
        this.rarity = rarity
    }

    public getId(): number {
        return this.id
    }

    public setId(newId: number): void {
        this.id = newId
    }

    public getName(): string {
        return this.name
    }

    public setName(newName: string): void {
        this.name = newName
    }

    public getDamage(): number {
        return this.damage
    }

    public setDamage(newDamage: number): void {
        this.damage = newDamage
    }

    public getClasses(): Array<string> {
        return this.classes
    }

    public setClasses(newClasses: Array<string>): void {
        this.classes = newClasses
    }

    public getSkinUrl(): string {
        return this.skinUrl
    }

    public setSkinUrl(newUrl: string): void {
        this.skinUrl = newUrl
    }

    public getCost(): number {
        return this.cost
    }

    public setCost(newCost: number): void {
        this.cost = newCost
    }

    public getRarity(): string {
        return this.rarity
    }

    public setRarity(newRarity: string): void {
        this.rarity = newRarity
    }
}

export default Weapon
