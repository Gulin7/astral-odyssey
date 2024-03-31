class Potion {
    private id: number
    private name: string
    private effect: string
    private skinUrl: string
    private cost: number
    private rarity: string

    public constructor(
        id: number,
        name: string,
        effect: string,
        skinUrl: string,
        cost: number,
        rarity: string,
    ) {
        this.id = id
        this.name = name
        this.effect = effect
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

    public getEffect(): string {
        return this.effect
    }

    public setEffect(newEffect: string): void {
        this.effect = newEffect
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

export default Potion
