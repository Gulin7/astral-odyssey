class Weapon {
    private id: number;
    private itemName: string;
    private primaryStat: number;
    private classes: Array<string>;
    private itemDescription: string;
    private itemRarity: string;
    private itemPrice: number;
    private skinURL: string;

    public constructor(
        id: number,
        itemName: string,
        primaryStat: number,
        classes: Array<string>,
        itemDescription: string,
        itemRarity: string,
        itemPrice: number,
        skinURL: string,
    ) {
        this.id = id;
        this.itemName = itemName;
        this.primaryStat = primaryStat;
        this.classes = classes;
        this.itemDescription = itemDescription;
        this.skinURL = skinURL;
        this.itemPrice = itemPrice;
        this.itemRarity = itemRarity;
    }

    public getId(): number {
        return this.id;
    }

    public setId(newId: number): void {
        this.id = newId;
    }

    public getItemName(): string {
        return this.itemName;
    }

    public setItemName(newItemName: string): void {
        this.itemName = newItemName;
    }

    public getPrimaryStat(): number {
        return this.primaryStat;
    }

    public setPrimaryStat(newprimaryStat: number): void {
        this.primaryStat = newprimaryStat;
    }

    public getClasses(): Array<string> {
        return this.classes;
    }

    public setClasses(newClasses: Array<string>): void {
        this.classes = newClasses;
    }

    public getItemDescription(): string {
        return this.itemDescription;
    }

    public setItemDescription(newDescription: string): void {
        this.itemDescription = newDescription;
    }

    public getSkinUrl(): string {
        return this.skinURL;
    }

    public setSkinUrl(newUrl: string): void {
        this.skinURL = newUrl;
    }

    public getItemPrice(): number {
        return this.itemPrice;
    }

    public setItemPrice(newCost: number): void {
        this.itemPrice = newCost;
    }

    public getItemRarity(): string {
        return this.itemRarity;
    }

    public setItemRarity(newRarity: string): void {
        this.itemRarity = newRarity;
    }
}

export default Weapon;
