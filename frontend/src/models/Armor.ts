class Armor {
    private id: number;
    private itemName: string;
    private primaryStat: number;
    private itemRarity: string;
    private classes: Array<string>;
    private itemDescription: string;
    private itemPrice: number;
    private skinURL: string;

    public constructor(
        id: number,
        itemName: string,
        primaryStat: number,
        itemRarity: string,
        classes: Array<string>,
        itemDescription: string,
        itemPrice: number,
        skinURL: string,
    ) {
        this.id = id;
        this.itemName = itemName;
        this.primaryStat = primaryStat;
        this.itemRarity = itemRarity;
        this.classes = classes;
        this.itemDescription = itemDescription;
        this.skinURL = skinURL;
        this.itemPrice = itemPrice;
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

    public setItemName(newName: string): void {
        this.itemName = newName;
    }

    public getPrimaryStat(): number {
        return this.primaryStat;
    }

    public setPrimaryStat(newPrimaryStat: number): void {
        this.primaryStat = newPrimaryStat;
    }

    public getItemRarity(): string {
        return this.itemRarity;
    }

    public setItemRarity(newDurability: string): void {
        this.itemRarity = newDurability;
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

    public setItemPrice(newitemPrice: number): void {
        this.itemPrice = newitemPrice;
    }
}

export default Armor;
